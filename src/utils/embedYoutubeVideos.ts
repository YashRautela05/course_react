import { Editor } from "@tiptap/core";

export default function embedYoutubeVideos({
  youtubeLink,
  editor,
}: {
  youtubeLink: string;
  editor: Editor;
}): void {
  if (!editor || editor.isDestroyed) {
    return;
  }

  editor.commands.setYoutubeVideo({
    src: youtubeLink,

    width: 640,
    height: 480,
  });
}
