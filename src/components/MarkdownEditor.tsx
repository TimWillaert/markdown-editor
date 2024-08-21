import { useState } from "react";
import MarkdownInput from "./MarkdownInput";
import MarkdownRenderer from "./MarkdownRenderer";

export default function MarkdownEditor() {
  const [inputText, setInputText] = useState<string>("");

  return (
    <div className="flex h-full w-full flex-col gap-2 bg-neutral-100 p-2 md:flex-row md:p-6 lg:p-10 xl:p-32">
      <MarkdownInput value={inputText} onChange={setInputText} />
      <MarkdownRenderer input={inputText} />
    </div>
  );
}
