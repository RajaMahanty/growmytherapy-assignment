import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen">
			{/* <Navigation /> */}
			<Hero />
			<About />
			<Services />
			<FAQ />
			<Contact />
			<Footer />
		</div>
	);
}
