import {
  PolaroidContainer,
  PolaroidSticker,
  PolaroidPhotoContainer,
  PolaroidCaption,
} from "./styles";

export default function Polaroid({
  mainPicture,
  webpPicture,
  mainPictureAltText,
  sticker,
  webpSticker,
  stickerAltText,
  children,
  noTransform,
  noSticker,
}) {
  return (
    <PolaroidContainer noTransform={noTransform}>
      <PolaroidPhotoContainer>
        <picture>
          <source srcSet={webpPicture} />
          <source srcSet={mainPicture} />
          <img
            src={mainPicture}
            alt={mainPictureAltText}
            width="100%"
            height="100%"
          />
        </picture>
        {/* <img src={mainPicture} alt={mainPictureAltText} /> */}
        <PolaroidCaption fullArea={noSticker}>{children}</PolaroidCaption>
      </PolaroidPhotoContainer>
      {!noSticker && (
        <PolaroidSticker>
          {/* <img src={sticker} alt={stickerAltText} /> */}
          <picture>
            <source srcSet={webpSticker} />
            <source srcSet={sticker} />
            <img
              src={sticker}
              alt={stickerAltText}
              width="100%"
              height="100%"
            />
          </picture>
        </PolaroidSticker>
      )}
    </PolaroidContainer>
  );
}
