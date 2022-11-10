import { Box, Button, HStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import {FaAirbnb} from "react-icons/fa";

export default function Root() {
  return <Box>
    <HStack py={5} px={10} borderBottomWidth={1} justifyContent={"space-between"}>
      <Box color={"red.500"}>
    <FaAirbnb size={38} />
    </Box> 
    <HStack>
      <Button>Log in</Button>
      <Button>Sign up</Button>
    </HStack>
    </HStack>
    <Outlet />
  </Box>
}