import { Box, Heading, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box as="section" color="#F7FAFC" pt="10px" pb="32px" px="32px">
      <center>
        <Heading fontWeight="800" fontSize="42px">
          Dio Bank
        </Heading>
        <Text fontWeight="500" pt="16px">
          Your online Bank. For better control of your financial life.{" "}
        </Text>
      </center>
    </Box>
  );
};
