import React from "react";

import Hero from "../../components/Hero";
import AnchorTitle from "../../components/AnchorTitle";
import ContentContainer from "../../styles/ContentContainer";

import { HomePageContainer, ContentArea, TextGroup } from "./styles";
import ContactFooter from "../../components/ContactFooter";

export default function HomePage() {
  return (
    <HomePageContainer>
      <Hero />
      <ContentArea>
        <ContentContainer>
          <article>
            <TextGroup>
              <AnchorTitle anchor="skills">Minhas hard-skills</AnchorTitle>
              <p>Algumas hard-skills por aqui</p>
              <h2>Minhas soft-skills</h2>
              <p>Algumas soft-skills por aqui</p>
            </TextGroup>
            <TextGroup>
              <AnchorTitle anchor="projects">Meus projetos</AnchorTitle>
              <ul>
                <li>Algum projetinho</li>
                <li>Algum outro projeto</li>
                <li>Projeto super legal</li>
              </ul>
            </TextGroup>
            <TextGroup>
              <AnchorTitle anchor="about">Sobre mim</AnchorTitle>
              <p>
                Desde muito jovem, me interessei por programação e interfaces, e
                tive meu primeiro contato com a linguagem VBA para Excel. Mais
                tarde, aprendi a usar a plataforma Scratch para criar joguinhos
                e amigos virtuais. Eventualmente, me interessei por programação
                de fato, e tive meu primeiro contato através do PHP, criando CMS
                customizadas para habbos piratas em PHP. Mais tarde, conheci o
                JavaScript através do NodeJS, criando pequenos bots para
                Telegram.
              </p>
              <p>
                Atualmente estou cursando o programa de desenvolvimento web
                full-stack da Kenzie, o qual me deu total capacidade de
                trabalhar com o front-end (e futuramente com back-end também), o
                que sempre casou com meu apelo estético. Estou à procura da
                minha primeira colocação no mercado de trabalho, e espero poder
                desenvolver sites que inspirem outras pessoas assim como fui
                inspirado quando criança.
              </p>
            </TextGroup>
          </article>
        </ContentContainer>
      </ContentArea>
      <ContactFooter />
    </HomePageContainer>
  );
}
