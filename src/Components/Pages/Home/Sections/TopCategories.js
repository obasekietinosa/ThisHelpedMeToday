import React from 'react'
import { Stack, Box, Heading, ButtonGroup, Button } from "@chakra-ui/core";
import CategoryTag from '../../../App/Category/Tag'
import Categories from '../../../App/Category/Categories'
import { Link as RouteLink } from "react-router-dom"

export default function TopCategories() {
  return (
    <Box py={[10]} px={[5, "20%", "30%"]}>
      <Heading mb={2} fontSize="3xl">(Helpful) Categories</Heading>
      <Categories 
        limit={20} 
        layout={
          { 
            component: Stack, 
            props: {direction:"row", wrap:"wrap", spacing:2 }
          }
        }
        shouldRender={CategoryTag} 
      />
      <ButtonGroup>
        <Button
          mt={1}
          size="lg"
          color="black"
          bg="yellow.300"
          rightIcon="search"
        >
          <RouteLink to="/search">
            Search
          </RouteLink>
        </Button>
        <Button
          mt={1}
          size="lg"
          color="white"
          bg="black"
          rightIcon="list"
        >
          <RouteLink to="/categories">
            More Categories
          </RouteLink>
        </Button>
      </ButtonGroup>
    </Box>
  )
}