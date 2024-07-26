/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/routing">STATIC</Link>
        </li>
        <li>
          <a href="/routing/dynamic/1234">DYNAMIC</a>
        </li>
        <li>
          <Link href="/routing/nested/asdf/routing">NESTED</Link>
        </li>
        <li>
          <a href="/routing/catch-all-segments/1/2/3/4/5/a/b/c/d/e">
            CATCH-ALL-SEGMENTS
          </a>
        </li>
      </ul>
    </main>
  );
}
