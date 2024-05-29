"use client";
import React, { useState } from "react";
import styles from "./authLink.module.css";
import Link from "next/link";

function AuthLinks() {
	const [opened, setOpened] = useState(false);

	const status = "notauthenticated";
	return (
		<div className={styles.container}>
			{status === "notauthenticated" ? (
				<Link href="/login" className={styles.link}>
					Login
				</Link>
			) : (
				<>
					<Link href="/write" className={styles.link}>
						Write
					</Link>
					<span className={styles.link}>Logout</span>
				</>
			)}
			<div className={styles.burger} onClick={() => setOpened(!opened)}>
				<div className={styles.lines}></div>
				<div className={styles.lines}></div>
				<div className={styles.lines}></div>
			</div>
			{opened && (
				<div className={styles.responsiveMenu}>
					<Link href="/">Homepage</Link>
					<Link href="/">Contact</Link>
					<Link href="/">About</Link>
					{status === "notauthenticated" ? (
						<Link href="/login" className={styles.link}>
							Login
						</Link>
					) : (
						<>
							<Link href="/write" className={styles.link}>
								Write
							</Link>
							<span className={styles.link}>Logout</span>
						</>
					)}
				</div>
			)}
		</div>
	);
}

export default AuthLinks;
