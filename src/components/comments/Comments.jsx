import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

function Comments() {
	const status = "authenticated";

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Comments</h1>
			{status === "authenticated" ? (
				<div className={styles.write}>
					<textarea
						placeholder="Write your comment here"
						className={styles.input}
					/>
					<button className={styles.button}>Send</button>
				</div>
			) : (
				<Link href="/login" className={styles.login}>
					Login to comment
				</Link>
			)}
			<div className={styles.comments}>
				<div className={styles.comment}>
					<div className={styles.user}>
						<Image
							src="/p1.jpeg"
							alt="logo"
							height={50}
							width={50}
							className={styles.image}
						/>
						<div className={styles.userInfo}>
							<span className={styles.username}>apristw</span>
							<span className={styles.date}>13.01.2024</span>
						</div>
					</div>
					<div className={styles.decs}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						vero nostrum quisquam?
					</div>
				</div>
				<div className={styles.comment}>
					<div className={styles.user}>
						<Image
							src="/p1.jpeg"
							alt="logo"
							height={50}
							width={50}
							className={styles.image}
						/>
						<div className={styles.userInfo}>
							<span className={styles.username}>apristw</span>
							<span className={styles.date}>13.01.2024</span>
						</div>
					</div>
					<div className={styles.decs}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						vero nostrum quisquam?
					</div>
				</div>
				<div className={styles.comment}>
					<div className={styles.user}>
						<Image
							src="/p1.jpeg"
							alt="logo"
							height={50}
							width={50}
							className={styles.image}
						/>
						<div className={styles.userInfo}>
							<span className={styles.username}>apristw</span>
							<span className={styles.date}>13.01.2024</span>
						</div>
					</div>
					<div className={styles.decs}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						vero nostrum quisquam?
					</div>
				</div>
				<div className={styles.comment}>
					<div className={styles.user}>
						<Image
							src="/p1.jpeg"
							alt="logo"
							height={50}
							width={50}
							className={styles.image}
						/>
						<div className={styles.userInfo}>
							<span className={styles.username}>apristw</span>
							<span className={styles.date}>13.01.2024</span>
						</div>
					</div>
					<div className={styles.decs}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						vero nostrum quisquam?
					</div>
				</div>
			</div>
		</div>
	);
}

export default Comments;
