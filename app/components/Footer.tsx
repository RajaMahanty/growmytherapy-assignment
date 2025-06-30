"use client";

export default function Footer() {
	return (
		<footer className="bg-bg-1 text-text-3 py-12 flex flex-col items-center justify-center text-center font-light">
			<div className="max-w-2xl w-full flex flex-col items-center gap-2">
				<h2 className="text-2xl md:text-3xl font-serif mb-10">
					Jennifer Hahm, Ph.D., Licensed Psychologist
				</h2>
				<a
					href="mailto:jennifer@drjenniferhahm.com"
					className="underline hover:text-text-2 transition"
				>
					jennifer@drjenniferhahm.com
				</a>
				<div className="mt-1">
					<span>Phone: </span>
					<a
						href="tel:2489398150"
						className="underline hover:text-text-2 transition"
					>
						(248) 939-8150
					</a>
					<span className="ml-2">Fax: (248) 939-8190</span>
				</div>
				<div className="my-4">28175 Haggerty Rd, Novi, MI 48377</div>
				<nav className="flex gap-4 mt-2">
					<a href="#" className="underline hover:text-text-2 transition">
						Home
					</a>
					<a href="#" className="underline hover:text-text-2 transition">
						Privacy Policy
					</a>
					<a href="#" className="underline hover:text-text-2 transition">
						Good Faith Estimate
					</a>
				</nav>
			</div>
			<a
				href="#"
				className="mt-24 text-lg underline hover:text-text-2 transition"
			>
				Client Portal
			</a>
			<div className="mt-16 text-base text-text-2">
				&copy; 2025 Jennifer Hahm Ph.D. Psychological Services, PLLC. All rights
				reserved.
			</div>
		</footer>
	);
}
