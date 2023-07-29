import Link from "next/link";

export default function Footer() {
  return (
    <header>
      <Link href="/">
        <h1>Instagram</h1>
      </Link>
      <nav>
        <Link href="/">홈</Link>
        <Link href="/search">돋</Link>
        <Link href="/new">뉴</Link>
        <Link href="/">로긘</Link>
      </nav>
    </header>
  );
}
