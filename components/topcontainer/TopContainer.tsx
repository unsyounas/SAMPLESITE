"use client"
import { Avatar, AvatarBadge, AvatarGroup, Flex, Link } from '@chakra-ui/react'
import { Box, Button, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function TopContainer() {
  return (
    <Box
    as="section"
      backgroundImage={"/images/background.webp"}
      backgroundSize={"contain"}
      py="20"
      
    >
      <HStack>
        {/* Left Box*/}
        <Box w="50%" color={"white"} pl="80">
          <Heading fontSize={60}>Build your next idea even faster</Heading>
          <Text lineHeight={"10"}>
            One Year Panaverse DAO Earn as you Learn Program. Consolidating Web
            3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and
            Ambient Computing/IoT Technologies
          </Text>
          <Box mt="15">
            <Button colorScheme="blue" mr="15">
              Buy Now
            </Button>
            <Button variant={"outline"} colorScheme="blue">
              View Component
            </Button>
          </Box>
          <Flex>
            <AvatarGroup size="md" max={6} mt="5">
              <Avatar
                name="Zia Khan"
                src="https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg"
              />
              <Avatar
                name="Adil Altaf"
                src="https://avatars.githubusercontent.com/u/62209503?v=4"
              />
              <Avatar
                name="Owais Ali"
                src="https://chakrademosite-ows-ali.vercel.app/me.jpg"
              />
              <Avatar
                name="Uns Bin Younas"
                src="https://media.licdn.com/dms/image/D4D03AQH-m5gsMeoFcg/profile-displayphoto-shrink_200_200/0/1665600353448?e=1681948800&v=beta&t=iE63mOGDDsfsgG-vhxJCaMySth2skoMPsQuNchk-9dc"
              />
              <Avatar
                name="Salman Saeed"
                src="https://media.licdn.com/dms/image/C4E03AQGiUgOhd1fcDw/profile-displayphoto-shrink_200_200/0/1600069075208?e=1681948800&v=beta&t=5MRN2UmEo3SlibznOuiWFlGn1nbyCj04JxFos8Gx3sA"
              />
              <Avatar name="" src="" />
            </AvatarGroup>
            <Text mt="8" ml="3">
              {" "}
              Tutorial By:{" "}
              <Link target={"_blank"} href="https://bit.ly/3I9u2wp" color="blue.500">
                {" "}
                Owais Ali
              </Link>
              & Created By: Uns Bin Younas
            </Text>
          </Flex>
        </Box>

        {/* Right Box*/}
        <Box w="50%">
          <Image src="/images/banner.png" alt="banner" />
        </Box>
      </HStack>
    </Box>
  );
}
