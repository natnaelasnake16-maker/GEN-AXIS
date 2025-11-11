"use client";

import { Button } from "@/components/ui/button";

export default function MarketplacePage() {
	return (
		<div className="mx-auto max-w-4xl px-4 py-10 space-y-6">
			<h1 className="text-2xl font-semibold">Marketplace</h1>
			<p className="text-neutral-700">Explore tools and extensions for your identity graph.</p>
			<div className="flex gap-3">
				<Button>Browse</Button>
				<Button variant="secondary">Filters</Button>
			</div>
		</div>
	);
}


