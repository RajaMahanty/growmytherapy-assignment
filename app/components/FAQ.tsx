"use client";

import { useState } from "react";

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const faqs = [
		{
			question: "Do you accept insurance?",
			answer: "No, but a superbill is provided for self-submission.",
		},
		{
			question: "Are online sessions available?",
			answer: "Yes—all virtual sessions via Zoom.",
		},
		{
			question: "What is your cancellation policy?",
			answer: "24-hour notice required.",
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
