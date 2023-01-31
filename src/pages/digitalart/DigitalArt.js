import React from "react";
import {
  Box,
  Grid,
  Heading,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  Image,
  Flex,
} from "@chakra-ui/react";
import digitalImg3 from "../../media/alley_bg.jpg";
import origin from "../../media/Origin.JPG";
import shapes from "../../media/video/Shapes-F.mov";
import soulless from "../../media/SoullessPic.jpg";
import soullessv from "../../media/video/Soulless-v1-g.mov";
import s0 from "../../media/photos/Sketch20.jpg";
import s1 from "../../media/photos/Sketch21.jpg";
import s2 from "../../media/photos/Sketch22.jpg";
import s3 from "../../media/photos/Sketch23.jpg";
import s4 from "../../media/photos/Sketch24.jpg";
import s5 from "../../media/photos/Sketch25.jpg";
import s6 from "../../media/photos/Sketch26.jpg";
import s7 from "../../media/photos/Sketch27.jpg";
import atmy from "../../media/photos/Anatomy.jpg";
import dice from "../../media/photos/Dice.jpg";
import planet from "../../media/photos/Planetsketch.jpg";
import pyramid from "../../media/photos/Pyramid3.jpg";
import spheres from "../../media/photos/Spheres.jpg";
import Footer from "../../components/Footer";

function DigitalArt() {
  return (
    <Box className="digitalart-container">
      <img className="abg-img" src={digitalImg3}></img>
      <Box id="art-landing">
        <video id="art-vid1" src={shapes} autoPlay muted controls loop></video>
      </Box>
      <Stack className="n da-content-container">
        <Box id="art-journey-container">
          <Stack id="art-journey-txt-container">
            <Heading fontFamily="Lobster" fontSize={40}>
              My Art Journey
            </Heading>
            <Text>
              <i>Road To Inspire The World One Artist At A Time...</i>
            </Text>
            <Box>
              <Text className="n" fontFamily="Lobster" fontSize={20}>
                {" "}
                I See Art Literally Everywhere Around Me.
              </Text>
              <Text className="n">
                <i>
                  Art has always been a positive outlet for me and the figments
                  of my creative imagination. Looking back on my childhood
                  years, I've always found my way to a set of pencils, pens, and
                  a blank sheet of copy paper since the age of 3. My parents
                  never had their hands full with me at home. I would always be
                  in my creative zone at the kitchen table drawing Marvel
                  superheroes and the legendary Z fighters from Dragon Ball Z.
                </i>
              </Text>
              <Text className="n" fontFamily="Lobster" fontSize={20}>
                I Was Born to Be An Artist
              </Text>
              <Text>
                <i>
                  The funny thing about my journey is that pursuing Art
                  professionally never crossed my mind until my Junior Year in
                  High School. I was always the kid everyone asked to draw
                  something for them throughout my grade school and middle
                  school years. At that point in time, I was known as the art
                  kid. After taking an Art II class during my highschool
                  sophomore spring semester, I saw I was skilled enough to gain
                  the respect amongst the other students who took art seriously.
                  That was all the fire I needed to fully embrace my artistic
                  talent that year in 2018.
                </i>
              </Text>
            </Box>
          </Stack>
          <Box id="art-journey-vid-container">
            <img id="art-journey-vid" src={origin}></img>
          </Box>
        </Box>

        <Box id="soulless-container">
          <Box>
            <img id="soulless" src={soulless}></img>
          </Box>
          <Stack id="soulless-txt-container" alignItems="end">
            <Heading fontFamily="Lobster" fontSize={40}>
              {" "}
              SoullessLime884
            </Heading>
            <Text>
              <i>From A Hobby to A Passion...</i>
            </Text>
            <Text className="n" fontFamily="Lobster" fontSize={20}>
              The Artistic Persona
            </Text>
            <Text color="white">
              <i>
                Some people call me Soulless, a few call me Soullesslime, and my
                Xbox One bros back home in Texas call me SoullessLime884.
                Preferably Soulless, I am the full embodied artistic
                personification of Otis Jackson IV. Introspection and Creativity
                are my bread and butter which get the gears turnin. Also for
                further notice, do expect me to leave a positive mark on the art
                side of Youtube coming very soon. Think of me as the tailed
                beast to the Jinchiriki Otis that bears its fangs whenever
                called upon or released from within.
              </i>
            </Text>
          </Stack>
        </Box>

        <Box id="da-skills-container">
          <Stack id="da-skills-txt-container">
            <Heading fontFamily="Lobster" fontSize={40}>
              Digital Art Skills
            </Heading>
            <Text className="n">
              <i>Just Getting Started...</i>
            </Text>
            <Box display="flex">
              <UnorderedList ml={50} className="n" fontFamily="Lobster">
                <ListItem>
                  <Text fontSize={25}>
                    Skecthable <i>(2019 - 2021)</i>
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize={25}>
                    Procreate <i>(2022 - Current)</i>
                  </Text>
                </ListItem>
              </UnorderedList>
            </Box>
          </Stack>
          <Box>
            <video id="art-vid2" src={soullessv} autoPlay muted loop></video>
          </Box>
          <Box></Box>
        </Box>

        <Box id="sketchbook-container">
          <Stack>
            <Heading
              fontFamily="Lobster"
              fontSize={40}
              id="sketchbook-txt-container"
            >
              Sketchbook Highlights (2022-2023)
            </Heading>
            <div className="sketch-list">
              <img src={atmy} className="sketch"></img>
              <img src={spheres} className="sketch"></img>
              <img src={dice} className="sketch"></img>
              <img src={planet} className="sketch"></img>
              <img src={pyramid} className="sketch"></img>
              <img src={s0} className="sketch"></img>
              <img src={s1} className="sketch"></img>
              <img src={s2} className="sketch"></img>
              <img src={s3} className="sketch"></img>
              <img src={s4} className="sketch"></img>
              <img src={s5} className="sketch"></img>
              <img src={s6} className="sketch"></img>
              <img src={s7} className="sketch"></img>
            </div>
          </Stack>
        </Box>
      </Stack>
      <Box id="da-foot-box">
        <Footer />
      </Box>
    </Box>
  );
}

export default DigitalArt;
