import Link from "next/link";
import ButtonList from "./components/ButtonList";
import Button, { buttonVariants } from "./components/ui/Button";
import ThemeChanger from "./components/ui/ThemeChanger";

export default function Home() {
  return (
    <main className="min-h-screen p-24 space-y-10">
      <Link href="/" className={`${buttonVariants({ rounded: "full" })} space-x-1`}>
        <span>Ger your ticket</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_9669_4869)">
            <path
              d="M4.16699 10H15.8337"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.833 15L15.833 10"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.833 5L15.833 10"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_9669_4869">
              <rect width="20" height="20" fill="currentColor" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <ThemeChanger />
      <ButtonList />
    </main>
  );
}
