import Link from "next/link";

export default function Home() {
  console.log("test");
  return (
    <main>
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">go to about</Link>
      </p>
    </main>
  );
}
