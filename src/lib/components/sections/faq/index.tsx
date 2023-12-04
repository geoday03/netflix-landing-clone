import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function FAQ() {
  return (
    <VStack w="100%">
      <Heading>Frequently Asked Questions</Heading>

      <Accordion w="full" px="5em">
        <AccordionItem>
          <AccordionButton as={Button} py="2em" rounded="0">
            <Text fontSize="1.2rem" fontWeight="400" mr="auto">
              What is this?
            </Text>
          </AccordionButton>

          <AccordionPanel>
            <Text mb="2em">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices.
            </Text>

            <Text>
              You can watch as much as you want, whenever you want – all for one
              low monthly price. There's always something new to discover and
              new TV shows and movies are added every week!
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton as={Button} py="2em" rounded="0">
            <Text fontSize="1.2rem" fontWeight={400} mr="auto">
              How much does Netflix cost?
            </Text>
          </AccordionButton>

          <AccordionPanel>
            <Text>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              $6.99 to $22.99 a month. No extra costs, no contracts.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton as={Button} py="2em" rounded="0">
            <Text fontSize="1.2rem" fontWeight={400} mr="auto">
              Where can I watch?
            </Text>
          </AccordionButton>

          <AccordionPanel>
            <Text mb="2em">
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
            </Text>

            <Text>
              You can also download your favorite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
}
