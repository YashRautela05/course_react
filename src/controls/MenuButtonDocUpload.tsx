import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Editor } from "@tiptap/core";
import { useRef } from "react";
import type { SetRequired } from "type-fest";
import { v4 as uuid } from "uuid";
import { useRichTextEditorContext } from "../context";
import { useUploadImagesMutation } from "../state/api/uploadFileApiSlice";
import insertDocs from "../utils/insertDocs";
import MenuButton, { type MenuButtonProps } from "./MenuButton";

export type MenuButtonAddPdfProps = SetRequired<
  Partial<MenuButtonProps>,
  "onClick"
>;

export default function MenuButtonAddPdf({ ...props }) {
  const [uploadImages, {}] = useUploadImagesMutation();
  async function handlePdfUploadAsync(files: File[], editor: Editor) {
    files.map(async (file: File) => {
      const unique_id = uuid();
      const modifiedFile = new File([file], unique_id, { type: file.type });

      await uploadImages(modifiedFile)
        .unwrap()
        .then((fullfilled) => {});

      insertDocs({
        url: `http://localhost:8080/api/v1/files/pdf/get/${unique_id}`,
        editor: editor,
        name: file.name,
      });
    });
  }

  const editor = useRichTextEditorContext();
  const fileInput = useRef<HTMLInputElement | null>(null);

  const handlePdfUpload = async (files: FileList) => {
    if (!editor || editor.isDestroyed || files.length === 0) {
      return;
    }

    // Your logic for handling PDF upload goes here
    // This could include making an API request to upload the PDF and getting a URL

    // For a demo, let's assume a function called handlePdfUploadAsync that returns PDF URLs
    const pdfUrls = await handlePdfUploadAsync(Array.from(files), editor);

    // Now, you can insert the PDF URLs into the editor
  };

  return (
    <>
      <MenuButton
        tooltipLabel="Insert PDF"
        IconComponent={PictureAsPdfIcon}
        disabled={!editor?.isEditable}
        onClick={() => fileInput.current?.click()}
        // Directly specify onClick here
      />
      <input
        ref={fileInput}
        type="file"
        accept=".pdf"
        onChange={async (event) => {
          if (event.target.files) {
            await handlePdfUpload(event.target.files);
          }
        }}
        style={{ display: "none" }}
      />
    </>
  );
}
