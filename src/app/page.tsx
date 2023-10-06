import Button from "./components/ui/Button";
import ThemeChanger from "./components/ui/ThemeChanger";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <ThemeChanger />
      <div className="flex items-center justify-center space-x-2 p-5 rounded-md">
        <Button size={"xs"}>Button</Button>
        <Button variant={"outline"} size="sm">
          Button
        </Button>
        <Button variant={"destructive"} size="base">
          Button
        </Button>
        <Button size="lg">Button</Button>
      </div>

      <Button fullWidth>Full width</Button>
    </main>
  );
}
