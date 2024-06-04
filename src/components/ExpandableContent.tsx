"use client";

import { PropsWithChildren, useState } from "react";

type Props = PropsWithChildren & {
	text: string;
};

export default function ExpandableContent({
	children,
	text
}: Props) {
	const [expanded, setExpanded] = useState(false);

	return expanded ? (
		<>
			{children}
		</>
	) : (
		<button className="mt-4 w-full p-3 py-2 bg-slate-800 hover:bg-slate-700 transition-colors ease-in-out duration-200 text-white rounded-md" onClick={() => setExpanded(true)}>{text}</button>
	);
}