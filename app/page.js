import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-3xl">Next13 Tutorial</h1>
      <ul>
        <Link href="/about">
          <li>about</li>
        </Link>
        <Link href="/about/team">
          <li>team</li>
        </Link>
      </ul>
    </main>
  );
}
