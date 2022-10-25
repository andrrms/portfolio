import { useSwipeable } from "react-swipeable";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import Polaroid from "../PolaroidStripes/Polaroid";

import {
  CarouselList,
  PolaroidGroupContainer,
  MainPolaroid,
  LeftPolaroid,
  RightPolaroid,
  Controls,
  MediaButton,
} from "./styles";
import { useState, useRef, useEffect } from "react";

export default function PolaroidGroup({ photos, webpPhotos, children, alt }) {
  if (!Array.isArray(photos))
    throw new Error("Polaroid group must receive a photos array argument");
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [animation, setAnimation] = useState("");
  const mainPolaroidRef = useRef();
  const handlers = useSwipeable({
    onSwipedLeft: goToPrevPhoto,
    onSwipedRight: goToNextPhoto,
    trackMouse: false,
    preventScrollOnSwipe: true,
  });

  useEffect(() => console.log(animation), [animation]);

  function prevPhoto(skip = 1) {
    return photos.indexOf(photos.at(selectedPhoto - skip));
  }

  function nextPhoto(skip = 1) {
    if (selectedPhoto + skip >= photos.length) {
      return 0;
    } else {
      return photos.indexOf(photos.at(selectedPhoto + skip));
    }
  }

  function goToNextPhoto() {
    setAnimation("right");
    setSelectedPhoto(nextPhoto());
  }

  function goToPrevPhoto() {
    setAnimation("left");
    setSelectedPhoto(prevPhoto());
  }

  function handleAnimationEnd() {
    setAnimation("");
  }

  return (
    <PolaroidGroupContainer>
      <CarouselList ref={handlers.ref}>
        <LeftPolaroid anim={!!animation}>
          <Polaroid
            mainPicture={photos[prevPhoto()]}
            webpPicture={webpPhotos[prevPhoto()]}
            noTransform
            mainPictureAltText={alt}
          />
        </LeftPolaroid>
        <MainPolaroid
          ref={mainPolaroidRef}
          anim={animation}
          onAnimationEnd={handleAnimationEnd}
          onClick={goToNextPhoto}
        >
          <Polaroid
            mainPicture={photos[selectedPhoto]}
            webpPicture={webpPhotos[selectedPhoto]}
            noTransform
            noSticker
            mainPictureAltText={alt}
          >
            {children}
          </Polaroid>
        </MainPolaroid>
        <RightPolaroid anim={!!animation}>
          <Polaroid
            mainPicture={photos[nextPhoto()]}
            webpPicture={webpPhotos[nextPhoto()]}
            noTransform
            mainPictureAltText={alt}
          />
        </RightPolaroid>
      </CarouselList>
      <Controls>
        <MediaButton onClick={goToPrevPhoto} aria-label="Imagem anterior">
          <FiArrowLeft />
        </MediaButton>
        <span>
          {selectedPhoto + 1}/{photos.length}
        </span>
        <MediaButton onClick={goToNextPhoto} aria-label="Próxima imagem">
          <FiArrowRight />
        </MediaButton>
      </Controls>
    </PolaroidGroupContainer>
  );
}
