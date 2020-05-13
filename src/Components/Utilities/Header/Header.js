import React from 'react'
import { Flex, Heading, Stack, Link } from '@chakra-ui/core'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <Flex textAlign="center" direction={{ base: "column", md: "row" }} justifyContent="space-around">
      <NavLink to="/">
        <Heading>THM.T</Heading>
      </NavLink>

      <Stack justifyContent="center" lineHeight={[2,3]} isInline spacing={2}>
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