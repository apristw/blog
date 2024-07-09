"use client";
import React, { useState, useEffect } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

const storage = getStorage(app);

function WritePage() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");
	const [file, setFile] = useState(null);
	const [media, setMedia] = useState("");
	const [title, setTitle] = useState("");

	const { status } = useSession();
	const route = useRouter();

	useEffect(() => {
		const upload = () => {
			const name = new Date().getTime() + file.name;
			/** @type {any} */
			const metadata = {
				contentType: "image/jpeg",
			};

			const storageRef = ref(storage, "images/" + name);
			const uploadTask = uploadBytesResumable(storageRef, file, metadata);

			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log("Upload is " + progress + "% done");
					switch (snapshot.state) {
						case "paused":
							console.log("Upload is paused");
							break;
						case "running":
							console.log("Upload is running");
							break;
					}
				},
				(error) => {
					switch (error.code) {
						case "storage/unauthorized":
							break;
						case "storage/canceled":
							break;
						case "storage/unknown":
							break;
					}
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						setMedia(downloadURL);
					});
				}
			);
		};
		file && upload();
	}, [file]);

	if (status === "loading") {
		return <div>Loading...</div>;
	}
	if (status === "unauthenticated") {
		route.push("/login");
	}

	const slugify = (str) =>
		str
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, "")
			.replace(/[\s_-]+/g, "-")
			.replace(/^-+|-+$/g, "");

	const handleSubmit = async () => {
		const res = await fetch("/api/posts", {
			method: "POST",
			body: JSON.stringify({
				title,
				desc: value,
				img: media,
				slug: slugify(title),
				catSlug: "style",
			}),
		});

		if (res.status === 200) {
			const data = await res.json();
			route.push(`/posts/${data.slug}`);
		}
	};

	return (
		<div className={styles.container}>
			<input
				type="text"
				placeholder="Title"
				className={styles.input}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<div className={styles.editor}>
				<button className={styles.button} onClick={() => setOpen(!open)}>
					<Image src="/plus.png" alt="plus" width={16} height={16} />
				</button>
				{open && (
					<div className={styles.add}>
						<input
							type="file"
							id="image"
							onChange={(e) => setFile(e.target.files[0])}
							style={{ display: "none" }}
						/>
						<button className={styles.addButton}>
							<label htmlFor="image">
								<Image src="/image.png" alt="image" width={16} height={16} />
							</label>
						</button>
						<button className={styles.addButton}>
							<Image
								src="/external.png"
								alt="external"
								width={16}
								height={16}
							/>
						</button>
						<button className={styles.addButton}>
							<Image src="/video.png" alt="video" width={16} height={16} />
						</button>
					</div>
				)}
				{/* TODO:Add Selecting Categories */}
				<ReactQuill
					className={styles.textArea}
					theme="bubble"
					value={value}
					onChange={setValue}
					placeholder="Tell Your Story Here ..."
				/>
			</div>
			<button className={styles.publish} onClick={handleSubmit}>
				Publish
			</button>
		</div>
	);
}

export default WritePage;
