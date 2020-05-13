import React from 'react'
import { Tag as ChakraTag, TagLabel } from '@chakra-ui/core'

export default function Tag({category, ...rest}) {
  return (
    <ChakraTag {...rest} size="lg" mb={2} bg="gray.400" color="black">
      <TagLabel>{ category.text }</TagLabel>
    </ChakraTag>
  )
}