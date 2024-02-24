import Youtube from "@mui/icons-material/YouTube";
import { Box, Button, TextField } from "@mui/material";
import Popover from "@mui/material/Popover";
import { useRef, useState } from "react";
import { RichTextEditorRef } from "../RichTextEditor";
import { useRichTextEditorContext } from "../context";
import embedYoutubeVideos from "../utils/embedYoutubeVideos";
import MenuButton from "./MenuButton";

export default function MenuButtonEmbedYoutubeVideos() {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const rteRef = useRef<RichTextEditorRef>(null);
  const [youtubeLink, setYoutubeLink] = useState("");
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const editor = useRichTextEditorContext()!;

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Add your save logic here
    handleClose();

    embedYoutubeVideos({ youtubeLink, editor });
  };

  return (
    <>
      <MenuButton
        tooltipLabel="Embed Youtube Videos"
        IconComponent={Youtube}
        onClick={(event) => {
          anchorRef.current = event.currentTarget as HTMLButtonElement;
          handleToggle();
        }}
      ></MenuButton>
      <Popover
        open={open}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Box
          p={2} // Add padding
          borderRadius={2} // Add border radius
          boxShadow={5} // Add box shadow
          bgcolor="white" // Set background color
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <TextField
            fullWidth
            variant="outlined" // Use outlined variant
            label="Youtube link"
            size="small" // Adjust size
            sx={{ marginY: "2" }} // Add margin-bottom
            onChange={(event) => setYoutubeLink(event.target.value)}
          />
          <Button
            sx={{ marginTop: "1rem" }}
            variant="contained"
            color="primary"
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Popover>
    </>
  );
}
