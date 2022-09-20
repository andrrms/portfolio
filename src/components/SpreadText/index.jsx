import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

import {
  SpreadTextContainer,
  GhostText,
  GhostText2,
  ActualText,
  TextContainer,
  ScrollingMarquee,
  RefText,
} from "./styles";

export default function SpreadText({ text, reversedAnimation }) {
  const textRef = useRef();
  const [finalText, setFinalText] = useState(text);
  const [computedCharSize, setComputedCharSize] = useState(36);
  const [computedTextSize, setComputedTextSize] = useState(
    computedCharSize * text.length
  );

  const computeCharacterSize = (el) => el.current.offsetWidth / text.length;

  useLayoutEffect(() => {
    setComputedCharSize(computeCharacterSize(textRef));
    setComputedTextSize(textRef.current.offsetWidth);

    function computeStringSize(mockWidth) {
      const screenWidth = mockWidth || window.innerWidth;

      setFinalText("");
      let totalSize = 0;
      let iFinalText = "";
      for (let i = 0; totalSize <= screenWidth; i++) {
        iFinalText += text;
        totalSize += computedTextSize;
      }

      setFinalText(iFinalText);
    }

    let timer;
    /* function debounce(func, timeout = 300) {
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    } */

    computeStringSize();

    textRef.current.remove();
  }, []);

  return (
    <SpreadTextContainer>
      <RefText ref={textRef}>{finalText}</RefText>
      <ScrollingMarquee>
        <GhostText reversed={!!reversedAnimation} aria-hidden={true}>
          {finalText}
        </GhostText>
        <GhostText2 reversed={!!reversedAnimation} aria-hidden={true}>
          {finalText}
        </GhostText2>
      </ScrollingMarquee>
      <TextContainer>
        <ActualText>{text}</ActualText>
      </TextContainer>
    </SpreadTextContainer>
  );
}
