import {
  Center,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import { MButton } from "../components/MButton";
import { login } from "../services/login";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string) => {
    const loggedIn = await login(email);

    if (!loggedIn) {
      return alert("Email inválido");
    }

    setIsLoggedIn(true);
    navigate("/conta/1");
  };

  return (
    <Box padding={"25px"}>
      <Card>
        <Center fontSize={"24px"} fontWeight="bold" mb={"8px"} color="#301934">
          <h1>Sign in to your account</h1>
        </Center>
        <FormControl padding={"16px"}>
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
          <Input type="password" id="password" />
        </FormControl>

        <Center >
          <MButton onclick={() => validateUser(email)}></MButton>
        </Center>
      </Card>
    </Box>
  );
};

export default Home;
