import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

import {
  NavbarContainer,
  NavbarContent,
  NavButton,
  LinksList,
  SmoothAnchor,
} from "./styles";

export default function Navbar({ primary, hideMobile }) {
  const [isSmallVP, setIsSmallVP] = useState(0);

  useEffect(() => {
    function determineViewport() {
      setIsSmallVP(window.innerWidth <= 1024);
    }

    determineViewport();

    window.addEventListener("resize", determineViewport);

    return () => window.removeEventListener("resize", determineViewport);
  });

  return (
    !isSmallVP &&
    hideMobile && (
      <NavbarContainer primary={primary}>
        <NavbarContent>
          {isSmallVP ? (
            <>
              <NavButton
                onClick={() => alert("Clicado")}
                aria-label="Menu lateral"
              >
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
    )
  );
}
