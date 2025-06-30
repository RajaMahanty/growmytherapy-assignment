import Image from "next/image";

export default function About() {
	return (
		<section id="about" className="pt-10 pb-15 bg-bg-2">
			<div className="container mx-auto flex flex-col md:flex-row items-center md:items-start m-36 px-60 gap-14">
				{/* Left: Text */}
				<div className="flex-1 text-text-1">
					<h2 className="text-3xl font-bold font-serif mb-14 text-text-1">
						About Dr. Jennifer Hahm
					</h2>
					<div className="space-y-8">
						<p className="text-base tracking-tight leading-10 text-text-1 font-light">
							Finding time and opportunities to care for ourselves can be
							incredibly challenging in today's busy and demanding world. I
							believe therapy offers a dedicated space for self-care, providing
							the support and tools needed to improve this essential practice.
							Therapy can help individuals identify and clarify their goals,
							values, and the various elements that contribute to their
							well-being, recognizing that these aspects vary from person to
							person.
						</p>
						<p className="text-base tracking-tight leading-10 text-text-1 font-light">
							I am dedicated to supporting this journey by offering active
							listening, psychological knowledge, empathy, compassion, and
							insights into behavioral patterns and tendencies. I hold a
							master's degree in Clinical Psychology from the Michigan School of
							Psychology (2012) and a Ph.D. in Counseling Psychology from
							Western Michigan University (2018). My experience spans therapy
							and psychological assessment in psychiatric inpatient units,
							academic medical centers, universities, and outpatient practice
							settings.
						</p>
						<p className="text-base tracking-tight leading-10 text-text-1 font-light">
							My therapeutic approach is primarily psychodynamic and humanistic,
							enriched by influences from positive psychology, existentialism,
							family systems theory, acceptance and commitment concepts, and
							mindfulness practices.
						</p>
					</div>
				</div>
				{/* Right: Image */}
				<div className="flex-1 flex justify-center md:justify-end items-center">
					<Image
						src="/therepist.jpg"
						alt="Dr. Jennifer Hahm"
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
