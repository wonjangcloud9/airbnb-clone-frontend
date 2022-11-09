import { Button, Heading, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <VStack bg="gray.100" minH="100vh" justifyContent={"center"}>
            <Heading>404</Heading>
            <Text>Page not found</Text>
            <Link to="/">
            <Button variant={"link"} colorScheme={"red"}>Go Home</Button>
            </Link>
        </VStack>

    )
}
    