"use client";

import Logo from "./Logo";

export default function Navigation() {
	return (
		<nav className="w-full py-8 px-8 flex items-center bg-[var(--bg-1)]">
			<div className="flex items-center space-x-4">
				<Logo />
			</div>
		</nav>
	);
}
