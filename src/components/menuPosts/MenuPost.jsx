import React from "react";
import styles from "./menuPost.module.css";
import Image from "next/image";
import Link from "next/link";

function MenuPost({ withImage }) {
	return (
		<div className={styles.items}>
			<Link href="/" className={styles.item}>
				{withImage && (
					<div className={styles.imgContainer}>
						<Image src="/p1.jpeg" alt="card" fill className={styles.image} />
					</div>
				)}
				<div className={styles.textContainer}>
					<span className={`${styles.category} ${styles.travel}`}>Travel</span>
					<h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
					<div className={styles.detail}>
						<span className={styles.username}>Apri Stw</span>
						<span className={styles.date}>13.02.2024</span>
					</div>
				</div>
			</Link>
			<Link href="/" className={styles.item}>
				{withImage && (
					<div className={styles.imgContainer}>
						<Image src="/p1.jpeg" alt="card" fill className={styles.image} />
					</div>
				)}
				<div className={styles.textContainer}>
					<span className={`${styles.category} ${styles.coding}`}>Coding</span>
					<h3 className={styles.postTitle}>
						Lorem ipsum, dolor sit amet consectetur adipisicing.
					</h3>
					<div className={styles.detail}>
						<span className={styles.username}>Apri Stw</span>
						<span className={styles.date}>13.02.2024</span>
					</div>
				</div>
			</Link>
			<Link href="/" className={styles.item}>
				{withImage && (
					<div className={styles.imgContainer}>
						<Image src="/p1.jpeg" alt="card" fill className={styles.image} />
					</div>
				)}
				<div className={styles.textContainer}>
					<span className={`${styles.category} ${styles.fashion}`}>
						Fashion
					</span>
					<h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
					<div className={styles.detail}>
						<span className={styles.username}>Apri Stw</span>
						<span className={styles.date}>13.02.2024</span>
					</div>
				</div>
			</Link>
			<Link href="/" className={styles.item}>
				{withImage && (
					<div className={styles.imgContainer}>
						<Image src="/p1.jpeg" alt="card" fill className={styles.image} />
					</div>
				)}
				<div className={styles.textContainer}>
					<span className={`${styles.category} ${styles.style}`}>Style</span>
					<h3 className={styles.postTitle}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</h3>
					<div className={styles.detail}>
						<span className={styles.username}>Apri Stw</span>
						<span className={styles.date}>13.02.2024</span>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default MenuPost;
