import ButtonList from "./components/ButtonList";
import Button from "./components/ui/Button";
import ThemeChanger from "./components/ui/ThemeChanger";

export default function Home() {
  return (
    <main className="min-h-screen p-24 space-y-10">
      <ThemeChanger />
      <ButtonList />
    </main>
  );
}
