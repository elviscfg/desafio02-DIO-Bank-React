import { Button } from "@chakra-ui/react";

interface IButton {
  buttonEvent: () => void;
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
