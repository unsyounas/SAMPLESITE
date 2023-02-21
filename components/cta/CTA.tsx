"use client"

import { Box, Button, Container, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'

export default function CTA() {
  return ( 
<Box >
<Container maxW="1200" bg="blue.50" p="10">
<HStack>
    <Box flex={3}>
<Heading>Try our free components</Heading>
<Text fontSize={"20px"}> You don't have to buy a pig in a poke - you can experience our 
        free community components before making a purchase decision.</Text>
        </Box>


    
<Box flex={1} alignSelf="flex-start" >
<Button colorScheme={"blue"} float="right">View Component</Button>
</Box>
</HStack>
</Container>
    
</Box>  

  
    )
   
    
  
}
