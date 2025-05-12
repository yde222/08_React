import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Props and State</h1>
      <h2>Props</h2>
      <ul>
        <li>
          <Link href='/chap02/section01'>State</Link>
        </li>
        <li>
          <Link href='/chap02/section02'>Child Update Parent State</Link>
        </li>
      </ul>
      <h2>State</h2>
      <ul>
        <li>
          <Link href='/chap03/section01'>State</Link>
        </li>
        <li>
          <Link href='/chap03/section01'>State</Link>
        </li>
        </ul>


    </div>

    
  );
}
