import React from "react"
import { Link as RouteLink } from "react-router-dom";
import { Flex, Box, Heading, Text, Button } from "@chakra-ui/core";

export default function Home() {
  return (
    <Flex 
      align="center" 
      justify="center" 
      h="70vh" 
      bg="blue.300"
      color="blue.50"
      px={5}
    >
      <Box>
        <Heading fontSize="5xl">Found Something Helpful?</Heading>
        <Heading fontSize="3xl">Share It!</Heading>
        <Button
          mt={1}
          size="lg"
          color="black"
        >
          <RouteLink to="/add">
            Add Entry!
          </RouteLink>
        </Button>
        <Text mt={4}>
          ThisHelpedMe.Today helps you share and find useful tips and 
          tricks for doing life.
        </Text>
      </Box>
    </Flex>
  )
}
