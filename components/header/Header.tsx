"use client"

import { Box, Button, Flex, Heading, HStack, Image, Link, List, ListItem } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon, MoonIcon } from '@chakra-ui/icons'



export default function Header(){
  return (
    
    <Box pt={5} as="header">
      <Flex
        justifyContent={"space-around"}
        alignItems={"center"}
        fontWeight="bold"
        ml={10}
        mb={5}
      >
        {/* left area */}
        <Box>
          <HStack>
            <Image src="/images/Logo.webp" alt="logo" />
            <List>
              <HStack align={"center"} spacing={10} fontWeight="bold" ml="40px">
                <ListItem>Home</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Contact</ListItem>
              </HStack>
            </List>
          </HStack>
        </Box>
        {/* Right area */}
        <Box>
          <Box pt="5" as="span">
            <SearchIcon w="25" h="25" pl="15"/>
          </Box>

          <Box pt="5" as="span">
            <MoonIcon w="25" h="25" px="15"/>
          </Box>
          <Link target={"_blank"} href="https://www.piaic.org">
          <Button variant={"outline"}>Go to Piaic</Button>
          </Link>
        </Box>
      </Flex>
    </Box>
    
  )
}
