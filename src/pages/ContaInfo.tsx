import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const ContaInfo = () => {
  return (
    <>
      <Text color={"white"} fontSize="3xl" fontWeight={"bold"}>
        Informacoes da conta
      </Text>
      <Link to={"/conta/1"}>
        <Text fontSize={"xl"} color={"white"}>
          Conta
        </Text>
      </Link>
    </>
  );
};

export default ContaInfo;
