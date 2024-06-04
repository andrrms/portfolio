"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
	href: string;
	children: React.ReactNode;
	activeClassname?: string;
	className?: string;
	onClick?: () => void;
}

export default function NavActiveLink({
	href,
	children,
	activeClassname,
	className,
	onClick
}: Props) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link href={href} className={`${className} ${isActive ? activeClassname : ""}`} onClick={onClick}>
			{children}
		</Link>
	);
}