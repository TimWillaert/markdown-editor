import Markdown from "react-markdown";

interface MarkdownRendererProps {
  input: string;
}

/*
    MarkdownRenderer is a component that displays Markdown text as HTML, using react-markdown. 
    It takes one prop:
    - input: the Markdown text to render

    The 'prose' classes come from the Tailwind typography plugin, providing default styling for Markdown elements.
*/
export default function MarkdownRenderer({ input }: MarkdownRendererProps) {
  return (
    <div className="panel h-full w-full overflow-scroll">
      <div className="prose prose-sm">
        <Markdown>{input}</Markdown>
      </div>
    </div>
  );
}
