import React from "react";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Box>
      <Stack className="footer">
        <HStack className="f-icon-container">
          <a href="https://github.com/CozyCoderIV" target="_blank">
            <FaGithub className="foot-icon" />
          </a>
          <a href="https://www.instagram.com/o.j.daprince_iv/" target="_blank">
            <FaInstagram className="foot-icon" />
          </a>
          <a href="https://www.linkedin.com/in/otis-jackson4/" target="_blank">
            <FaLinkedin className="foot-icon" />
          </a>
        </HStack>
        <Box className="f-txt-container" display="grid" placeItems="center">
          <Text className="n" fontFamily="Lobster">
            "Inherited Will, The Destiny of Age, The Dreams of Its People.
          </Text>
          <Text className="n" fontFamily="Lobster">
            As Long As People Continue To Pursue The Meaning Of Freedom, These
            Things WIll Never Cease!"
          </Text>
          <Text color="white" fontFamily="Lobster">
            - Gol D Roger
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}

export default Footer;
