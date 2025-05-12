import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>react Hooks</h1>

      <h3>chap01</h3>
      <ul>
        <li>
          <Link href='/chap01/section01'>UseEffectBasic</Link>
        </li>
        <li>
          <Link href='/chap01/section02'>UseEffectDependency</Link>
        </li>
      </ul>
    </>
  );
}
