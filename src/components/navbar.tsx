import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
	return (
		<nav className="border-b bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
			<div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
				<Link href="/" className="font-semibold tracking-tight">
					GEN AXIS
				</Link>
				<div className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
					<Link className="hover:underline" href="/dashboard">
						Dashboard
					</Link>
					<Link className="hover:underline" href="/marketplace">
						Marketplace
					</Link>
					<Link className="hover:underline" href="/lumera">
						Lumera
					</Link>
				</div>
				<div className="flex items-center gap-2">
					<Link href="/login">
						<Button variant="ghost">Log in</Button>
					</Link>
					<Link href="/signup">
						<Button>Sign up</Button>
					</Link>
				</div>
			</div>
		</nav>
	);
}


