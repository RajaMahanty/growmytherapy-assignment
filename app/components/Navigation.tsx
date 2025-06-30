"use client";

import Logo from "./Logo";

export default function Navigation() {
	return (
		<nav className="w-full py-4 sm:py-8 px-2 sm:px-8 flex items-center bg-[var(--bg-1)]">
			<div className="flex items-center space-x-2 sm:space-x-4">
				<Logo />
			</div>
		</nav>
	);
}
