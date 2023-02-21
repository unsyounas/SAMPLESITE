"use client"

import { StarIcon } from '@chakra-ui/icons';
import { Box, Container, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
{/*ICON from React*/}
import { AiOutlineStar } from 'react-icons/ai';
import { BiRocket } from 'react-icons/bi';
import { BiMoon } from 'react-icons/bi';
import { FaPaintBrush } from 'react-icons/fa';
import { BsCode } from 'react-icons/bs';
import { MdOutlineAccessible } from 'react-icons/md';

export default function Feature() {
  return (
    <Box py="50" as="section">

      {/* section Starts */}
      <Box textAlign={"center"}>
        {/* section UpperText Starts */}
        <Text color={"blue.500"} fontWeight="bold">
          Feature
        </Text>
        <Heading fontWeight={"semibold"}> What you can expect? </Heading>
        <Text>
          A bundle of 220+ ready-to-use, responsive and accessible components
          with clever structured sourcecode files.
        </Text>
      </Box>{" "}
      {/* section UpperText Ends */}
      
      
      <Container maxW={1200} mt="10">{/* 6 Features Starts */}

        <Box>
        <SimpleGrid columns={2} spacing={8}>
          <Box>
            {" "}
            {/* Features # 1 Starts*/}
            <HStack>
              <Box color="blue.500">
              <AiOutlineStar size={50} />
              </Box>
              <Box>
                <Heading fontSize={18}>220+ Components</Heading>
                <Text fontSize={"16"} py="3">
                  All our components come with a light and dark color mode by
                  default.
                </Text>
              </Box>
            </HStack>
            {/* Features # 1 Ends*/}
          </Box>
          

          <Box>
            {" "}
            {/* Features # 2 Starts*/}
            <HStack>
              <Box color="blue.500">
              <BiRocket size={50} />
              </Box>
              
              <Box>
                <Heading fontSize={18}>Themable</Heading>
                <Text fontSize={"16"} py="3">
                Your style. Your brand. Customize the components as you need them. It's that simple.
                </Text>
              </Box>
            </HStack>
            {/* Features # 2 Ends*/}
          </Box>

          <Box>
            {" "}
            {/* Features # 3 Starts*/}
            <HStack>
              <Box color="blue.500">
              <BiMoon size={50} />
              </Box>
              
              <Box>
                <Heading fontSize={18}>Light & Dark</Heading>
                <Text fontSize={"16"} py="3">
                All our components come with a light and dark color mode by default.
                </Text>
              </Box>
            </HStack>
            {/* Features # 3 Ends*/}
          </Box>
          

          <Box>
            {" "}
            {/* Features # 4 Starts*/}
            <HStack>
            <Box color="blue.500">
            <FaPaintBrush size={50} />
            </Box>
              
              <Box>
                <Heading fontSize={18}>Themable</Heading>
                <Text fontSize={"16"} py="3">
                Your style. Your brand. Customize the components as you need them. It's that simple.
                </Text>
              </Box>
            </HStack>
            {/* Features # 4 Ends*/}
          </Box>

          <Box>
            {" "}
            {/* Features # 5 Starts*/}
            <HStack>
            <Box color="blue.500">
            <BsCode size={50} />
            </Box>
              
              <Box>
                <Heading fontSize={18}>Developer Friendly</Heading>
                <Text fontSize={"16"} py="3">
                Components are semantically divided into several files for better developer experience.
                </Text>
              </Box>
            </HStack>
            {/* Features # 5 Ends*/}
          </Box>
          

          <Box>
            {" "}
            {/* Features # 6 Starts*/}
            <HStack>
            <Box color="blue.500">
            <MdOutlineAccessible size={50} />
            </Box>
              
              <Box>
                <Heading fontSize={18}>Accessible</Heading>
                <Text fontSize={"16"} py="3">
                Accessibility first. That's why we pay attention to accessibility right from the start.
                </Text>
              </Box>
            </HStack>
            {/* Features # 6 Ends*/}
          </Box>
          </SimpleGrid> 
        </Box>
        
      </Container>{/* 6 Features Ends */}

      {/* section Ends */}
    </Box>
  );
}

