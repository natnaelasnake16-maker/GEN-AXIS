import { db } from "@/lib/firebase";
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";

export type IdentityNode = {
	id?: string;
	label: string;
	type: "persona" | "account" | "credential" | "connection";
	metadata?: Record<string, unknown>;
	createdAt: number;
};

export async function createUserProfile(userId: string, data: { email?: string | null; displayName?: string | null }) {
	const ref = doc(db, "users", userId);
	await setDoc(
		ref,
		{
			email: data.email ?? null,
			displayName: data.displayName ?? null,
			updatedAt: Date.now(),
			createdAt: Date.now()
		},
		{ merge: true }
	);
}

export async function addIdentityNode(userId: string, node: Omit<IdentityNode, "createdAt">) {
	const col = collection(db, "users", userId, "identityGraph");
	const docRef = await addDoc(col, { ...node, createdAt: Date.now() });
	return docRef.id;
}

export async function getUserProfile(userId: string) {
	const ref = doc(db, "users", userId);
	const snap = await getDoc(ref);
	return snap.exists() ? snap.data() : null;
}


