/* eslint-disable jsx-a11y/label-has-associated-control */
"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setError(null);
		setLoading(true);
		try {
			await signInWithEmailAndPassword(auth, email, password);
			router.push("/dashboard");
		} catch (err: unknown) {
			const message = err instanceof Error ? err.message : "Login failed";
			setError(message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="mx-auto max-w-md px-4 py-12">
			<Card>
				<CardHeader>
					<CardTitle>Login</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={onSubmit} className="space-y-4">
						<div className="space-y-2">
							<label className="text-sm font-medium">Email</label>
							<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-400" placeholder="you@example.com" />
						</div>
						<div className="space-y-2">
							<label className="text-sm font-medium">Password</label>
							<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-400" placeholder="••••••••" />
						</div>
						{error ? <p className="text-sm text-red-600">{error}</p> : null}
						<Button type="submit" disabled={loading} className="w-full">
							{loading ? "Signing in..." : "Sign in"}
						</Button>
						<p className="text-xs text-neutral-600">
							No account?{" "}
							<a href="/signup" className="underline">
								Sign up
							</a>
						</p>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}


