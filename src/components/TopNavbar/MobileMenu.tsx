import { House, Briefcase, Code, X, GithubLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react/dist/ssr";
import NavActiveLink from "./NavActiveLink";

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

export default function MobileMenu({
	isOpen,
	onClose
}: Props) {
	return isOpen && (
		<div className="w-full h-full">
			<ul className="flex flex-col gap-10 w-full h-full justify-center items-center">
				<li>
					<NavActiveLink onClick={onClose} href="/" activeClassname="bg-white text-slate-800 hover:text-slate-600" className="w-fit py-2 px-8 text-xl flex gap-2 items-center font-bold text-slate-400 hover:text-slate-100 transition-colors duration-100 rounded-full">
						<House /> Início
					</NavActiveLink>
				</li>
				<li>
					<NavActiveLink onClick={onClose} href="/carreira" activeClassname="bg-white text-slate-800 hover:text-slate-600" className="w-fit py-2 px-8 text-xl flex gap-2 items-center font-bold text-slate-400 hover:text-slate-100 transition-colors duration-100 rounded-full">
						<Briefcase /> Carreira
					</NavActiveLink>
				</li>
				<li>
					<NavActiveLink onClick={onClose} href="/projetos" activeClassname="bg-white text-slate-800 hover:text-slate-600" className="w-fit py-2 px-8 text-xl flex gap-2 items-center font-bold text-slate-400 hover:text-slate-100 transition-colors duration-100 rounded-full">
						<Code /> Projetos
					</NavActiveLink>
				</li>
				<li>
					<button onClick={onClose} className="w-fit py-2 px-8 text-xl flex gap-2 items-center font-bold text-slate-400 hover:text-slate-100 transition-colors duration-100 rounded-full">
						<X /> Fechar
					</button>
				</li>
				<li>
					<ul className="flex gap-8">
						<li>
							<a href="https://github.com/andrrms" className="text-4xl text-slate-400 hover:text-slate-100"><GithubLogo weight="fill" /></a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/andrrms/" className="text-4xl text-slate-400 hover:text-slate-100"><LinkedinLogo weight="fill" /></a>
						</li>
						<li>
							<a href="mailto:pro.andresilveira@gmail.com" className="text-4xl text-slate-400 hover:text-slate-100"><Envelope weight="fill" /></a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}