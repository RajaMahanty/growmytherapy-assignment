import Image from "next/image";

export default function About() {
	return (
		<section id="about" className="pt-10 pb-15 bg-bg-2">
			<div className="container mx-auto flex flex-col md:flex-row items-center md:items-start m-36 px-60 gap-14">
				{/* Left: Text */}
				<div className="flex-1 text-text-1">
					<h2 className="text-3xl font-bold font-serif mb-14 text-text-1">
						About Dr. Serena Blake
					</h2>
					<div className="space-y-8">
						<p className="text-base tracking-tight leading-10 text-text-1 font-light">
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
						width={500}
						height={700}
						className="object-cover w-[500px] h-[700px]"
						priority
					/>
				</div>
			</div>
			<hr className="mt-72 border-t-2 border-text-1 w-11/12 mx-auto " />
		</section>
	);
}
