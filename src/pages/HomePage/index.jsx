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
              <AnchorTitle anchor="about">Sobre mim</AnchorTitle>
              <p>
                Oi, meu nome é André Silveira, tudo bem? Minha jornada na
                programação se iniciou de maneira muito curiosa, criando scripts
                VBA para Excel. Já na época eu era motivado pela criação de
                interfaces. Depois disso eu conheci o Scratch, uma plataforma de
                programação e lógica para crianças, onde passei muitos anos da
                minha vida fazendo joguinhos e criando amigos. Futuramente, tive
                contato com PHP criando CMS’es personalizadas para jogos como
                Habbo Hotel e Transformice. Por fim, mais interessado em
                programação de fato, tive meu primeiro contato com JavaScript
                através do NodeJS, criando pequenos bots para a plataforma do
                Telegram.
              </p>
              <p>
                Sempre estive desorientado sobre o que aprender, até que conheci
                o curso da Kenzie, o qual foi capaz de me fornecer uma trilha de
                aprendizado sólida para finalmente dar o pontapé no mundo da
                programação como profissão, e não apenas um hobbie.
              </p>
              <p>
                Em julho de 2022, concluí a primeira metade do curso, a qual me
                deu total capacidade de entender e trabalhar com o front-end, o
                que sempre casou com meu apelo estético e me deu a minha maior
                motivação:{" "}
                <strong>
                  desenvolver sites que inspirem pessoas assim como eu, quando
                  ainda criança, fui inspirado.
                </strong>{" "}
                Atualmente estou à procura de uma primeira colocação no mercado
                de trabalho.
              </p>
            </TextGroup>
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
          </article>
        </ContentContainer>
      </ContentArea>
      <ContactFooter />
    </HomePageContainer>
  );
}
