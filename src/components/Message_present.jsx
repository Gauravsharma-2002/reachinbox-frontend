import { Stack } from "@mui/material";
import Inbox from "./Inbox";
import Messagesection from "./Messagesection";

const Message_present = () => {
  return (
    <Stack
      direction={"row"}
      width={"100%"}
      height={"100%"}
      // border={"1px solid red"}
      bgcolor={"var( --secondary-color)"}
      overflow={"hidden"}
    >
      <Stack height={"100%"} width={"20%"} >
        <Inbox />
      </Stack>
      <Stack height={"100%"} width={"60%"}>
        <Messagesection/>
      </Stack>
      <Stack height={"100%"} width={"20%"}></Stack>
    </Stack>
  );
};

export default Message_present;
