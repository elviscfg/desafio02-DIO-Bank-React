import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IButton {
  onclick: MouseEventHandler;
}

export const MButton = ({ onclick }: IButton) => {
  return (
    <Button
      onClick={onclick}
      colorScheme="teal"
      size="sm"
      width={"100%"}
      marginTop="5px"
    >
      Sign in
    </Button>
  );
};
