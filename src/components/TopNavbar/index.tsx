"use client";

import { House, Briefcase, Code, Newspaper, List } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import NavActiveLink from "./NavActiveLink";

export default function TopNavbar() {
	const pathname = usePathname();

	const pathnameNames: Record<string, string> = useMemo(() => ({
		"/": "Início",
		"/carreira": "Carreira",
		"/projetos": "Projetos",
		"/artigos": "Artigos",
	}), []);

	return (
		<nav className="px-4 bg-custom-blue-100/90 z-30 rounded-full border border-custom-blue-200/75 backdrop:blur-xl w-full max-w-sm sm:max-w-xl md:max-w-2xl mx-auto sticky top-4">
			<ul className="flex gap-4 justify-between md:justify-end items-center py-3 px-1">
				<li className="flex items-center md:hidden">
					<button className="px-1 text-xl font-bold text-slate-400 hover:text-slate-100 flex items-center" title="Trocar tema">
						<List />
					</button>
				</li>
				<li className="block md:hidden text-slate-100 font-mono font-bold">
					<span>{pathnameNames[pathname]}</span>
				</li>
				<li className="mr-auto hidden md:block">
					<NavActiveLink href="/" activeClassname="bg-white text-custom-blue-100 hover:text-custom-blue-50" className="py-1 px-2 flex gap-2 items-center font-bold text-slate-400 hover:text-slate-100 transition-colors duration-100 rounded-full">
						<House /> Início
					</NavActiveLink>
				</li>
				<li className="hidden md:block">
					<NavActiveLink href="/carreira" activeClassname="bg-white text-custom-blue-100 hover:text-custom-blue-50" className="py-1 px-2 flex gap-2 items-center font-bold text-slate-400 hover:text-slate-100 transition-colors duration-100 rounded-full">
						<Briefcase /> Carreira
					</NavActiveLink>
				</li>
				<li className="hidden md:block">
					<NavActiveLink href="/projetos" activeClassname="bg-white text-custom-blue-100 hover:text-custom-blue-50" className="py-1 px-2 flex gap-2 items-center font-bold text-slate-400 hover:text-slate-100 transition-colors duration-100 rounded-full">
						<Code /> Projetos
					</NavActiveLink>
				</li>
				<li className="hidden md:block">
					<NavActiveLink href="/artigos" activeClassname="bg-white text-custom-blue-100 hover:text-custom-blue-50" className="py-1 px-2 flex gap-2 items-center font-bold text-slate-400 hover:text-slate-100 transition-colors duration-100 rounded-full">
						<Newspaper /> Artigos
					</NavActiveLink>
				</li>
			</ul>
		</nav>
	);
}