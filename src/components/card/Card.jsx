import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

function Card({ item, key }) {
	console.log({ item });
	return (
		<div key={key} className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src="/p1.jpeg" alt="card" fill className={styles.image} />
			</div>
			<div className={styles.textContainer}>
				<div className={styles.detail}>
					<span className={styles.date}>{item.createdAt.substring(0, 10)}</span>
					<span className={styles.category}>{item.catSlug}</span>
				</div>
				<Link href={`/posts/${item.slug}`} className={styles.title}>
					<h1>{item.title}</h1>
				</Link>
				<p
					className={styles.desc}
					dangerouslySetInnerHTML={{ __html: item?.desc }}
				/>
				<Link href="/" className={styles.link}>
					Read More
				</Link>
			</div>
		</div>
	);
}

export default Card;
