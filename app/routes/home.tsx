import type { Route } from "./+types/home";
import { Landing } from "./landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Milo's Portfolio" },
    { name: "description", content: "Milo Akerman's Creative Portfolio" },
  ];
}

export default function Home() {
  return <Landing />;
}
