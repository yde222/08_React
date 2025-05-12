import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Props and State</h1>
      <h2>Props</h2>
      <ul>
        <li>
          <Link href="/chap01/section01">Props</Link>
        </li>
        <li>
          <Link href="/chap01/section02">UsingProps</Link>
        </li>
      </ul>
      
      <h1>State</h1>
      <ul>
        <li>
          <Link href="/chap02/section01">State</Link>
        </li>
        <li>
          <Link href="/chap02/section02">Child update Parent State</Link>
        </li>
      </ul>

      <h1>Controlled Component</h1>
      <ul>
        <li>
          <Link href="/chap03/section01">Single Input</Link>
        </li>
        <li>
          <Link href="/chap03/section02">Multi Input</Link>
        </li>
      </ul>
    </div>
  );
}
