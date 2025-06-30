"use client";

import React, { useState } from "react";

const initialState = {
	name: "",
	phone: "",
	email: "",
	message: "",
	preferredTime: "",
	agree: false,
};

const initialErrors = {
	name: "",
	phone: "",
	email: "",
	message: "",
	preferredTime: "",
	agree: "",
};

function validateEmail(email: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string) {
	return /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
}

const Contact: React.FC = () => {
	const [form, setForm] = useState(initialState);
	const [errors, setErrors] = useState(initialErrors);
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value, type } = e.target;
		let fieldValue: string | boolean = value;
		if (type === "checkbox") {
			fieldValue = (e.target as HTMLInputElement).checked;
		}
		setForm((prev) => ({
			...prev,
			[name]: fieldValue,
		}));
		setErrors((prev) => ({ ...prev, [name]: "" }));
	};

	const validate = () => {
		const newErrors = { ...initialErrors };
		if (!form.name.trim()) newErrors.name = "Name is required.";
		if (!form.phone.trim()) newErrors.phone = "Phone is required.";
		else if (!validatePhone(form.phone))
			newErrors.phone = "Invalid phone number.";
		if (!form.email.trim()) newErrors.email = "Email is required.";
		else if (!validateEmail(form.email))
			newErrors.email = "Invalid email address.";
		if (!form.message.trim())
			newErrors.message = "Please let us know what brings you here.";
		if (!form.preferredTime.trim())
			newErrors.preferredTime = "Preferred time is required.";
		if (!form.agree) newErrors.agree = "You must agree to be contacted.";
		setErrors(newErrors);
		return Object.values(newErrors).every((err) => !err);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validate()) {
			setSubmitted(true);
			// handle actual submission here
		}
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-[#f6f8fa] py-8">
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-lg bg-white border border-green-900 rounded-xl shadow-md p-8"
			>
				<h2 className="text-3xl font-bold text-center text-green-900 mb-2">
					Contact
				</h2>
				<p className="text-center text-green-900 mb-6 text-lg">
					Simply fill out the brief fields below and we will be in touch with
					you soon. This form is safe, private, and completely free.
				</p>
				{submitted && (
					<div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
						Thank you! Your message has been sent.
					</div>
				)}
				<div className="mb-4">
					<label className="block text-green-900 mb-1" htmlFor="name">
						Name
					</label>
					<input
						className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 text-text-3 ${
							errors.name ? "border-red-500" : "border-green-900"
						}`}
						type="text"
						id="name"
						name="name"
						placeholder="Name"
						value={form.name}
						onChange={handleChange}
						autoComplete="name"
					/>
					{errors.name && (
						<span className="text-red-600 text-sm">{errors.name}</span>
					)}
				</div>
				<div className="mb-4">
					<label className="block text-green-900 mb-1" htmlFor="phone">
						Phone
					</label>
					<input
						className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 text-text-3 ${
							errors.phone ? "border-red-500" : "border-green-900"
						}`}
						type="tel"
						id="phone"
						name="phone"
						placeholder="(555) 234-5678"
						value={form.phone}
						onChange={handleChange}
						autoComplete="tel"
					/>
					{errors.phone && (
						<span className="text-red-600 text-sm">{errors.phone}</span>
					)}
				</div>
				<div className="mb-4">
					<label className="block text-green-900 mb-1" htmlFor="email">
						Email
					</label>
					<input
						className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 text-text-3 ${
							errors.email ? "border-red-500" : "border-green-900"
						}`}
						type="email"
						id="email"
						name="email"
						placeholder="you@example.com"
						value={form.email}
						onChange={handleChange}
						autoComplete="email"
					/>
					{errors.email && (
						<span className="text-red-600 text-sm">{errors.email}</span>
					)}
				</div>
				<div className="mb-4">
					<label className="block text-green-900 mb-1" htmlFor="message">
						What brings you here?
					</label>
					<textarea
						className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 text-text-3 ${
							errors.message ? "border-red-500" : "border-green-900"
						}`}
						id="message"
						name="message"
						placeholder="How can I help you?"
						rows={3}
						value={form.message}
						onChange={handleChange}
					/>
					{errors.message && (
						<span className="text-red-600 text-sm">{errors.message}</span>
					)}
				</div>
				<div className="mb-4">
					<label className="block text-green-900 mb-1" htmlFor="preferredTime">
						Preferred time to reach you
					</label>
					<input
						className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 text-text-3 ${
							errors.preferredTime ? "border-red-500" : "border-green-900"
						}`}
						type="text"
						id="preferredTime"
						name="preferredTime"
						placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
						value={form.preferredTime}
						onChange={handleChange}
					/>
					{errors.preferredTime && (
						<span className="text-red-600 text-sm">{errors.preferredTime}</span>
					)}
					<span className="text-xs text-gray-600 block mt-1">
						Let us know when you're typically available for a call or
						consultation
					</span>
				</div>
				<div className="mb-4 flex items-center">
					<input
						className={`mr-2 accent-green-700 text-text-3 ${
							errors.agree ? "border-red-500" : "border-green-900"
						}`}
						type="checkbox"
						id="agree"
						name="agree"
						checked={form.agree}
						onChange={handleChange}
					/>
					<label htmlFor="agree" className="text-green-900">
						I agree to be contacted
					</label>
				</div>
				{errors.agree && (
					<span className="text-red-600 text-sm block mb-2">
						{errors.agree}
					</span>
				)}
				<button
					type="submit"
					className="w-full bg-green-900 text-white py-2 rounded mt-2 text-lg font-semibold hover:bg-green-800 transition"
				>
					Submit
				</button>
				<p className="text-xs text-green-900 mt-4 flex items-center">
					<span className="mr-1">ⓘ</span> By clicking submit you consent to be
					contacted.
				</p>
			</form>
		</div>
	);
};

export default Contact;
