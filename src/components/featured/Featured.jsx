import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

function Featured() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<b className={styles.bold}>Hei Guys,</b> Welcome To My Blog
			</h1>
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image src="/p1.jpeg" alt="feature" fill className={styles.image} />
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.postTitle}>
						Lorem ipsum dolor sit amet consectetur adipisicing.
					</h1>
					<p className={styles.postDesc}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
						nisi recusandae. Iure, consequuntur itaque esse fugit incidunt
						consectetur distinctio ipsam fugiat maiores sapiente impedit?
					</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	);
}
export default Featured;
