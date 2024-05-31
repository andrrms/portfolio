"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavActiveLink({
	href,
	children,
	activeClassname,
	className
}: {
	href: string;
	children: React.ReactNode;
	activeClassname?: string;
	className?: string
}) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link href={href} className={`${className} ${isActive ? activeClassname : ""}`}>
			{children}
		</Link>
	);
}