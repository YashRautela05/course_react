import Box from "@mui/material/Box";
import Card from "./Card";

export default function Body() {
  return (
    <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          height: "100%",
          paddingTop: "2rem",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          height={"inherit"}
          alignItems={"center"}
          gap={"1rem"}
          maxWidth={"728px"}
          justifyContent={"center"}
        >
          <Card></Card>
          <Card></Card>

          <Card></Card>

          <Card></Card>
        </Box>
      </Box>
  );
}
