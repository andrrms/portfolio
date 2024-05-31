"use client";

import { useEffect } from "react";

export default function ClientRootLayoutWrapper({
	children
}: Readonly<{
  children: React.ReactNode;
}>) {
	function detectTheme() {
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	useEffect(() => {
		detectTheme();

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectTheme);

		return () => {
			window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', detectTheme);
		}
	}, []);

	return children;
}