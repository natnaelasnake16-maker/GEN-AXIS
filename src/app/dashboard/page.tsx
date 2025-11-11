"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function DashboardPage() {
	const router = useRouter();
	const { user, loading } = useAuth();

	useEffect(() => {
		if (!loading && !user) {
			router.replace("/login");
		}
	}, [loading, user, router]);

	if (loading || !user) {
		return <div className="mx-auto max-w-3xl px-4 py-10">Loading...</div>;
	}

	return (
		<div className="mx-auto max-w-3xl px-4 py-10 space-y-6">
			<h1 className="text-2xl font-semibold">Welcome, {user.displayName || user.email}</h1>
			<div className="flex gap-3">
				<Button onClick={() => router.push("/marketplace")}>Go to Marketplace</Button>
				<Button variant="secondary" onClick={() => router.push("/lumera")}>
					Open Lumera
				</Button>
				<Button variant="ghost" onClick={() => signOut(auth)}>
					Sign out
				</Button>
			</div>
		</div>
	);
}


