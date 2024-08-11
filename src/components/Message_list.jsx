import { Box, Stack, Typography } from "@mui/material";
import { FaTelegramPlane } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";

const Message_list = () => {
  const data = [
    {
      email: "Dhebla@gmail.com",
      context: "abrakadabra",
      tag: ["intrested", "campaign name"],
    },
    {
      email: "2140108@sliet.ac.in",
      context: "in this sunshine you will die",
      tag: ["check", "inspect", "dont"],
    },
    {
      email: "2140151@sliet.ac.in",
      context: "huppi huppi",
      tag: ["sunshine", "lashkar", "talibani"],
    },
    { email: "2140109", context: "ye kya hai", tag: ["dont", "you"] },
  ];
  return (
    <>
      <Stack
        width={"100%"}
        height={"18%"}
        //   border={"1px solid red"}
        fontFamily={"var(--primary-font)"}
        direction={"row"}
        gap={1}
        
      >
        <Box
          width={10}
          display={"flex"}
          justifyContent={"center"}
          paddingTop={0.7}
        >
          <FaCircleDot />
        </Box>{" "}
        {/* this should change height based on active status*/}
        <Stack width={"100%"} height={"100%"} padding={.5}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h5" fontSize={18}>
              {data[0].email}
            </Typography>
            <Typography
              variant="h6"
              color={"var(--secondary-text)"}
              fontSize={11}
            >
              tim e
            </Typography>
          </Box>
          <Typography
            variant="h6"
            fontSize={15}
            fontFamily={"var(--secondary-font)"}
            color={"var(--secondary-text)"}
          >
            {data[0].context}
          </Typography>
          <Stack
            direction={"row"}
            // width={"90%"}
            gap={1}
            fontSize={".6rem"}
            paddingTop={1.6}
          >
            {/* this can be optimised by using map thing  */}
            <Box
              //   width={"100%"}
              height={"75%"}
              // width={"100%"}
              // border={"1px solid red"}
              paddingX={0.9}
              borderRadius={"4rem"}
              // width={"7rem"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
              color={"#34e543"}
              bgcolor={"var(--primary-additional-color)"}
            >
              <FaCircleDot />

              {data[0].tag[0]}
            </Box>
            <Box
              //   width={"100%"}
              height={"75%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              // border={"1px solid red"}
              bgcolor={"var(--primary-additional-color)"}
              borderRadius={"4rem"}
              padding={0.9}
              gap={1}
            >
              <FaTelegramPlane /> {data[0].tag[1]}
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <hr
        style={{
          width: "85%",
          border:"1px solid var(--primary-additional-color)",
          // color: "var(--primary-additional-color)",
          marginLeft: "1rem",
        }}
      />
    </>
  );
};

export default Message_list;
