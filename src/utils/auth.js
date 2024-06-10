// import Google from "next-auth/providers/google";
// import Github from "next-auth/providers/github";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import prisma from "./connect";

// export const authOptions = {
// 	adapter: PrismaAdapter(prisma),
// 	providers: [
// 		Google({
// 			clientId: process.env.GOOGLE_CLIENT_ID,
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// 		}),
// 		Github({
// 			clientId: process.env.GOOGLE_CLIENT_ID,
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// 		}),
// 	],
// };

import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";

export const authOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		Github({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async signIn({ user, account, profile }) {
			try {
				console.log("SignIn callback - user:", user);
				console.log("SignIn callback - account:", account);
				console.log("SignIn callback - profile:", profile);
				return true;
			} catch (error) {
				console.error("SignIn callback error:", error);
				return false;
			}
		},
	},
};
