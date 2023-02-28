import { Box, Center, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { login } from "../services/login";
import { Header } from "./Header";
import { MButton } from "./MButton";

interface ICard {
  title: string;
}

export const Card = ({ title }: ICard) => {
  return (
    <Box minHeight={"100vh"} backgroundColor="#301934" padding="25px">
      <center>
        <Header />
      </center>

      <Box backgroundColor={"#FFFFFF"} borderRadius="25px" padding={"15px"}>
        <Center fontSize={"24px"} fontWeight="bold" mb={"8px"} color="#301934">
          <h1>{title}</h1>
        </Center>
        <FormControl>
          <FormLabel>Email address:</FormLabel>
          <Input type="email" />
          <FormLabel>Password:</FormLabel>
          <FormHelperText margin={"0"} padding={"0"}>Must have at least 6 characters</FormHelperText>
          <Input type="password" />
        </FormControl>
        
        <Center>
          <MButton buttonEvent={login}></MButton>
        </Center>
      </Box>
    </Box>
  );
};
