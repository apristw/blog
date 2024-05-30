import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

function Card() {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src="/p1.jpeg" alt="card" fill className={styles.image} />
			</div>
			<div className={styles.textContainer}>
				<div className={styles.detail}>
					<span className={styles.date}>13.02.2024</span>
					<span className={styles.category}>CODING</span>
				</div>
				<Link href="/" className={styles.title}>
					<h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
				</Link>
				<p className={styles.desc}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor fugiat
					eaque, doloremque ratione facilis aperiam quae odio a assumenda
					repellendus enim odit, soluta nam.
				</p>
				<Link href="/" className={styles.link}>
					Read More
				</Link>
			</div>
		</div>
	);
}

export default Card;
