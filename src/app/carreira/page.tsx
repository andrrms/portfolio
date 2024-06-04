import ExpandableContent from "@/components/ExpandableContent";
import { MapPin, SuitcaseSimple } from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";
import jsonCarreiras from "@/data/carreira.json";

export const metadata: Metadata = {
  title: "André Silveira | Carreira",
  description: "Minha jornada profissional",
};

export default function Carreira() {
	return (
		<main className="w-full max-w-2xl mx-auto p-4 text-md text-slate-300">
			<h1 className="text-3xl font-bold text-slate-100 mt-3">Histórico de Carreira</h1>
			<p className="mt-2">Durante a minha carreira, tive a oportunidade de trabalhar em diversos projetos e com excelentes times de profissionais. Aqui estão algumas informações da minha trajetória:</p>

			<ul className="mt-8">
				{jsonCarreiras.map((carreira, i) => (
					<li key={i}>
						<div className="grid grid-cols-[60px_1fr] gap-4">
							<div className="flex flex-col items-center">
								{i === 0 ? (
									<>
										<div className="h-4 bg-transparent"></div>
										<div className="text-custom-yellow border-custom-yellow border-2 rounded-full p-2 inline-flex justify-center items-center text-3xl"><MapPin /></div>
										{(jsonCarreiras.length - 1 > i) && <div className="h-full w-[2px] from-custom-yellow bg-gradient-to-b to-gray-500"></div>}
									</>
								) : (
									<>
										<div className="h-4 w-[2px] bg-gray-500"></div>
										<div className="text-gray-500 border-gray-500 border-2 rounded-full p-2 inline-flex justify-center items-center text-3xl"><SuitcaseSimple /></div>
										{(jsonCarreiras.length - 1 > i) && <div className="h-full w-[2px] bg-gray-500"></div>}
									</>
								)}
							</div>
							<article className="pt-2 pb-6">
								<div className="flex justify-between items-center">
									{i === 0 && <p className={`${i === 0 ? "text-custom-yellow" : "text-gray-500"} font-bold text-xs uppercase`}>Eu estou aqui</p>}
									<p className={`text-slate-500 font-bold text-xs ${i > 0 && "ml-auto"}`}>{carreira.inicio} - {carreira.fim ?? "Atualmente"}</p>
								</div>
								<h2 className="text-lg mt-1 text-gray-400"><span className="font-medium text-white">{carreira.nomeCargo}</span> em <span className="font-medium text-white">{carreira.nomeEmpresa}</span></h2>
								
								{carreira.descricao.length > 0 && carreira.descricao.map((descricao, i) => (
									<p key={i} className="mt-2">{descricao}</p>
								))}

								{carreira.tecnologias.length > 0 && (
									<ul className="flex gap-2 mt-4 items-center flex-wrap">
										{carreira.tecnologias.map((tecnologia, i) => (
											<li className="font-light border-[1px] border-slate-600 rounded-full px-2" key={i}>{tecnologia}</li>
										))}
									</ul>
								)}

								{carreira.competencias.length > 0 && (
									<ExpandableContent text="Mostrar competências">
										<ul className="mt-4 w-full list-disc list-inside">
											{carreira.competencias.map((competencia, i) => (
												<li key={i}>{competencia}</li>
											))}
										</ul>
									</ExpandableContent>
								)}
							</article>
						</div>
					</li>
				))}
				{/* <li>
					<div className="grid grid-cols-[60px_1fr] gap-4">
						<div className="flex flex-col items-center">
							<div className="h-full w-[2px] dashed-background"></div>
						</div>
						<div className="py-6">
							<p className="text-gray-500 text-center">Buscando emprego...</p>
						</div>
					</div>
				</li> */}
			</ul>
		</main>
	);
}