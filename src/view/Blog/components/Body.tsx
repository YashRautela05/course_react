import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { useState } from "react";
export default function Body() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  let arr: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 12, 23, 4];

  return (
    <>
      <Box display={"flex"} width={"100vw"} height={"100%"}>
        <Box width={"25%"} height={"100%"} display={"flex"}>
          <List
            sx={{ width: "100%" }}
            component={"nav"}
            subheader={<ListSubheader>Topics</ListSubheader>}
          >
            {arr.map((topics: any, index: number) => {
              return (
                <>
                  <ListItemButton
                    disableRipple
                    selected={selectedIndex === index}
                    onClick={(event) => setSelectedIndex(index)}
                  >
                    <ListItemText primary="Drafts" />
                  </ListItemButton>
                </>
              );
            })}
          </List>
        </Box>
        <Box
          width={"75%"}
          height={"100%"}
          color={"blue"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          2
        </Box>
      </Box>
    </>
  );
}
