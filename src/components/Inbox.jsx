import {
  Stack,
//   InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { IoReload } from "react-icons/io5";
import Message_list from "./Message_list";

const Inbox = () => {
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      direction={"column"}
      //   gap={2}
      // border={"1px solid pink"}
    >
      {/* upper Stack */}
      <Stack
        direction={"column"}
        height={"25%"}
        width={"100%"}
        // paddingBottom={1}
        // border={"1px solid red"}
        gap={2}
      >
        <Stack
          //   border={"1px solid green "}
          height={"50%"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={1}
          //   paddingBottom={2}
        >
          {" "}
          <Stack height={"100%"} direction={"column"}>
            <Stack height={"100%"} direction={"row"} alignItems={"center"}>
              {/* <InputLabel id="inbox-top" /> */}
              <label id="inbox-top">
                <Typography variant="h6" sx={{ color: "var(--heading-text)" }}>
                  All Inbox{`(s)`}
                </Typography>
              </label>

              <Select
                size="small"
                labelId="inbox-top"
                id="inbox-top"
                sx={{ height: "100%" }}
                //   value={age}
                //   label="Age"
                //   onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
            <Box>
              <Typography
                display={"flex"}
                flexDirection={"row"}
                alignItems={"end"}
                gap={1}
              >
                {`25/25  `}
                <Typography
                  variant="h6"
                  fontSize={15}
                  color={"var(--secondary-text)"}
                >
                  inboxes selected
                </Typography>{" "}
              </Typography>
            </Box>
          </Stack>
          <Box>
            <Button
              //   variant="contained"
              style={{
                backgroundColor: "var(--primary-additional-color)",
                opacity: "0.6",
                height: "1.5em",
                width: "1.5rem",
                padding: "1rem",
              }}
            >
              <IoReload />
            </Button>
          </Box>
        </Stack>
        {/* search stackj */}
        <Stack
          width={"100%"}
          height={"100%"}
          direction={"column"}
          paddingX={1}
        //   border={"1px solid orange"}
        >
          <TextField
            size="small"
            placeholder="Search"
            // color="#ffff"
            sx={{ color: "#ffff", border:"1px solid var(--primary-additional-color)" ,borderRadius:".2rem",':focus':{color:"papayawhip"}}}
          >
            lfksadjkj
          </TextField>
          <Stack
            direction={"row"}
            width={"100%"}
            height={"100%"}
            alignItems={"center"}
            // border={"1px solid green"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={2}
              width={"100%"}
              height={"100%"}
              //   sx={{ border: "1px solid red" }}
            >
              <div
                style={{
                  //   border: "1px solid pink",
                  width: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "3rem",
                  backgroundColor: "var(--primary-additional-color)",
                  color: "var(--heading-text)",
                }}
              >{`26`}</div>
              <Typography
                variant="h6"
                fontSize={14}
                fontFamily={"var(--primary-font)"}
                fontWeight={"700"}
              >
                New Replies
              </Typography>
            </Box>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"end"}
                
            >
              {/* this fro the dropdown feild */}
              <label id="newest">
                <Typography
                  variant="h6"
                  sx={{ color: "var(--secondary-text)" }}
                >{`newest`}</Typography>
              </label>

              <Select
                labelId="newest"
                id="newest"
                size="small"
                sx={{ color: "var(--primary-text)" }}
                //   value={age}
                label="newest" // change this to item value
                //   onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
          </Stack>

          {/* end of second */}
        </Stack>
      </Stack>

      {/* lower Box */}
      <Stack
        height={"75%"}
        width={"100%"}
        padding={".3rem"}
        gap={1.6}
        sx={{ overflowY: "auto" }}
        // border={"1px solid red"}
      >
        <Message_list />
        <Message_list />
        <Message_list />
        <Message_list />
        <Message_list />
        <Message_list />
        <Message_list />
        <Message_list />
        <Message_list />
        <Message_list />
        <Message_list />
        <Message_list />
        <Message_list />
        <Message_list />
        <Message_list />
        <Message_list />
        <Message_list />
        <Message_list />
        <Message_list />
        <Message_list />
      </Stack>
    </Stack>
  );
};

export default Inbox;
