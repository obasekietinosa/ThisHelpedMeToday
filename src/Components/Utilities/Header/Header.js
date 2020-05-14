import React from 'react'
import { Flex, Heading, Stack, Link } from '@chakra-ui/core'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <Flex 
      textAlign="center" 
      direction={{ base: "column", md: "row" }} 
      position="fixed" 
      justifyContent="space-around"
      bg="white"
      h="70px"
      w="100%"
      top={0}
      borderBottomWidth="1px"
      borderBottomColor="grey.100"
    >
      <NavLink to="/">
        <Heading lineHeight={[1, "70px"]} >THM.T</Heading>
      </NavLink>

      <Stack justifyContent="center" lineHeight={[2,"70px"]} isInline spacing={2}>
        <Link as={NavLink} to="/about">
          About
        </Link>
        <Link as={NavLink} to="/auth/login">
          Login
        </Link>
        <Link as={NavLink} to="/auth/sign-up">
          Sign Up
        </Link>
      </Stack>
    </Flex>
  )
}