import React from "react";
import digitalImg2 from "../../media/Greyscale3.jpg";
import digitalImg4 from "../../media/Aledo-grad3.png";
import {
  Box,
  Stack,
  Text,
  OrderedList,
  List,
  ListItem,
  Card,
  UnorderedList,
  Image,
  Heading,
  Divider,
  HStack,
  Button,
} from "@chakra-ui/react";
import digitalImg3 from "../../media/alley_bg.jpg";
import ow1 from "../../media/video/Ojw1grey.mov";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="home-container">
      <img className="bg-img" src={digitalImg3}></img>
      <div className="a content-container">
        <div className="w-txt-container">
          <Text className="n w-title" fontSize={40}>
            <b>Welcome</b>
          </Text>
          <Text className="n" color="white">
            <i>As Your Friendly Neighborhood Web Dev...</i>
          </Text>
          <Box className="w-txt-innerbox">
            <Text className="n">Hi, I'm</Text>
            <Text className="n" fontFamily="Lobster" fontSize={30}>
              <b>Otis R. Jackson IV</b>
            </Text>
            <Text className="n" color="white">
              <i>
                Software Developer With A Focus In UI/UX Design & Front-End
                Development
              </i>
            </Text>
            <Text className="n" color="white">
              A Digital Artist / Graphic Designer
            </Text>
          </Box>

          <Box className="w-txt-innerbox" mt={20}>
            <Text className="n w-description">
              <i>
                {" "}
                On a more individual level, I'd further describe myself as an
                young artistic and theoretical mind in my approach to many
                aspects in life. I officially began my software development
                journey in 2020 after taking an intro to development course my
                senior year in highschool. Fortunately, I've found a unique way
                to utilize my artistic sense of design within the ever evolving
                field of computer science through Front-End Web Development and
                UI / UX Design.
              </i>
            </Text>
          </Box>
        </div>
        <div className="n w-img-container">
          <img src={digitalImg2} className="w-img"></img>
        </div>
      </div>

      <div className="b">
        <Box className="e-img-conatiner">
          <Box className="b-layout">
            <Box className="e e-img1">
              {/* <img src={digitalImg4}></img> */}
              <Image
                src={digitalImg4}
                boxSize="500px"
                objectFit="cover"
                position="relative"
                ml={20}
              />
            </Box>
          </Box>
        </Box>
        <Box className="e-txt-container">
          <Text className="n e-title" fontFamily="Lobster" fontSize={40}>
            Educational Journey
          </Text>
          <Text className="n" color="white">
            <i>From Texas to Louisiana...</i>
          </Text>
          <Stack>
            <Box>
              <Text className="n s">Aledo Highschool</Text>
              <Text color="white" ml={25}>
                <i>Spring 2016 - Spring 2020</i>
              </Text>
            </Box>
            <Box>
              <Text className="n s">Weatherford College</Text>
              <Text color="white" ml={25}>
                <i>Spring 2018 - Spring 2020</i>
              </Text>
            </Box>
            <Box>
              <Text className="n s">Louisiana State University</Text>
              <Text color="white" ml={25}>
                <i>Fall 2020 - Fall 2023 (Expected)</i>
              </Text>
            </Box>
          </Stack>
        </Box>
      </div>

      <div className="c">
        <Box className="p-txt-container">
          <Text className="n p-title" fontFamily="Lobster" fontSize={40}>
            Projects
          </Text>
          <Text className="n" color="white">
            <i>Creations Of My Imaginaton...</i>
          </Text>

          {/* unordered projects list*/}
          <Stack className="p-list">
            <OrderedList>
              <ListItem className="n l">
                <HStack>
                  <Text>Galaga (Java Edition)</Text>
                  <Box className="code-link">
                    <a
                      href="https://github.com/CozyCoderIV/Galaga-VII"
                      target="_blank"
                    >
                      <Button ml={22} mb={8}>
                        <Text className="button-txt">Code</Text>
                      </Button>
                    </a>
                  </Box>
                </HStack>
              </ListItem>
              <Text fontSize="md" color="white" ml={45}>
                <i>03/01/2021 - 12/27/2021</i>
              </Text>
              <ListItem className="n l">
                <HStack>
                  <Text>Rock Dodger (Javascript)</Text>
                  <Box className="code-link">
                    <a
                      href="https://github.com/CozyCoderIV/Rock_Dodger"
                      target="_blank"
                    >
                      <Button ml={22} mb={8}>
                        <Text className="button-txt">Code</Text>
                      </Button>
                    </a>
                  </Box>
                </HStack>
              </ListItem>
              <Text fontSize="md" color="white" ml={45}>
                <i>04/15/2022 - 04/21/2022</i>
              </Text>
              <ListItem className="n l">
                <HStack>
                  <Text>React Calculator</Text>
                  <Box className="code-link">
                    <a
                      href="https://github.com/CozyCoderIV/react_calculator"
                      target="_blank"
                    >
                      <Button ml={22} mb={8}>
                        <Text className="button-txt">Code</Text>
                      </Button>
                    </a>
                  </Box>
                </HStack>
              </ListItem>
              <Text fontSize="md" color="white" ml={45}>
                <i>12/21/2022 - 12/24/2022</i>
              </Text>
              <ListItem className="n l">
                <HStack>
                  <Text>React Task Tracker</Text>
                  <Box className="code-link">
                    <a
                      href="https://github.com/CozyCoderIV/my_task_tracker"
                      target="_blank"
                    >
                      <Button ml={22} mb={8}>
                        <Text className="button-txt">Code</Text>
                      </Button>
                    </a>
                  </Box>
                </HStack>
              </ListItem>
              <Text fontSize="md" color="white" ml={45}>
                <i>12/16/2022 - 12/17/2022</i>
              </Text>
              <ListItem className="n l">
                <HStack>
                  <Text>React Website (1st Edition)</Text>
                  <Box display="flex">
                    <Box className="code-link">
                      <a
                        href="https://github.com/CozyCoderIV/otis_web"
                        target="_blank"
                      >
                        <Button ml={22} mb={8}>
                          <Text className="button-txt">Code</Text>
                        </Button>
                      </a>
                    </Box>
                    <Box className="code-link">
                      <a href="https://www.orjacksoniv.com" target="_blank">
                        <Button ml={10} mb={8}>
                          <Text className="button-txt" ml={15}>
                            Link
                          </Text>
                        </Button>
                      </a>
                    </Box>
                  </Box>
                </HStack>
              </ListItem>
              <Text fontSize="md" color="white" ml={45}>
                <i>03/01/2022 - 07/26/2022</i>
              </Text>
            </OrderedList>
          </Stack>
        </Box>

        {/* project video / card */}
        <Card className="p-content-container">
          <Box className="p-video">
            <video id="vid" src={ow1} autoPlay controls loop></video>
          </Box>
          <Stack mt={110} className="n">
            <Text fontSize={30} fontFamily="Lobster">
              Featured Project : orjacksoniv.com
            </Text>
            <Text>
              <i>My First Personal React Developed Porfolio Website</i>
            </Text>
            <Text>
              <i>(Chrome) Mobile & Macboook Responsive</i>
            </Text>
          </Stack>
        </Card>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
