import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/categories", {
			cache: "no-cache",
		});

		if (!res.ok) {
			// Menangkap kesalahan dan memberikan pesan yang lebih informatif
			throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
		}

		const data = await res.json();
		return data;
	} catch (error) {
		// Menangani kesalahan secara umum
		console.error("An error occurred while fetching data:", error);
		throw error; // Melempar ulang kesalahan agar bisa ditangani di tempat lain
	}
};

const CategoryList = async () => {
	const data = await getData();

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Popular Category</h1>
			<div className={styles.categories}>
				{data?.map((item) => {
					return (
						<Link
							href={`/blog?cat=${item.slug}`}
							className={`${styles.category} ${styles[item.slug]}`}
							key={item._id}
						>
							{item.img && (
								<Image
									src={item.img}
									alt="style"
									width={32}
									height={32}
									className={styles.image}
								/>
							)}
							{item.title}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default CategoryList;
