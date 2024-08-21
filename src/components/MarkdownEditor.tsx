import { useState } from "react";
import MarkdownInput from "./MarkdownInput";
import MarkdownRenderer from "./MarkdownRenderer";

export default function MarkdownEditor() {
  const [inputText, setInputText] = useState<string>("");

  return (
    <div className="flex h-full w-full flex-col gap-2 bg-neutral-200 p-2">
      <MarkdownInput value={inputText} onChange={setInputText} />
      <MarkdownRenderer input={inputText} />
    </div>
  );
}
