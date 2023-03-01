import {
  Box,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { login } from "../services/login";
import { MButton } from "./MButton";

export const Card = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <Box backgroundColor={"#FFFFFF"} borderRadius="25px" padding={"15px"}>
      <Center fontSize={"24px"} fontWeight="bold" mb={"8px"} color="#301934">
        <h1>Sign in</h1>
      </Center>
      <FormControl>
        <FormLabel>Email address:</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <FormLabel>Password:</FormLabel>
        <FormHelperText margin={"0"} padding={"0"}>
          Must have at least 6 characters
        </FormHelperText>
        <Input type="password" />
      </FormControl>

      <Center>
        <MButton buttonEvent={() => login(email)}></MButton>
      </Center>
    </Box>
  );
};
