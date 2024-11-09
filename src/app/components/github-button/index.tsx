import GithubIcon from "@/app/icons/github";
import { GITHUB_REPO_URL } from "@/lib/constants";
import Link from "next/link";

export function GithubButton() {
  return (
    <Link
      href={GITHUB_REPO_URL}
      target="_blank"
      className="absolute z-10 bg-white bottom-2 left-2 rounded-md shadow-md group overflow-hidden transition-all duration-300 hover:pr-2 text-black font-semibold"
    >
      <div className="flex items-center">
        <div className="p-2">
          <GithubIcon className="size-6" />
        </div>
        <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-[100px] group-hover:ml-1">
          Github
        </span>
      </div>
    </Link>
  );
}
