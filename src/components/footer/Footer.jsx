import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<Image src="/logo.png" alt="logo" width="50" height="50" />
					<h1 className={styles.logoText}>MyBlog</h1>
				</div>
				<p className={styles.desc}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
					inventore consequuntur beatae, corrupti, minus temporibus obcaecati
					sapiente sit dolores qui dicta aperiam? Laudantium possimus voluptatem
					deleniti dicta saepe.
				</p>
				<div className={styles.icons}>
					<Image src="/facebook.png" alt="facebook" width="18" height="18" />
					<Image src="/instagram.png" alt="instagram" width="18" height="18" />
					<Image src="/tiktok.png" alt="tiktok" width="18" height="18" />
					<Image src="/youtube.png" alt="youtube" width="18" height="18" />
				</div>
			</div>
			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Links</span>
					<Link href="/" className={styles.linkItem}>
						Homepage
					</Link>
					<Link href="/" className={styles.linkItem}>
						Blog
					</Link>
					<Link href="/" className={styles.linkItem}>
						About
					</Link>
					<Link href="/" className={styles.linkItem}>
						Contact
					</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Tags</span>
					<Link href="/" className={styles.linkItem}>
						Fashion
					</Link>
					<Link href="/" className={styles.linkItem}>
						Style
					</Link>
					<Link href="/" className={styles.linkItem}>
						Coding
					</Link>
					<Link href="/" className={styles.linkItem}>
						Travel
					</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Social</span>
					<Link href="/" className={styles.linkItem}>
						Facebook
					</Link>
					<Link href="/" className={styles.linkItem}>
						Instagram
					</Link>
					<Link href="/" className={styles.linkItem}>
						Tiktok
					</Link>
					<Link href="/" className={styles.linkItem}>
						Youtube
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Footer;
