import { Box, Stack, Typography } from "@mui/material";
import Img from "../assets/NoMessageillustration.svg";
const Nomessage = () => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      //   border={"1px solid red"}
      bgcolor={"var(--secondary-color)"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        width={"55%"}
        // border={"1px solid red"}
        height={"55%"}
        // display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3.5}
      >
        <img src={Img} alt="noMessageScreen" />
        <Stack
          width={"100%"}
          alignItems={"center"}
          gap={1.4}
          fontFamily={"var(--secondary-font)"}
        >
          <Typography variant="h5">
            It{`\u0027`}s the beginning of a legendary sales pipeline
          </Typography>
          <Typography variant="h6" color={"var(--secondary-text)"}>
            When you have inbound E-mails
          </Typography>
          <Typography variant="h6" color={"var(--secondary-text)"}>
            you{`\u0027`}ll see them here
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Nomessage;
