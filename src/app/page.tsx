import Link from "next/link";
import GithubIcon from "./icons/github";
import { Map } from "./map";

export default function Home() {
  return (
    <main className="relative w-screen h-screen">
      <Map />
      <Link
        href=""
        target="_blank"
        className="absolute z-10 bg-white p-2 bottom-2 left-2 rounded-md shadow-md"
      >
        <GithubIcon className="size-4" />
      </Link>
    </main>
  );
}
