"use client";
import React from "react";
import styles from "./loginPage.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function page() {
	const { data, status } = useSession();
	const route = useRouter();

	if (status === "loading") {
		return <div>Loading...</div>;
	}
	if (status === "authenticated") {
		route.push("/");
	}
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.socialButton} onClick={() => signIn("google")}>
					Sign With Google
				</div>
				<div className={styles.socialButton}>Sign With Github</div>
				<div className={styles.socialButton}>Sign With Facebook</div>
			</div>
		</div>
	);
}

export default page;
