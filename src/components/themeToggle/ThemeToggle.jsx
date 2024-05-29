"use client";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

function ThemeToggle() {
	const { theme, toggle } = useContext(ThemeContext);

	console.log(theme, { toggle });
	return (
		<div
			className={styles.container}
			onClick={toggle}
			style={
				theme === "dark"
					? { background: "rgb(240, 240, 240)" }
					: { background: "rgb(50, 50, 50)" }
			}
		>
			<Image src="/moon.png" alt="moon" width={14} height={14} />
			<div
				className={styles.ball}
				style={
					theme === "light"
						? { left: 0, backgroundColor: "#fff" }
						: { right: 0, backgroundColor: "#1f273a" }
				}
			></div>
			<Image src="/sun.png" alt="sun" width={14} height={14} />
		</div>
	);
}

export default ThemeToggle;
