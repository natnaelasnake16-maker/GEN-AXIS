import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold tracking-tight">GEN AXIS</h1>
          <p className="text-neutral-700">
            Build your Identity Graph and connect tools across your personal stack. Sign up to
            create a profile, then manage data from your dashboard.
          </p>
          <div className="flex gap-3">
            <Link href="/signup">
              <Button>Get started</Button>
            </Link>
            <Link href="/login">
              <Button variant="secondary">Log in</Button>
            </Link>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link className="underline" href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link className="underline" href="/marketplace">Marketplace</Link>
              </li>
              <li>
                <Link className="underline" href="/lumera">Lumera</Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
