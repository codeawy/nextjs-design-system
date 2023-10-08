import React from "react";
import Button from "./ui/Button";

const ButtonList = () => {
  return (
    <div className="max-w-lg mx-auto border border-dashed rounded-md p-5">
      <div className="flex items-center justify-center space-x-2 p-5 rounded-md">
        <Button size={"xs"}>Button</Button>
        <Button variant={"outline"} size="sm">
          Button
        </Button>
        <Button variant={"destructive"} size="base">
          Button
        </Button>
        <Button size="lg" rounded="none">
          Button
        </Button>
      </div>
      <Button fullWidth rounded="full">
        Full width
      </Button>
    </div>
  );
};

export default ButtonList;
