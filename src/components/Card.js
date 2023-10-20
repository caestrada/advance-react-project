import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      borderRadius="lg"
      maxW="sm"
      overflow="hidden"
      boxShadow="md"
      backgroundColor="white"
      paddingBottom={4}
    >
      <Image borderRadius="lg" src={imageSrc} alt={title}  objectFit="cover" />

      <VStack align="start" spacing={2} px={4}>
        <Heading color="black" size="md">{title}</Heading>
        <Text fontSize='xs' color="gray">{description}</Text>
      </VStack>

      <HStack px={4} justify="start" align="end" color='black' w="full" h="full">
          <Text fontSize="xs">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x"/>
      </HStack>
    </VStack>
  );
};

export default Card;
