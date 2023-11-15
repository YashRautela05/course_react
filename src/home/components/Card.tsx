import CssBaseline from "@mui/material/CssBaseline";

import { Avatar, Box, IconButton } from "@mui/material";
import BookMarkSvg from "../../assets/svg/bookmark.svg";
import DiscussSvg from "../../assets/svg/discuss.svg";
export default function Card() {
  return (
    <>
      <CssBaseline />
      <Box
        width={"100%"}
        height={"15.813rem"}
        padding={"1.5rem"}
        paddingBottom={"1rem"}
        borderRadius={"1rem"}
        justifyContent={"space-between"}
        borderColor={"rgba(226, 232, 240, 1)"}
        sx={{
          borderStyle: "solid",
          borderWidth: "1px",
          "&:hover": {
            borderColor: "rgb(203 213 225/1)",
          },
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <Box
          height={"2.5rem"}
          width={"100%"}
          display={"flex"}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Avatar
            sx={{
              height: "2.5rem",
              width: "2.5rem",
            }}
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1699412724230/nOWibRcOb.png?w=124&h=124&fit=crop&crop=faces&auto=compress,format&format=webp"
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              marginLeft: "1rem",
              marginRight: "0.2rem",
            }}
          >
            <Box
              sx={{
                fontWeight: "medium",
                fontSize: "14px",
                color: "rgb(51 65 85/1)",
              }}
            >
              Aditya
            </Box>
            <Box
              sx={{
                fontWeight: "regular",
                fontSize: "14px",
                color: "rgb(100 116 139/1)",
              }}
            >
              adisalu15@gmail.com
            </Box>
          </Box>
          <Box fontWeight={400} alignSelf={"end"}>
            .
          </Box>
          <Box
            marginX={"0.2rem"}
            fontSize={"14px"}
            fontWeight={"regular"}
            alignSelf={"end"}
            justifySelf={"center"}
            color="rgb(100 116 139/1)"
          >
            Nov 8, 2023
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"0.3rem"}>
          <Box fontWeight={"bold"} fontSize={"1.25rem"}>
            Stop using boolean states
          </Box>
          <Box
            overflow={"hidden"}
            display={"-webkit-box"}
            sx={{
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              wordBreak: "normal",
              overflowWrap: "anywhere",
              color: "rgb(100 116 139/1)",
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: "1.5rem",
              cursor: "pointer",
            }}
          >
            Hello peeps 👋, It's been a while on this platform. The story of my
            life 🫠 Anyway, I am back again to bring us something exciting I have
            been learning about mobile app development. Earlier this year, I
            took an interest in learning mobile, which was ...
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <IconButton sx={{ display: "flex", gap: "0.5rem" }}>
            <img src={DiscussSvg}></img>
          </IconButton>
          <IconButton>
            <img src={BookMarkSvg}></img>
          </IconButton>
        </Box>
      </Box>
    </>
  );
}
