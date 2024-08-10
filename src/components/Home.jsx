// import React from "react";
import { Stack, Box } from "@mui/material";

import Navmenu from "./Navmenu";
import Header from "./Header";
import Body from "./Body";

const Home = () => {
  return (
    <Stack
      direction={"row"}
      width={"100vw"}
      height={"100vh"}
      // border={"1px solid red"}
    >
      <Box
        width={"6%"}
        // border={"1px solid red"}
        // padding={".2rem"}
        height={"100%"}
      >
        <Navmenu />
      </Box>
      <Stack width={"100%"} height={"100%"} direction={"column"}>
        <Header />
        <Body/>
      </Stack>
    </Stack>
  );
};

export default Home;
