import { Box, HStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import {FaAirbnb} from "react-icons/fa";

export default function Root() {
  return <Box>
    <HStack>
    <FaAirbnb />
    </HStack>
    <Outlet />
  </Box>
}