import { Stack, Typography, Button, Select, InputLabel } from "@mui/material";

const Header = () => {
  return (
    <Stack
      width={"100%"}
      height={"11%"}
      //   border={"1px solid red"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={1.2}
      bgcolor={"var(--primary-additional-color)"}
    >
      <Typography>Onebox</Typography>
      <Stack
        direction={"row"}
        width={"25%"}
        // border={"1px solid red"}
        justifyContent={"end"}
        alignItems={"center"}
        paddingRight={"2.5rem"}
        gap={1.5}
      >
        <Button>Theme</Button>
        <InputLabel
          id="navSelect"
          sx={{ color: "var(--primary-text)" }}
        >{`tim's workspace`}</InputLabel>
        <Select
          labelId="navSelect"
          id="select"
          sx={{ border: "none" }}
          //   value={age}
          //   label="Age"
          //   onChange={handleChange}
        ></Select>
      </Stack>
    </Stack>
  );
};

export default Header;
