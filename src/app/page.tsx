import Image from "next/image";
import { GithubLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react/dist/ssr";
import ProfilePicture from "@/../public/eu.webp";
import ExpandableText from "@/components/ExpandableText";

export default function Home() {
  return (
    <main>
      <header className="mt-28 mb-[175px] sm:mb-[175px] w-full relative">
        <div aria-hidden="true" className="w-full h-7 sm:9 md:h-10 bg-custom-yellow"></div>
        <div aria-hidden="true" className="w-full h-7 sm:9 md:h-10 bg-custom-orange"></div>
        <div aria-hidden="true" className="w-full h-7 sm:9 md:h-10 bg-custom-red-500"></div>
        <div aria-hidden="true" className="w-full h-7 sm:9 md:h-10 bg-custom-red-300"></div>
        <div className="absolute w-full max-w-xl md:max-w-2xl left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row -top-1/2 justify-between items-center">
          <div aria-hidden="true" className="relative w-[180px] sm:w-[210px] md:w-[280px] h-[220px] sm:h-[260px] md:h-[340px] group/polaroid hover:scale-105 transition-all duration-300">
            <div className="w-[180px] sm:w-[210px] md:w-[280px] h-[220px] sm:h-[260px] md:h-[340px] rounded-sm bg-white p-3 absolute top-0 left-0 -rotate-6 shadow-lg group-hover/polaroid:-rotate-9 transition-all duration-300">
              {/* Nothing */}
            </div>
            <div className="w-[180px] sm:w-[210px] md:w-[280px] h-[220px] sm:h-[260px] md:h-[340px] rounded-sm bg-white p-3 absolute top-0 left-0 rotate-2 shadow-xl group-hover/polaroid:rotate-4 transition-all duration-300">
              {/* <div className="aspect-square w-full bg-black"></div> */}
              <Image priority src={ProfilePicture} alt="Um homem de cabelos compridos e camiseta preta tirando uma selfie em uma ponte sobre uma rodovia movimentada com carros, palmeiras e grafites ao fundo" className="aspect-square w-full bg-black" />
            </div>
          </div>
          <div className="mt-6 sm:mt-2 md:mt-10 relative">
            <h1 className="text-center sm:text-end font-sans sm:font-mono font-semibold sm:font-bold text-3xl sm:text-6xl md:text-7xl leading-9 sm:leading-[55px] md:leading-[80px] text-sl">André<br className="hidden sm:block"/> Silveira</h1>
            <h2 className="mt-1 sm:mt-0 text-xl md:text-2xl text-end font-sans sm:font-mono font-normal sm:font-bold text-slate-400 sm:text-custom-yellow">Desenvolvedor Full-stack</h2>
          </div>
        </div>
      </header>
      <article className="w-full max-w-2xl mx-auto p-4 text-md md:text-lg text-slate-400 leading-relaxed">
        <h3 className="sr-only">Sobre mim</h3>
        <p>Eu sou um desenvolvedor de software especializado em tecnologias da web. Possuo 2 anos de experiência no mercado de trabalho, trabalhando principalmente no setor bancário e de investimentos. <ExpandableText>Nesse meio tempo, atuei em conjunto com times multidisciplinares, com foco em resultado para o cliente.</ExpandableText></p>
        <p className="mt-5">Durante esse tempo, eu trabalhei com uma variedade de linguagens e serviços<ExpandableText>, incluindo PHP, Node.js, TypeScript, HTML, CSS, React, Vercel, Docker, Next.js, Versionamento com Git, Redis, AWS, MySQL, SQLServer, entre muitos outros</ExpandableText>, e também estudei outras por conta própria<ExpandableText>, como Rust, Elixir e Python,</ExpandableText> para aprender novos conceitos e aumentar meu leque de ferramentas. Também atuei em diversas áreas no desenvolvimento de software. <ExpandableText>Isso me deu uma maior compreensão e perspectiva sobre o ciclo de vida de um produto.</ExpandableText></p>
        <p className="mt-5">Embora seja um desenvolvedor full-stack, a minha maior paixão está no desenvolvimento front-end, desde o design e planejamento até a execução<ExpandableText>, tudo isso sempre com foco em acessibilidade, semântica e experiência do usuário</ExpandableText>. Priorizo o desenvolvimento de funcionalidades visualmente elegantes e que façam sentido para o produto. <ExpandableText>Graças a isso, tive a oportunidade de usar ferramentas de design<ExpandableText>, tais como Adobe Photoshop e Illustrator, para a criação, edição e vetorização de imagens e layouts; e Figma, para o planejamento, prototipação de sistemas e feedback de clientes, assim como a criação de sistemas de design e guidelines</ExpandableText>, e com isso expandindo meus conhecimentos em UI/UX.</ExpandableText></p>
      </article>
      <aside className="w-full max-w-2xl mx-auto p-4 text-lg text-slate-300">
        <h3 className="sr-only">Meus links</h3>
        <ul className="flex flex-col gap-2 md:flex-row md:gap-6">
          <li>
            <a href="https://github.com/andrrms" className="flex items-center gap-3 w-full md:w-fit bg-slate-800 md:bg-transparent rounded-md p-2 px-3 md:p-0 hover:bg-slate-700 hover:bg-transparent text-slate-400 hover:text-white md:underline md:leading-4 transition-all duration-100"><span className="text-2xl"><GithubLogo weight="fill" /></span> GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/andrrms/" className="flex items-center gap-3 w-full md:w-fit bg-slate-800 md:bg-transparent rounded-md p-2 px-3 md:p-0 hover:bg-slate-700 hover:bg-transparent text-slate-400 hover:text-white md:underline md:leading-4 transition-all duration-100"><span className="text-2xl"><LinkedinLogo weight="fill" /></span> LinkedIn</a>
          </li>
          <li>
            <a href="mailto:pro.andresilveira@gmail.com" className="flex items-center gap-3 w-full md:w-fit bg-slate-800 md:bg-transparent rounded-md p-2 px-3 md:p-0 hover:bg-slate-700 hover:bg-transparent text-slate-400 hover:text-white md:underline md:leading-4 transition-all duration-100"><span className="text-2xl"><Envelope weight="fill" /></span> Email</a>
          </li>
        </ul>
      </aside>
      {/* <section className="w-full max-w-2xl mx-auto p-4 text-md text-slate-300">
        <h3 className="sr-only">Depoimentos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-4">
            <article className="bg-slate-800 p-3 rounded-md text-md min-h-max">
              <header className="flex gap-2">
                <Image src={ProfilePicture} alt="" className="aspect-square w-12 h-12 rounded-full" />
                <div className="flex flex-col">
                  <p>John Doe</p>
                  <p className="text-sm text-slate-400">Software Engineer</p>
                </div>
              </header>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </article>
            <article className="bg-slate-800 p-3 rounded-md text-md min-h-max">
              <header className="flex gap-2">
                <Image src={ProfilePicture} alt="" className="aspect-square w-12 h-12 rounded-full" />
                <div className="flex flex-col">
                  <p>John Doe</p>
                  <p className="text-sm text-slate-400">Software Engineer</p>
                </div>
              </header>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem neque dolores amet iusto voluptate impedit repellat! Fugiat asperiores laboriosam quis doloribus, aspernatur ratione exercitationem cupiditate iure illo omnis provident expedita.</p>
            </article>
            <article className="bg-slate-800 p-3 rounded-md text-md min-h-max">
              <header className="flex gap-2">
                <Image src={ProfilePicture} alt="" className="aspect-square w-12 h-12 rounded-full" />
                <div className="flex flex-col">
                  <p>John Doe</p>
                  <p className="text-sm text-slate-400">Software Engineer</p>
                </div>
              </header>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sequi nulla provident. Omnis est reiciendis cum fugit minima soluta dolore cupiditate in tenetur enim. Nobis consequuntur non quisquam neque sapiente!</p>
            </article>
          </div>
          <div className="grid gap-4">
            <article className="bg-slate-800 p-3 rounded-md text-md min-h-max">
              <header className="flex gap-2">
                <Image src={ProfilePicture} alt="" className="aspect-square w-12 h-12 rounded-full" />
                <div className="flex flex-col">
                  <p>John Doe</p>
                  <p className="text-sm text-slate-400">Software Engineer</p>
                </div>
              </header>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptates cupiditate saepe quis tempora temporibus explicabo nam corporis inventore error repellat esse autem ipsa quam nulla, obcaecati accusamus consequatur commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, recusandae mollitia dolor fugiat vero distinctio quo soluta itaque. Odio in earum necessitatibus alias veritatis voluptate illum iusto, recusandae pariatur consequatur.</p>
            </article>
            <article className="bg-slate-800 p-3 rounded-md text-md min-h-max">
              <header className="flex gap-2">
                <Image src={ProfilePicture} alt="" className="aspect-square w-12 h-12 rounded-full" />
                <div className="flex flex-col">
                  <p>John Doe</p>
                  <p className="text-sm text-slate-400">Software Engineer</p>
                </div>
              </header>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </article>
          </div>
        </div>
      </section> */}
      <footer className="w-full max-w-2xl mx-auto p-4 text-lg text-slate-400">
        <p>Se você quiser entrar em contato comigo, sinta-se à vontade para me <a href="mailto:pro.andresilveira@gmail.com" className="font-bold underline hover:text-slate-100 transition ease-in-out duration-100">enviar um e-mail</a>.</p>
      </footer>
    </main>
  );
}
