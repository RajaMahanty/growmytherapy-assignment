"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Hero() {
	return (
		<section
			id="hero"
			className="relative flex items-center justify-center min-h-[105vh] w-full bg-[#f5f3ec] pb-32"
		>
			{/* Container for Logo and Video Card */}
			<div className="flex flex-col w-full mx-16">
				{/* Logo centered above video card */}
				<div className="my-12">
					<Logo />
				</div>

				{/* Centered Video Card Container */}
				<div className="relative w-full max-w-full aspect-video overflow-hidden flex items-center justify-center">
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
					<div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
						<h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4 text-center animate-fadein">
							Psychological Care for
						</h1>
						<h2 className="mt-10 text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4 text-center animate-fadein delay-200">
							Change, Insight, and Well-Being
						</h2>
						<p className="mt-10 text-base md:text-xl text-white/90 mb-8 max-w-2xl text-center drop-shadow animate-fadein delay-400">
							Offering individual psychotherapy for adults via telehealth in
							Michigan and most U.S. states through PSYPACT participation
						</p>
						<Link
							href="#contact"
							className="bg-bg-3 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-bg-2 hover:text-bg-3 border-2 border-bg-3 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-bg-3 focus:ring-offset-2 animate-fadein delay-[600ms] glow-btn"
						>
							SCHEDULE A CONSULTATION
						</Link>
					</div>
				</div>
			</div>

			{/* Fade-in Keyframes and Glow Button Style */}
			<style jsx>{`
				@keyframes fadein {
					0% {
						opacity: 0;
						transform: translateY(30px);
					}
					100% {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fadein {
					animation: fadein 1.2s cubic-bezier(0.4, 0, 0.2, 1) both;
				}
				.animate-fadein.delay-200 {
					animation-delay: 0.2s;
				}
				.animate-fadein.delay-400 {
					animation-delay: 0.4s;
				}
				.animate-fadein.delay-[600ms] {
					animation-delay: 0.6s;
				}
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
