import { Box, Heading, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box as="section" color="#F7FAFC" pt="50px" pb="98px" px="32px">
      <Heading fontWeight="800" fontSize="48px">
        Dio Bank
      </Heading>
      <Text fontWeight="500" fontSize="24px" pt="16px">
        Your online Bank. Start better contolling your financial life.{" "}
      </Text>
    </Box>
  );
};
