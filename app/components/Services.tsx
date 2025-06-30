"use client";
import Link from "next/link";

export default function Services() {
	return (
		<section id="services" className="bg-bg-1">
			<div className="py-16 px-4 md:px-0 text-center">
				<h2 className="leading-normal text-3xl md:text-4xl font-serif font-extralight mb-8 text-text-2">
					Therapy can be a space where you invest in yourself—
					<br />
					one of the highest forms of self-care.
				</h2>
				<p className="text-center max-w-4xl mx-auto text-md md:text-lg text-text-1 font-light leading-loose">
					You may be led to therapy by anxiety, depression, relationship stress,
					past or recent trauma, grief and loss, self-esteem issues, or
					challenges with family, parenting, or parental relationships. Whatever
					the source of your stress, you don't have to face it alone. Therapy
					offers you the time and space to work toward wellness and peace.
				</p>
			</div>
			<hr className="border-t-2 border-[#7e7e6b] w-11/12 mx-auto " />
			<h2 className="text-3xl md:text-4xl font-serif text-center mb-24 text-text-2 mt-32">
				Areas of Focus
			</h2>
			<div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-8 px-4 md:px-0 mx-12">
				{/* Service 1 */}
				<div className="flex-1 flex flex-col items-center max-w-sm mx-auto">
					<div className="size-96 rounded-full overflow-hidden mb-8">
						<img
							src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
							alt="Healthcare Providers"
							className="w-full h-full object-cover"
						/>
					</div>
					<h3 className="text-xl font-serif font-normal mb-4 text-text-2 text-center leading-loose">
						Therapy for Healthcare Providers and Students
					</h3>
					<p className="text-base text-text-2 text-center leading-loose">
						The care you provide for others may be driving you to seek therapy,
						whether due to burnout, compassion fatigue, imposter syndrome,
						people-pleasing tendencies, or perfectionism. Whether you're in
						pre-professional school, undergoing training, or reflecting on a
						long career in healthcare, we can address the unique stressors of
						your journey.
					</p>
				</div>
				{/* Service 2 */}
				<div className="flex-1 flex flex-col items-center max-w-sm mx-auto">
					<div className="size-96 rounded-full overflow-hidden mb-8">
						<img
							src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
							alt="Trauma and Grief"
							className="w-full h-full object-cover"
						/>
					</div>
					<h3 className="text-xl font-serif font-normal mb-4 text-text-2 text-center leading-loose">
						Therapy for Trauma and Grief
					</h3>
					<p className="text-base text-text-2 text-center leading-loose">
						Life's challenges, whether a difficult childhood, a traumatic event
						or series of events, or the loss of someone or something deeply
						meaningful, can lead to profound experiences of trauma and grief.
						Therapy offers a supportive space to process these experiences, care
						for yourself amidst painful thoughts and emotions, and move toward
						healing.
					</p>
				</div>
				{/* Service 3 */}
				<div className="flex-1 flex flex-col items-center max-w-sm mx-auto">
					<div className="size-96 rounded-full overflow-hidden mb-8">
						<img
							src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
							alt="Second Generation Individuals"
							className="w-full h-full object-cover"
						/>
					</div>
					<h3 className="text-xl font-serif font-normal mb-4 text-text-2 text-center leading-loose">
						Therapy for Second Generation Individuals In Immigrant Families
					</h3>
					<p className="text-base text-text-2 text-center leading-loose">
						Second-generation individuals in immigrant families, born in the
						U.S. to at least one parent born abroad, often navigate the
						complexities of multiple cultures and diverse expectations. This
						experience can bring challenges such as feeling like a cultural
						outsider, balancing family and societal values, and managing
						intergenerational relationships.
					</p>
				</div>
			</div>
			{/* Rates and Insurance Section */}
			<div className="bg-bg-3 py-16 px-4 md:px-0 mt-32">
				<h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-text-3">
					Rates and Insurance
				</h2>
				<div className="text-center text-lg text-text-3 space-y-4">
					<div>Session Fee - $200</div>
					<div>Psychodiagnostic Evaluation - $225</div>
				</div>
				<p className="text-center mt-8 text-text-3">
					I accept both private pay and insurance. I am in-network with BCBS and
					Aetna.
				</p>
				<p className="text-center mt-4 text-text-3">
					For out-of-network plans, I've partnered with Mentaya using{" "}
					<a
						href="https://app.mentaya.com/p/2q8k1r6kz1r1"
						className="underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						this tool
					</a>{" "}
					to help you check your eligibility for reimbursement for my services.
				</p>
			</div>
		</section>
	);
}
