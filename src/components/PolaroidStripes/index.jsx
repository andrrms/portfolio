import { FiGithub } from "react-icons/fi";

import Polaroid from "./Polaroid";

import {
  WineStripe,
  OrangeStripe,
  PolaroidStripesContainer,
  RedStripe,
  YellowStripe,
  StripesContent,
  PolaroidLink,
} from "./styles";

import ProfilePicture from "../../assets/profile.jpeg";
import WebpProfilePicture from "../../assets/profile.webp";
import MemojiSticker from "../../assets/memoji_sticker.png";
import WebpMemojiSticker from "../../assets/sticker.webp";

export default function PolaroidStripes() {
  return (
    <PolaroidStripesContainer>
      <YellowStripe />
      <OrangeStripe />
      <RedStripe />
      <WineStripe />
      <StripesContent>
        <Polaroid
          mainPicture={ProfilePicture}
          webpPicture={WebpProfilePicture}
          mainPictureAltText="Uma foto do André com um leve sorriso olhando para a câmera. Ele está usando uma camiseta cinza, com o céu azul ao fundo. A luz do sol rebate sobre o contorno dos seus cabelos, que caem até o ombro."
          sticker={MemojiSticker}
          webpSticker={WebpMemojiSticker}
          stickerAltText="Avatar em 3D do André, feito a partir da tecnologia Memoji da empresa Apple. O avatar está sorrindo e acenando com a mão esquerda. Ele usa uma jaqueta moletom amarela. Ao lado do memoji, tem um emoji sorrindo com os olhos fechados."
        >
          <PolaroidLink href="https://github.com/andrrms">
            <FiGithub />
            @andrrms
          </PolaroidLink>
        </Polaroid>
      </StripesContent>
    </PolaroidStripesContainer>
  );
}
