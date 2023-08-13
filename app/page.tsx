"use client";
import { Box, Flex } from "@chakra-ui/react";
import { Carousel, LeftButton, RightButton } from "chakra-ui-carousel";

const elements = [
  "Element 1",
  "Element 2",
  "Element 3",
  "Element 4",
  "Element 5",
  "Element 6",
  "Element 7",
  "Element 8",
  "Element 9",
  "Element 10",
];

export default function Home() {
  return (
    <Box p={2}>
      <Carousel gap={50}>
        {elements.map((element, index) => (
          <Box
            p={2}
            borderWidth={2}
            borderColor={"#ccc"}
            borderRadius={"0.5rem"}
            key={index}
            w="100%"
            h="100%"
          >
            {element}
          </Box>
        ))}
        
      </Carousel>
      <Flex w='full' justify='space-between' p={4}>
          <LeftButton />
          <RightButton />
        </Flex>
    </Box>
  );
}
