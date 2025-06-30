import Image from "next/image";
import icon from "../../public/icon.png";

export default function Logo() {
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<div
				style={{
					width: "60px",
					height: "60px",
					borderRadius: "50%",
					backgroundColor: "#2980b9",
					overflow: "hidden",
					position: "relative",
				}}
			>
				<Image
					src={icon}
					alt="Mental Health Icon"
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div style={{ marginLeft: "15px" }}>
				<div
					style={{
						fontFamily: "Georgia, serif",
						fontSize: "24px",
						fontWeight: "bold",
						color: "#2c3e50",
					}}
				>
					Dr. Serena Blake
				</div>
				<div
					style={{
						fontFamily: "Arial, sans-serif",
						fontSize: "24px",
						color: "#7f8c8d",
					}}
				>
					PsyD · Clinical Psychologist
				</div>
			</div>
		</div>
	);
}
