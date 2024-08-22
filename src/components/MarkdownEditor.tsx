import { useEffect, useState } from "react";
import MarkdownInput from "./MarkdownInput";
import MarkdownRenderer from "./MarkdownRenderer";
import useDebounce from "../hooks/useDebounce";

/*
    MarkdownEditor allows users to input Markdown text on the left and see the rendered output on the right.
    It uses the MarkdownInput and MarkdownRenderer components to accomplish this.
*/
export default function MarkdownEditor() {
  const [inputText, setInputText] = useState<string>(
    localStorage.getItem("markdown") || "",
  );
  const debouncedInput = useDebounce(inputText, 500);

  /* Save the Markdown text to local storage, using a debounce to avoid excessive writes */
  useEffect(() => {
    localStorage.setItem("markdown", debouncedInput);
  }, [debouncedInput]);

  return (
    <div className="flex h-full w-full flex-col gap-2 bg-neutral-100 p-2 md:flex-row md:p-6 lg:p-10 xl:p-32">
      <div className="panel flex-1">
        <MarkdownInput value={inputText} onChange={setInputText} />
      </div>
      <div className="panel flex-1 overflow-auto">
        <MarkdownRenderer input={inputText} />
      </div>
    </div>
  );
}
