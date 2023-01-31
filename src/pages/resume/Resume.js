import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import digitalImg3 from "../../media/alley_bg.jpg";
import res from "../../media/resume.png";
import bt2 from "../../media/BlackTokyo2.jpg";

function Resume() {
  return (
    <Box className="resume-container">
      <img className="r-bg" src={bt2}></img>
      <Box className="resume-box">
        <img id="resume" src={res}></img>
      </Box>
    </Box>
  );
}

export default Resume;
