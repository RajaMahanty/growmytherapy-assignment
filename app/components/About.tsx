"use client";

import Image from "next/image";
import { useFadeInOnScroll } from "./useFadeInOnScroll";

export default function About() {
	const { ref, isVisible } = useFadeInOnScroll();
	return (
		<section
			id="about"
			ref={ref}
			className={`pt-8 sm:pt-10 pb-10 sm:pb-15 bg-bg-2 transition-opacity duration-1000 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			<div className="container mx-auto flex flex-col md:flex-row items-center md:items-start my-8 sm:my-16 md:my-36 px-4 sm:px-8 md:px-20 lg:px-60 gap-8 sm:gap-14">
				{/* Left: Text */}
				<div className="flex-1 text-text-1">
					<h2 className="text-2xl sm:text-3xl font-bold font-serif mb-6 sm:mb-14 text-text-1">
						About Dr. Serena Blake
					</h2>
					<div className="space-y-4 sm:space-y-8">
						<p className="text-sm sm:text-base tracking-tight leading-7 sm:leading-10 text-text-1 font-light">
							Dr. Serena Blake is a licensed clinical psychologist (PsyD) based
							in Los Angeles, CA, with eight years of experience and over 500
							client sessions. She blends evidence-based approaches—like
							cognitive-behavioral therapy and mindfulness—with compassionate,
							personalized care to help you overcome anxiety, strengthen
							relationships, and heal from trauma. Whether you meet in her
							Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
							committed to creating a safe, supportive space for you to thrive.
						</p>
					</div>
				</div>
				{/* Right: Image */}
				<div className="flex-1 flex justify-center md:justify-end items-center">
					<Image
						src="/therepist.jpg"
						alt="Dr. Serena Blake"
						width={350}
						height={500}
						className="object-cover w-48 h-64 sm:w-72 sm:h-96 md:w-[350px] md:h-[500px] rounded-lg shadow-md"
						priority
					/>
				</div>
			</div>
			<hr className="mt-16 sm:mt-32 md:mt-72 border-t-2 border-text-1 w-11/12 mx-auto " />
		</section>
	);
}
