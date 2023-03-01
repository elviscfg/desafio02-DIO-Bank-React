import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IButton {
  buttonEvent: MouseEventHandler;
}

export const MButton = ({ buttonEvent }: IButton) => {
  return (
    <Button
      onClick={buttonEvent}
      colorScheme="teal"
      size="sm"
      width={"100%"}
      marginTop="5px"
    >
      Button
    </Button>
  );
};
