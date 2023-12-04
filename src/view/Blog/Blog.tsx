import { Box, CssBaseline } from "@mui/material";
import Body from "./components/Body";
import Header from "./components/Header";

export default function Blog() {
  return (
    <>
      <Box
        flexDirection={"column"}
        display={"flex"}
        width={"100vw"}
        height={"100vh"}
      >
        <CssBaseline></CssBaseline>
        <Header></Header>
        <Body></Body>
      </Box>
    </>
  );
}
