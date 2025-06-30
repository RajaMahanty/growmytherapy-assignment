"use client";

import { useState } from "react";

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const faqs = [
		{
			question: "How do I schedule my first session?",
			answer:
				"You can schedule your first session by filling out the contact form on this page, calling me directly at (555) 123-4567, or sending an email to hello@growmytherapy.com. I'll get back to you within 24 hours to arrange a consultation and answer any questions you might have about the process.",
		},
		{
			question: "What happens during the first session?",
			answer:
				"The first session is a consultation where we'll discuss your goals, concerns, and what you hope to achieve through therapy. It's also a chance for you to ask questions and see if we're a good fit for working together. We'll talk about your current situation, your history, and what brings you to therapy. This helps me understand your needs and develop a personalized treatment plan.",
		},
		{
			question: "Do you accept insurance?",
			answer:
				"Yes, I accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, and UnitedHealthcare. I also offer sliding scale fees for those without insurance coverage. Before your first session, I recommend calling your insurance provider to verify your mental health benefits and any copay or deductible requirements.",
		},
		{
			question: "Can I do virtual sessions?",
			answer:
				"Absolutely! I offer both virtual and in-person sessions. Virtual sessions are conducted through a secure, HIPAA-compliant platform and are just as effective as in-person therapy. Many clients prefer the convenience and comfort of virtual sessions, especially for busy schedules or those who prefer to meet from home.",
		},
		{
			question: "How long does therapy typically last?",
			answer:
				"The length of therapy varies depending on your individual needs and goals. Some clients see significant improvement in 8-12 sessions, while others may benefit from longer-term therapy. We'll regularly review your progress and discuss whether to continue, reduce frequency, or conclude therapy based on your goals and progress.",
		},
		{
			question: "What if I'm not sure if therapy is right for me?",
			answer:
				"That's completely normal! Many people feel uncertain about starting therapy. I offer a free 15-minute phone consultation where you can ask questions and get a sense of whether therapy with me would be helpful. There's no pressure to commit - it's just an opportunity to learn more and see if it feels like a good fit for you.",
		},
	];

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section id="faq" className="py-20 bg-bg-1">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-text-2 mb-4">
						Frequently Asked Questions
					</h2>
					<p className="text-xl text-text-1 max-w-2xl mx-auto">
						Common questions about therapy and getting started
					</p>
				</div>

				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="border border-bg-1 rounded-lg overflow-hidden"
						>
							<button
								onClick={() => toggleFAQ(index)}
								className="w-full px-6 py-4 text-left bg-bg-1 hover:bg-bg-3 hover:text-text-3 transition-colors focus:outline-none focus:ring-2 focus:ring-bg-3 focus:ring-inset"
							>
								<div className="flex justify-between items-center">
									<h3 className="text-lg font-semibold text-text-2 pr-4">
										{faq.question}
									</h3>
									<svg
										className={`w-5 h-5 text-text-1 transform transition-transform duration-200 ${
											openIndex === index ? "rotate-180" : ""
										}`}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</div>
							</button>

							<div
								className={`overflow-hidden transition-all duration-300 ease-in-out ${
									openIndex === index
										? "max-h-96 opacity-100"
										: "max-h-0 opacity-0"
								}`}
							>
								<div className="px-6 py-4 bg-bg-2 border-t border-bg-1">
									<p className="text-text-1 leading-relaxed">{faq.answer}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Contact CTA */}
				<div className="mt-12 text-center">
					<p className="text-text-1 mb-4">
						Still have questions? I'm here to help!
					</p>
					<a
						href="#contact"
						className="inline-flex items-center bg-bg-3 text-text-3 px-6 py-3 rounded-lg font-semibold hover:bg-bg-1 hover:text-text-2 transition-colors"
					>
						Contact Me
						<svg
							className="w-4 h-4 ml-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}
