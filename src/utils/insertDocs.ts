import { Editor } from "@tiptap/core";

export type DocNodeAttributes = {
  /** The URL at which this image can be served. Used as <img> `src`. */
  src: string;
  /** Alt text for the image. */
  alt?: string;
  /** The `title` attribute when we render the image element. */
  title?: string;
};

export default function insertDocs({
  url,
  editor,
}: {
  url: string;
  editor: Editor;
}): void {
  if (!editor || editor.isDestroyed) {
    return;
  }

  console.log("hitting editor link");
  editor
    .chain()
    .focus()
    .extendMarkRange("link")
    .setLink({ href: url, target: "_blank" })
    .run();
}
