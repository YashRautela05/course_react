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
  name,
}: {
  url: string;
  editor: Editor;
  name: string;
}): void {
  if (!editor || editor.isDestroyed) {
    return;
  }

  console.log("hitting editor link");
  editor
    .chain()
    .focus()
    .insertContent(`<a href="${url}" target="_blank">${name}</a>`)
    .run();
}
