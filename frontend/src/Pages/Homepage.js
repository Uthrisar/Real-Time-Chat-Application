import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import Login from "../components/Authentication/login";
import Signup from "../components/Authentication/signup";
import logo from "../logo.webp";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent >
      <Flex
      
        d="flex"
        flexDirection="column"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        
          <Text fontSize="4xl" fontFamily="Work Sans" textAlign="center" mb={4}>
            Chat-Time
          </Text>


        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" backgroundColor="gray.300">
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab>Login</Tab>
              <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Container>
  );
};

export default Homepage;
