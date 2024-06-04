import { ArrowUpRight, GithubLogo, Globe } from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";
import jsonProjetos from "@/data/projetos.json";

export const metadata: Metadata = {
  title: "André Silveira | Projetos",
  description: "Projetos que eu desenvolvi",
};

interface Projetos {
	nome: string;
	description: string;
	url?: string;
	repo?: string;
	metricas: {
		titulo: string;
		valor: string;
	}[];
}

export default function Projetos() {
	// Workaround, já que o TypeScript reclama se o meu
	// JSON estático não tiver populado com os dados
	const projetos = jsonProjetos.destaques as Projetos[];

	return (
		<main className="w-full max-w-2xl mx-auto p-4 text-md text-slate-300">
			<h1 className="text-3xl font-bold text-slate-100 mt-3">Meus Projetos</h1>
			{projetos.length > 0 && (
				<>
					<p className="mt-2">Aqui estão alguns dos projetos que eu fiz, seja para uma prova de conceito ou para alguma necessidade pessoal.</p>

					<ul className="flex flex-col gap-4 mt-4">
						{projetos.length > 0 && projetos.map((projeto, i) => (
							<>
								<li key={i}>
									<article className="flex flex-col gap-2 p-4 bg-slate-800 rounded-lg">
										<div className="grid grid-cols-[1fr_auto] gap-3">
											<div className="max-w-[90%]">
												<h2 className="text-xl font-semibold text-slate-100">{projeto.nome}</h2>
												<p>{projeto.description}</p>
											</div>
											<div>
												{/* TODO: Some image */}
											</div>
										</div>
										<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
											{projeto.metricas.length > 0 && projeto.metricas.map((metrica, i) => (
												<li key={i} className="flex flex-col gap-1 bg-slate-700 rounded-lg p-2 px-4">
													<p className="text-sm text-slate-400 uppercase"><small>{metrica.titulo}</small></p>
													<p className="text-lg text-slate-300">{metrica.valor}</p>
												</li>
											))}
										</ul>
										<footer className="flex justify-end gap-4 text-sm text-slate-400">
											{/* TODO: Highlights */}
											{/* <button className="mr-auto bg-slate-700 rounded-lg px-2 py-1 text-slate-300 hover:bg-slate-600 hover:text-slate-100">Destaques</button> */}
											{projeto.url && (
												<a href={projeto.url} className="inline-flex gap-1 items-center"><Globe className="text-lg" /> Website</a>
											)}
											{projeto.repo && (
												<a href={projeto.repo} className="inline-flex gap-1 items-center"><GithubLogo className="text-lg" /> Repositório</a>
											)}
										</footer>
									</article>
								</li>
							</>
						))}
					</ul>
				</>
			)}

			{jsonProjetos.todos.length > 0 && (
				<>
					<p className={`${jsonProjetos.destaques.length > 0 ? "mt-8" : "mt-2"}`}>Aqui está uma lista com os repositórios de projetos que eu fiz. Você pode conferir todos os projetos na minha página do <a href="https://github.com/andrrms" target="_blank" rel="noopener noreferrer" className="text-slate-300 underline text-bold">GitHub</a>.</p>

					{jsonProjetos.todos.map((container, i) => (
						<div key={i}>
							<hr className="my-4 border-slate-700" />
							<h3 className="mt-4 text-xl font-semibold text-slate-100">Kenzie academy</h3>
							<p>Projetos desenvolvidos durante o bootcamp na Kenzie Academy</p>

							<ul className="flex flex-col gap-2 mt-4">
								{container.projetos.map((projeto, i) => (
									<li key={i}>
										<a href={projeto.url} className="flex text-sm sm:text-md items-center gap-2 p-2 bg-slate-800 text-slate-400  hover:bg-slate-700 hover:text-slate-300 rounded-lg text-ellipsis overflow-hidden whitespace-nowrap"><span className="text-white inline-flex gap-2 items-center font-bold"><ArrowUpRight weight="bold" /> {projeto.nome}</span> - <span className="text-ellipsis overflow-hidden whitespace-nowrap">{projeto.description}</span></a>
									</li>
								))}
							</ul>
						</div>
					))}

					<p className="mt-2 ml-1 text-slate-500"><small>Mais projetos em breve...</small></p>
				</>
			)}
		</main>
	);
}