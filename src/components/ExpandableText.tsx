"use client";

import { BracketsAngle } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function ExpandableText({
	children
}: {
	children: React.ReactNode
}) {
	const [isExpanded, setIsExpanded] = useState(false);

	return isExpanded ? (
		<span className="text-custom-yellow rounded-md animate-expandable-text-appear">{children}</span>
	) : (
		<>
			<span className="sr-only">{children}</span>
			<button title="Expandir" onClick={() => setIsExpanded(true)} className="inline-flex items-center cursor-pointer text-xl mx-1 text-slate-300 hover:text-slate-200 transition-all ease-in-out duration-200"><BracketsAngle weight="fill" /></button>
		</>
	)
}