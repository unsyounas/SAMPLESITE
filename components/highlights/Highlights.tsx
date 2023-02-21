"use client"

import { Box, Button, Center, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { IoIosSpeedometer} from 'react-icons/io';
import { FaMoneyCheckAlt} from 'react-icons/fa';
import { BsFillGearFill} from 'react-icons/bs';
import { FaHandPeace} from 'react-icons/fa';


export default function Highlights() {
  return (
    <Box>
      <Box textAlign={"center"}>
        {/* section UpperText Starts */}
        <Text color={"blue.500"} fontWeight="bold" m={5}>
          Highlights
        </Text>
        <Heading fontWeight={"semibold"}> Why Chakra UI Pro? </Heading>
        <Text fontSize={"20"} py="3">
          Because these beautiful and responsive React components will help you
          realize your next idea in no time.
        </Text>
      </Box>
      <Container maxW={1200}>
        <Flex gap={5}>
        <Card align="center">
            <Center color="blue.500">
        <IoIosSpeedometer size={80}/>
            </Center>
            
          <CardHeader>
            <Heading size="md"> Speed up your workflow</Heading>
          </CardHeader>
          <CardBody>
            <Text align={"center"}>
            Quickly put together different components to create an nearly infinite combination of user experiences.
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">View here</Button>
          </CardFooter>
        </Card>
        <Card align="center">
        <Center color="blue.500">
        <FaMoneyCheckAlt size={80}/>
            </Center>
          <CardHeader>
            <Heading size="md"> Save good money</Heading>
          </CardHeader>
          <CardBody>
            <Text align={"center"}>
            Quickly put together different components to create an nearly infinite combination of user experiences.
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">View here</Button>
          </CardFooter>
        </Card>
        <Card align="center">
        <Center color="blue.500">
        <BsFillGearFill size={80}/>
            </Center>
          <CardHeader>
            <Heading size="md"> Easily customizable</Heading>
          </CardHeader>
          <CardBody>
            <Text align={"center"}>
            Quickly put together different components to create an nearly infinite combination of user experiences.
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">View here</Button>
          </CardFooter>
        </Card>
        <Card align="center">
        <Center color="blue.500">
        <FaHandPeace size={80}/>
            </Center>
          <CardHeader>
            <Heading size="md"> Support Chakra UI</Heading>
          </CardHeader>
          <CardBody>
            <Text align={"center"}>
            Quickly put together different components to create an nearly infinite combination of user experiences.
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">View here</Button>
          </CardFooter>
        </Card>
        </Flex>
      </Container>
    </Box>
  );
}
