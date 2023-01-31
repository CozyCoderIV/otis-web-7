import React from "react";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import digitalImg3 from "../../media/alley_bg.jpg";
import OJ from "../../media/BWOJ.png";
import sg from "../../media/LSU_StudentGov.jpg";
import {
  DiChrome,
  DiGithubBadge,
  DiJava,
  DiJsBadge,
  DiMysql,
  DiReact,
  DiJavascript,
} from "react-icons/di";
import Footer from "../../components/Footer";

function About() {
  return (
    <Box className="about_container">
      <img className="bg-img" src={digitalImg3}></img>

      <Grid
        className="ab-container-1"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem colStart={1} colEnd={3} colSpan={3} className="ab-grid-item">
          <Text className="n" fontFamily="Lobster" fontSize={40}>
            <b>Software Skills</b>
          </Text>
          <Text color="white">
            <i>Dev && Communication Tools I've Adapted To Using...</i>
          </Text>
          <Box id="list_box">
            <UnorderedList className="n" ml={50} mt={10} fontFamily="Lobster">
              <ListItem>
                <Text className="n" fontSize={23}>
                  MySQL
                </Text>
              </ListItem>
              <ListItem>
                <Text className="n" fontSize={23}>
                  GitHub
                </Text>
              </ListItem>
              <ListItem>
                <Text className="n" fontSize={23}>
                  Git
                </Text>
              </ListItem>
            </UnorderedList>
            <UnorderedList className="n" ml={50} mt={10} fontFamily="Lobster">
              <ListItem>
                <Text className="n" fontSize={23}>
                  Slack
                </Text>
              </ListItem>
              <ListItem>
                <Text className="n" fontSize={23}>
                  Discord
                </Text>
              </ListItem>
              <ListItem>
                <Text className="n" fontSize={23}>
                  Agile / Scrum
                </Text>
              </ListItem>
            </UnorderedList>
            <HStack className="software_grid">
              <DiChrome size={60} className="n logo" />
              <DiGithubBadge size={60} className="n logo" />
              <DiMysql size={60} className="n logo" />
            </HStack>
          </Box>
        </GridItem>
        {/* Dev Skills */}
        <GridItem colStart={1} colEnd={3} colSpan={3} className="ab-grid-item">
          <Text className="n" fontFamily="Lobster" fontSize={40}>
            <b>Developer Skills</b>
          </Text>
          <Text color="white">
            <i>Coding Langauges I've Utilized The Most...</i>
          </Text>

          <Box id="list_box">
            <UnorderedList className="n" ml={50} mt={10} fontFamily="Lobster">
              <ListItem>
                <Text className="n" fontSize={23}>
                  Javascript
                </Text>
              </ListItem>
              <ListItem>
                <Text className="n" fontSize={23}>
                  HTML
                </Text>
              </ListItem>
              <ListItem>
                <Text className="n" fontSize={23}>
                  CSS
                </Text>
              </ListItem>
            </UnorderedList>

            <UnorderedList className="n" ml={50} mt={10} fontFamily="Lobster">
              <ListItem>
                <Text className="n" fontSize={23}>
                  React.js
                </Text>
              </ListItem>
              <ListItem>
                <Text className="n" fontSize={23}>
                  Java
                </Text>
              </ListItem>
              <ListItem>
                <Text className="n" fontSize={23}>
                  C
                </Text>
              </ListItem>
            </UnorderedList>
            <HStack className="software_grid">
              <DiReact size={60} className="n logo" />
              <DiJava size={60} className="n logo" />
              <DiJavascript size={60} className="n logo" />
            </HStack>
          </Box>
        </GridItem>
        <GridItem
          id="ai_image_container"
          colStart={3}
          rowStart={1}
          rowSpan={2}
          colSpan={2}
        >
          <img id="ai_art" src={OJ}></img>
        </GridItem>
      </Grid>

      {/* Experience */}
      <Box className="xp_container">
        <Box>
          <Text className="n" fontFamily="Lobster" fontSize={40}>
            Experience
          </Text>
          <Text color="white">
            <i>Getting Out There In The World...</i>
          </Text>
        </Box>
        {/*  */}
        <Box>
          <Box id="list_box">
            <UnorderedList className="n" ml={50} mt={10} fontFamily="Lobster">
              <ListItem>
                <Text className="n" fontFamily="Lobster" fontSize={40}>
                  Lockheed Martin (June 2022 - August 2022)
                </Text>
              </ListItem>
              <ListItem>
                <Text>LSU IT Service/Print Desk (January 2022 - Current)</Text>
              </ListItem>
              <ListItem>
                <Text>
                  LSU Residential Desk Assistant (January 2021 - Fall 2022)
                </Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Box>

      {/* Clubs Asscociations */}
      <Box className="club_container">
        <Box className="club_text_container">
          <Box>
            <Text className="n" fontFamily="Lobster" fontSize={40}>
              Organizations
            </Text>
            <Text color="white">
              <i>Meeting New People And Making A Difference...</i>
            </Text>
          </Box>
          {/* Clubs List*/}
          <Box>
            <Box id="list_box">
              <UnorderedList className="n" ml={50} mt={10} fontFamily="Lobster">
                <ListItem>
                  <Text className="n" fontFamily="Lobster" fontSize={25}>
                    National Society of Black Engineers(N.C.B.E)
                  </Text>
                  <Text className="n" color="white">
                    <i>Spring 2023 - Current</i>
                  </Text>
                </ListItem>
                <ListItem>
                  <Text className="n" fontFamily="Lobster" fontSize={20}>
                    LSU Freshman Student Government
                  </Text>
                  <Text className="n" color="white">
                    <i>Fall 2020 - Spring 2021</i>
                  </Text>
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
        {/*  */}
        <img className="club_image" src={sg}></img>
        {/* <Image src={sg}/> */}
      </Box>
      <Box id="ab-foot-box">
        <Footer />
      </Box>
    </Box>
  );
}

export default About;
