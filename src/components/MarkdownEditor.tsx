import { useState } from "react";
import MarkdownInput from "./MarkdownInput";

export default function MarkdownEditor() {
  const [inputText, setInputText] = useState<string>("");

  return (
    <div className="flex h-full w-full flex-col bg-neutral-200 p-2">
      <MarkdownInput value={inputText} onChange={setInputText} />
    </div>
  );
}
