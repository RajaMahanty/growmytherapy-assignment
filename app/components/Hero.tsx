"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useFadeInOnScroll } from "./useFadeInOnScroll";

export default function Hero() {
	const { ref, isVisible } = useFadeInOnScroll();
	return (
		<section
			id="hero"
			className="relative flex items-center justify-center min-h-[105vh] w-full bg-[#f5f3ec] pb-32 px-2 sm:px-4 md:px-8"
		>
			{/* Container for Logo and Video Card */}
			<div className="flex flex-col w-full mx-2 sm:mx-4 md:mx-16">
				{/* Logo centered above video card */}
				<div className="my-8 sm:my-10 md:my-12">
					<Logo />
				</div>

				{/* Centered Video Card Container with fade-in on scroll */}
				<div
					ref={ref}
					className={`relative w-full max-w-full aspect-video overflow-hidden flex items-center justify-center transition-opacity duration-1000 ${
						isVisible ? "opacity-100" : "opacity-0"
					}`}
				>
					{/* Video Background */}
					<div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none select-none">
						<video
							className="w-full h-full object-cover object-center"
							src="/therapy-bg.mp4"
							autoPlay
							loop
							muted
							playsInline
						/>
					</div>

					{/* Gradient Overlay */}
					<div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-black/60 pointer-events-none select-none" />

					{/* Overlay Content */}
					<div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-2 sm:px-4 md:px-8">
						<h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2 sm:mb-4 text-center">
							Psychological Care for
						</h1>
						<h2 className="mt-4 sm:mt-8 md:mt-10 text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2 sm:mb-4 text-center">
							Change, Insight, and Well-Being
						</h2>
						<p className="mt-4 sm:mt-8 md:mt-10 text-sm sm:text-base md:text-xl text-white/90 mb-4 sm:mb-8 max-w-xs sm:max-w-xl md:max-w-2xl text-center drop-shadow">
							Offering individual psychotherapy for adults via telehealth in
							Michigan and most U.S. states through PSYPACT participation
						</p>
						<Link
							href="#contact"
							className="bg-bg-3 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-md hover:bg-bg-2 hover:text-bg-3 border-2 border-bg-3 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-bg-3 focus:ring-offset-2 glow-btn"
						>
							SCHEDULE A CONSULTATION
						</Link>
					</div>
				</div>
			</div>

			{/* Fade-in Keyframes and Glow Button Style */}
			<style jsx>{`
				.glow-btn {
					box-shadow: 0 0 16px 2px #94b0b0cc, 0 2px 8px 0 #0002;
				}
				.glow-btn:hover {
					box-shadow: 0 0 32px 4px #94b0b0ee, 0 4px 16px 0 #0003;
				}
			`}</style>
		</section>
	);
}
