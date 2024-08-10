import { Box, Stack } from "@mui/material";
// import React from 'react'
import Logo from "../assets/Logo.svg";
import As from "../assets/A.svg";
import bar_chart from "../assets/bar_chart.svg";
import email from "../assets/email.svg";
import email1 from "../assets/email1.svg";
import email2 from "../assets/email2.svg";
import frame from "../assets/Frame23.svg";
import Home from "../assets/Home_fill.svg";

const Navmenu = () => {
  const midLogos = [Home, email, email1, frame, email2, As, bar_chart];
  return (
    <Stack
      direction={"column"}
      width={"100%"}
      height={"100%"}
      bgcolor={"var(--primary-color)"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"10%"}
      >
        <img src={Logo} alt="" />
      </Box>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"80%"}
        gap={5}
        // border={"1px solid red"}
        paddingTop={4}
      >
        {midLogos.map((item, ind) => {
          return (
            <Box key={ind}>
              <img src={item} alt="navLogo" />
            </Box>
          );
        })}
      </Stack>
      <Box
        height={"10%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <div
          style={{
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffff",
            color: "var(--secondary-text)",
          }}
        >
          ID
        </div>
      </Box>
    </Stack>
  );
};

export default Navmenu;
