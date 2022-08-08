import {
  PolaroidContainer,
  PolaroidSticker,
  PolaroidPhotoContainer,
  PolaroidCaption,
} from "./styles";

export default function Polaroid({
  mainPicture,
  mainPictureAltText,
  sticker,
  stickerAltText,
  children,
}) {
  return (
    <PolaroidContainer>
      <PolaroidPhotoContainer>
        <img src={mainPicture} alt={mainPictureAltText} />
        <PolaroidCaption>{children}</PolaroidCaption>
      </PolaroidPhotoContainer>
      <PolaroidSticker>
        <img src={sticker} alt={stickerAltText} />
      </PolaroidSticker>
    </PolaroidContainer>
  );
}
