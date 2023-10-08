"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Button from "./Button";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="text-foreground">
      {isClient ? (
        <div className="mx-auto my-10 flex max-w-lg items-center justify-center space-x-5">
          <Button onClick={() => setTheme("light")} variant={"outline"}>
            Light Mode
          </Button>
          <Button onClick={() => setTheme("dark")}>Dark Mode</Button>
        </div>
      ) : (
        <div className="mx-auto my-10 flex max-w-lg items-center justify-center space-x-5 animate-pulse">
          <Button className="w-[120px] h-10 bg-gray-500">{""}</Button>
          <Button className="w-[120px] h-10 bg-gray-500">{""}</Button>
        </div>
      )}
    </div>
  );
};

export default ThemeChanger;
