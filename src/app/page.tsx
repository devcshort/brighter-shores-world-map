import { GithubButton } from "./components/github-button";
import { Map } from "./components/map";

export default function Home() {
  return (
    <main className="relative w-screen h-screen">
      <Map />
      <GithubButton />
    </main>
  );
}
