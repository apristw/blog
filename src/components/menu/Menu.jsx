import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "../menuPosts/MenuPost";
import MenuCategories from "../menuCategories/MenuCategories";

function Menu() {
	return (
		<div className={styles.container}>
			<h2 className={styles.subtitle}>{"What's Hot"}</h2>
			<h1 className={styles.title}>Most Popular</h1>
			<MenuPost withImage={false} />
			{/* Categories Section */}
			<h2 className={styles.subtitle}>"Discorver By Topic"</h2>
			<h1 className={styles.title}>Categories</h1>
			<MenuCategories />

			{/* Choosen By Editor section */}
			<h2 className={styles.subtitle}>"Choosen By The Editor"</h2>
			<h1 className={styles.title}>Editors Pick</h1>
			<MenuPost withImage={true} />
		</div>
	);
}

export default Menu;
