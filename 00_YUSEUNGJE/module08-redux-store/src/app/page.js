import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>

      <h2>chap01 basicRedux</h2>
      <ul>
        <li>
          <Link href='/chap01'>basicRedux</Link>
        </li>
      </ul>

      <h2>chap02 basicRedux</h2>
      <ul>
        <li>
          <Link href='/chap02'>combineReducers</Link>
        </li>
      </ul>
    </div>
  );
}
