import Image from "next/image";
import icon from "../../public/icon.png";

export default function Logo() {
	return (
		<div className="flex items-center">
			<div className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full bg-[#2980b9] overflow-hidden relative">
				<Image
					src={icon}
					alt="Mental Health Icon"
					fill
					className="object-cover"
				/>
			</div>
			<div className="ml-2 sm:ml-4">
				<div className="font-serif text-lg sm:text-2xl font-bold text-[#2c3e50]">
					Dr. Serena Blake
				</div>
				<div className="font-sans text-base sm:text-xl text-[#7f8c8d]">
					PsyD · Clinical Psychologist
				</div>
			</div>
		</div>
	);
}
