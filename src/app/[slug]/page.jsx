import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

function page() {
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>
						Lorem ipsum dolor sit amet consectetur adipisicing.
					</h1>
					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							<Image src="/p1.jpeg" alt="logo" fill className={styles.avatar} />
						</div>
						<div className={styles.userTextContainer}>
							<span className={styles.username}>apristw</span>
							<span className={styles.date}>13.05.1992</span>
						</div>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image src="/p1.jpeg" alt="logo" fill className={styles.image} />
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.post}>
					<div className={styles.desc}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
							magnam obcaecati ea, quos sapiente et ut nostrum vel ipsa? Id
							ratione error magni, debitis alias a doloremque consequatur labore
							repellat quo dolor cumque at vel
						</p>
						<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
							magnam obcaecati ea, quos sapiente et ut nostrum vel ipsa? Id
							ratione error magni, debitis alias a doloremque consequatur labore
							repellat quo dolor cumque at vel
						</p>
						<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
							magnam obcaecati ea, quos sapiente et ut nostrum vel ipsa? Id
							ratione error magni, debitis alias a doloremque consequatur labore
							repellat quo dolor cumque at vel
						</p>
					</div>
					<div className={styles.comment}>
						<Comments />
					</div>
				</div>
				<Menu />
			</div>
		</div>
	);
}

export default page;
