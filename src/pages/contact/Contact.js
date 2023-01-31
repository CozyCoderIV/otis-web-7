import React from "react";
import {
  Box,
  Grid,
  Text,
  Stack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import digitalImg3 from "../../media/alley_bg.jpg";
import lsug from "../../media/Lsu-grey.jpg";
import bt from "../../media/BlackTokyo.jpg";

function Contact() {
  return (
    <Box className="contact-container">
      <img className="c-bg-img" src={bt}></img>
      <Box className="contact-a-container">
        <Box className="contact-text-box">
          <Text className="n" fontSize={40} fontFamily="Lobster">
            Contacts
          </Text>
          <Text color="white">
            <i>Let's Keep In Touch... Maybe...</i>
          </Text>

          <UnorderedList className="n contact-list" fontFamily="Lobster">
            <ListItem>
              <Text>LSU Email : ojacks7@lsu.edu</Text>
            </ListItem>
            <ListItem>
              <Text>
                Art / Content Creation Email : spiritedhokage@gmail.com
              </Text>
            </ListItem>
            <ListItem>
              <Text>Personal Email : o.jacksoniv@gmail.com</Text>
            </ListItem>
            <ListItem>
              <Text>Personal Cell : 817 - 308 - 1242</Text>
            </ListItem>
          </UnorderedList>
        </Box>
        <img id="contact-img" src={lsug}></img>
      </Box>
    </Box>
  );
}

export default Contact;
