"use client";
import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url) => {
	const res = await fetch(url);
	const data = await res.json();

	if (!res.ok) {
		const error = new Error(data.message);
		throw error;
	}
	return data;
};

function Comments({ postSlug }) {
	const { status } = useSession();
	const [desc, setDesc] = useState("");

	const { data, mutate, isLoading } = useSWR(
		`http://localhost:3000/api/comments?postSlug=${postSlug}`,
		fetcher
	);

	const handleSubmit = async () => {
		await fetch("/api/comments", {
			method: "POST",
			body: JSON.stringify({
				postSlug,
				desc,
			}),
		});
		mutate();
		setDesc("");
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Comments</h1>
			{status === "authenticated" ? (
				<div className={styles.write}>
					<textarea
						value={desc}
						placeholder="Write your comment here"
						className={styles.input}
						onChange={(e) => setDesc(e.target.value)}
					/>
					<button className={styles.button} onClick={handleSubmit}>
						Send
					</button>
				</div>
			) : (
				<Link href="/login" className={styles.login}>
					Login to comment
				</Link>
			)}
			<div className={styles.comments}>
				{isLoading ? (
					<>Loading...</>
				) : (
					data?.map((item) => {
						return (
							<div className={styles.comment} key={item._id}>
								<div className={styles.user}>
									{item?.user?.image && (
										<Image
											src={item.user.image}
											alt="logo"
											height={50}
											width={50}
											className={styles.image}
										/>
									)}
									<div className={styles.userInfo}>
										<span className={styles.username}>{item.user.name}</span>
										<span className={styles.date}>{item.createdAt}</span>
									</div>
								</div>
								<div className={styles.decs}>{item.desc}</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}

export default Comments;
