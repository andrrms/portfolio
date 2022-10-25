import { useEffect, useState } from "react";
import {
  Figure,
  FigureRow,
  HiddenMeter,
  MeterTitle,
  Percentage,
  SkillMeterContainer,
} from "./styles";

export default function SkillMeter({
  img,
  webpImg,
  alt,
  value,
  max = 5,
  name,
  color = "#000",
  darkMode = false,
}) {
  const [figure, setFigure] = useState([]);
  const [webpFigure, setWebpFigure] = useState([]);
  const [rotation, setRotation] = useState([]);
  const [multiplier, setMultiplier] = useState([]);

  useEffect(() => {
    const figArr = [];
    const webpArr = [];
    const rotArr = [];
    const multArr = [];
    for (let i = 0; i < max; i++) {
      const rot = Math.floor(Math.random() * 9);
      const mult = Math.random() > 0.5 ? 1 : -1;

      rotArr.push(rot);
      multArr.push(mult);

      if (Array.isArray(img)) {
        figArr.push(img[Math.floor(Math.random() * img.length)]);
        webpArr.push(webpImg[Math.floor(Math.random() * img.length)]);
      } else {
        figArr.push(img);
        webpArr.push(webpImg);
      }
    }

    setRotation(rotArr);
    setMultiplier(multArr);
    setFigure(figArr);
    setWebpFigure(webpArr);
  }, []);

  // TODO: Should move this to a .utils.js?
  function proportionCalc(magnitude1, magnitude2, y) {
    return (magnitude1 * y) / magnitude2;
  }

  const skillPercentage = Math.floor(proportionCalc(100, max, value));

  return (
    <SkillMeterContainer items={max}>
      <MeterTitle>
        <Percentage color={color}>{skillPercentage}%</Percentage> {name}
      </MeterTitle>
      <HiddenMeter value={value} max={max} aria-label={name} />
      <FigureRow>
        {figure.map((figu, i) => {
          const isOff = i >= value;

          return (
            <Figure
              key={i}
              rotation={multiplier[i] * rotation[i]}
              type={isOff ? "off" : ""}
            >
              <picture>
                <source
                  srcSet={(() =>
                    Array.isArray(webpFigure) ? webpFigure[i] : webpFigure)()}
                />
                <source srcSet={figu} />
                <img src={figu} alt={alt} draggable={false} loading="lazy" />
              </picture>
            </Figure>
          );
        })}
      </FigureRow>
    </SkillMeterContainer>
  );
}
