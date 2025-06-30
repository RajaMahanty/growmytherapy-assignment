import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Blake Psychology - Professional Mental Health Services",
	description:
		"Professional therapy services for mental health and personal growth. Book your session today.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={inter.className + " min-h-screen bg-white text-gray-900"}
			>
				{children}
			</body>
		</html>
	);
}
