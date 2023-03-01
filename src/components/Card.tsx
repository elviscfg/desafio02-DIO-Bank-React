import {
  Box,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { login } from "../services/login";
import { MButton } from "./MButton";
import { api } from "../api";

interface UserData {
  email: string;
  password: string;
  name: string;
}

export const Card = () => {
  const [email, setEmail] = useState<string>("");
  const [userData, setUserData] = useState<null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  console.log(userData);

  return (
    <Box backgroundColor={"#FFFFFF"} borderRadius="25px" padding={"15px"}>
      {userData === null || userData === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Informacoes carregadas</h1>
      )}
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
