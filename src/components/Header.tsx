import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Flex padding={"5px"}>
      <Box>
        <center>
          <Heading fontWeight="800" fontSize="36px" color="#F7FAFC">
            Dio Bank
          </Heading>
        </center>
      </Box>
      {isLoggedIn && (
        <>
          <Spacer />
          <Button onClick={() => logout()}>Sair</Button>
        </>
      )}
    </Flex>
  );
};
