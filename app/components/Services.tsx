"use client";
import { useFadeInOnScroll } from "./useFadeInOnScroll";

export default function Services() {
	const { ref, isVisible } = useFadeInOnScroll();
	return (
		<section
			id="services"
			ref={ref}
			className={`bg-bg-1 transition-opacity duration-1000 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			<div className="py-10 sm:py-16 px-2 sm:px-4 md:px-0 text-center">
				<h2 className="leading-normal text-2xl sm:text-3xl md:text-4xl font-serif font-extralight mb-4 sm:mb-8 text-text-2">
					Therapy can be a space where you invest in yourself—
					<br />
					one of the highest forms of self-care.
				</h2>
				<p className="text-center max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto text-sm sm:text-md md:text-lg text-text-1 font-light leading-loose">
					You may be led to therapy by anxiety, depression, relationship stress,
					past or recent trauma, grief and loss, self-esteem issues, or
					challenges with family, parenting, or parental relationships. Whatever
					the source of your stress, you don&#39;t have to face it alone.
					Therapy offers you the time and space to work toward wellness and
					peace.
				</p>
			</div>
			<hr className="border-t-2 border-[#7e7e6b] w-11/12 mx-auto " />
			<h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center mb-8 sm:mb-16 md:mb-24 text-text-2 mt-12 sm:mt-24 md:mt-32">
				Areas of Focus
			</h2>
			<div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-20 xl:gap-32 px-2 sm:px-4 md:px-8 mx-auto max-w-7xl">
				{/* Service 1 */}
				<div className="min-w-[260px] max-w-xs flex flex-col items-center mx-auto">
					<div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden mb-4 sm:mb-8">
						<img
							src="/Anxiety&StressManagement.jpg"
							alt="Anxiety & Stress Management"
							className="w-full h-full object-cover"
						/>
					</div>
					<h3 className="text-lg sm:text-xl font-serif font-normal mb-2 sm:mb-4 text-text-2 text-center leading-loose">
						Anxiety & Stress Management
					</h3>
					<p className="text-sm sm:text-base text-text-2 text-center leading-loose">
						Learn effective strategies to manage anxiety, reduce stress, and
						regain a sense of calm and control in your daily life. Therapy can
						help you identify triggers, develop coping skills, and build
						resilience for lasting well-being.
					</p>
				</div>
				{/* Service 2 */}
				<div className="min-w-[260px] max-w-xs flex flex-col items-center mx-auto">
					<div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden mb-4 sm:mb-8">
						<img
							src="/RelationshipCounseling.jpg"
							alt="Relationship Counseling"
							className="w-full h-full object-cover"
						/>
					</div>
					<h3 className="text-lg sm:text-xl font-serif font-normal mb-2 sm:mb-4 text-text-2 text-center leading-loose">
						Relationship Counseling
					</h3>
					<p className="text-sm sm:text-base text-text-2 text-center leading-loose">
						Improve communication, resolve conflicts, and strengthen your
						relationships. Whether you are facing challenges with a partner,
						family member, or friend, therapy provides a supportive space to
						foster understanding and connection.
					</p>
				</div>
				{/* Service 3 */}
				<div className="min-w-[260px] max-w-xs flex flex-col items-center mx-auto">
					<div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden mb-4 sm:mb-8">
						<img
							src="/TraumaRecovery.jpg"
							alt="Trauma Recovery"
							className="w-full h-full object-cover"
						/>
					</div>
					<h3 className="text-lg sm:text-xl font-serif font-normal mb-2 sm:mb-4 text-text-2 text-center leading-loose">
						Trauma Recovery
					</h3>
					<p className="text-sm sm:text-base text-text-2 text-center leading-loose">
						Heal from past traumatic experiences in a safe and compassionate
						environment. Therapy supports you in processing difficult memories,
						managing emotional responses, and moving forward with renewed hope
						and strength.
					</p>
				</div>
			</div>
			{/* Rates and Insurance Section */}
			<div className="bg-bg-3 py-10 sm:py-16 px-2 sm:px-4 md:px-0 mt-12 sm:mt-24 md:mt-32">
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center mb-6 sm:mb-12 text-text-3">
					Rates and Insurance
				</h2>
				<div className="text-center text-base sm:text-lg text-text-3 space-y-2 sm:space-y-4">
					<p>
						<strong>Session Fees:</strong>
					</p>
					<ul>
						<li>$200 / individual session</li>
						<li>$240 / couples session</li>
					</ul>
				</div>
				<p className="text-center mt-4 sm:mt-8 text-text-3">
					I accept both private pay and insurance. I am in-network with BCBS and
					Aetna.
				</p>
				<p className="text-center mt-2 sm:mt-4 text-text-3">
					For out-of-network plans, I&#39;ve partnered with Mentaya using{" "}
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
