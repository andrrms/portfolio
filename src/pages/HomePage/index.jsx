import React, { useContext } from "react";

import Hero from "../../components/Hero";
import AnchorTitle from "../../components/AnchorTitle";
import ContentContainer from "../../styles/ContentContainer";
import ContactFooter from "../../components/ContactFooter";
import SkillsList from "../../components/SkillsList";
import PolaroidGroup from "../../components/PolaroidGroup";

import Kid1Pic from "../../assets/kid1.png";
import WebpKid1Pic from "../../assets/kid1.webp";
import Kid2Pic from "../../assets/kid2.png";
import WebpKid2Pic from "../../assets/kid2.webp";
import { ModalContext } from "../../contexts/ModalProvider";
import { HomePageContainer, ContentArea, TextGroup } from "./styles";

export default function HomePage() {
  const { open } = useContext(ModalContext);

  return (
    <HomePageContainer>
      <Hero />
      <ContentArea>
        <ContentContainer>
          <article>
            <TextGroup>
              <AnchorTitle anchor="skills">Minhas hard-skills</AnchorTitle>
              <p>
                Todas as skills foram calculadas a partir de uma lista de
                critérios específicos. Você pode selecionar qualquer uma das
                habilidades para saber quais critérios são esses.
              </p>
              <SkillsList />
              <h2>Minhas soft-skills</h2>
              <p>Algumas soft-skills por aqui</p>
            </TextGroup>
            <TextGroup>
              <AnchorTitle anchor="projects">Meus projetos</AnchorTitle>
              <button onClick={() => open("project-info", { id: 1 })}>
                Abrir modal de projeto
              </button>
              <ul>
                <li>Algum projetinho</li>
                <li>Algum outro projeto</li>
                <li>Projeto super legal</li>
              </ul>
            </TextGroup>
            <TextGroup className="horizontalContent">
              <div>
                <AnchorTitle anchor="about">Sobre mim</AnchorTitle>
                <p>
                  Desde muito jovem, me interessei por programação e interfaces,
                  e tive meu primeiro contato com a linguagem VBA para Excel.
                  Mais tarde, aprendi a usar a plataforma Scratch para criar
                  joguinhos e amigos virtuais. Eventualmente, me interessei por
                  programação de fato, e tive meu primeiro contato através do
                  PHP, criando CMS customizadas para habbos piratas em PHP. Mais
                  tarde, conheci o JavaScript através do NodeJS, criando
                  pequenos bots para Telegram.
                </p>
                <p>
                  Atualmente estou cursando o programa de desenvolvimento web
                  full-stack da Kenzie, o qual me deu total capacidade de
                  trabalhar com o front-end (e futuramente com back-end também),
                  o que sempre casou com meu apelo estético. Estou à procura da
                  minha primeira colocação no mercado de trabalho, e espero
                  poder desenvolver sites que inspirem outras pessoas assim como
                  fui inspirado quando criança.
                </p>
              </div>
              <div className="photoArea">
                <PolaroidGroup
                  photos={[Kid1Pic, Kid2Pic]}
                  webpPhotos={[WebpKid1Pic, WebpKid2Pic]}
                  alt="Fotos minhas de quando eu era criança. Na época eu tinha em torno de 9 anos, estou usando uma camisa branca de mangas amarelas, e de pé em frente ao computador. Meu cabelo na época era no formato de tigelinha."
                >
                  Olha eu criança :)
                </PolaroidGroup>
              </div>
            </TextGroup>
          </article>
        </ContentContainer>
      </ContentArea>
      <ContactFooter />
    </HomePageContainer>
  );
}
