import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

import {
  NavbarContainer,
  NavbarContent,
  NavButton,
  LinksList,
  SmoothAnchor,
} from "./styles";

export default function Navbar() {
  const [isSmallVP, setIsSmallVP] = useState(0);

  useEffect(() => {
    function determineViewport() {
      setIsSmallVP(window.innerWidth <= 1024);
    }

    determineViewport();

    window.addEventListener("resize", determineViewport);

    return () => window.addEventListener("resize", determineViewport);
  });

  return (
    <NavbarContainer>
      <NavbarContent>
        {isSmallVP ? (
          <>
            <NavButton onClick={() => alert("Clicado")}>
              <FiMenu />
            </NavButton>
          </>
        ) : (
          <LinksList>
            <li>
              <SmoothAnchor href="#about">Sobre mim</SmoothAnchor>
            </li>
            <li>
              <SmoothAnchor href="#skills">Minhas skills</SmoothAnchor>
            </li>
            <li>
              <SmoothAnchor href="#projects">Meus projetos</SmoothAnchor>
            </li>
            <li>
              <SmoothAnchor href="#contact">Contato</SmoothAnchor>
            </li>
          </LinksList>
        )}
      </NavbarContent>
    </NavbarContainer>
  );
}
