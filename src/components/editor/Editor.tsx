import { useState } from "react";

import { marked } from "marked";
import DOMPurify from "dompurify";

import { TextPanel } from "./TextPanel";
import { PreviewPanel } from "./PreviewPanel";

export function Editor() {
  const [text, setText] = useState("");
  const [htmlContent, setHtmlContent] = useState("");

  const handleTextChange = (newText: string) => {
    setText(newText);

    const html = marked(newText);

    const sanitizedHtml = DOMPurify.sanitize(html as string);

    setHtmlContent(sanitizedHtml as string);
  };

  return (
    <main className="w-full h-[calc(100vh-90px)] py-6">
      <div className="h-full w-full flex justify-around">
        <TextPanel onTextChange={handleTextChange}></TextPanel>
        <PreviewPanel content={htmlContent}></PreviewPanel>
      </div>
    </main>
  );
}
