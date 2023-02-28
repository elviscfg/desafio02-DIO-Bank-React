import { ChakraProvider} from "@chakra-ui/react";

import { Card } from "./components/Card";

function App() {
  return (
    <ChakraProvider>
      <Card title="Sign in"></Card>
    </ChakraProvider>
  );
}

export default App;
