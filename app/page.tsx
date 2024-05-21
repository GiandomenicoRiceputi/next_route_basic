import { CheckCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center flex-row p-8">
      <Link href="/search?q=example">Search for "example"</Link>
      <div className="space-x-4">
        <button
          type="button"
          className="inline-flex items-center gap-x-2 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 m-2"
        >
          Log in
          <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-x-2 rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 m-2"
        >
          Sign in
          <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </main>
  );
}
