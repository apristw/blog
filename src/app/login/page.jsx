import React from "react";
import styles from "./loginPage.module.css";

function page() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.socialButton}>Sign With Google</div>
				<div className={styles.socialButton}>Sign With Github</div>
				<div className={styles.socialButton}>Sign With Facebook</div>
			</div>
		</div>
	);
}

export default page;
