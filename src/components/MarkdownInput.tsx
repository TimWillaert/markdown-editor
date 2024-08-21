interface MarkdownInputProps {
  value: string;
  onChange: (value: string) => void;
}

/*
    MarkdownInput is a simple textarea element that allows users to input Markdown text. It takes two props:
    - value: the current value of the textarea
    - onChange: a function that updates the value of the textarea when the user types
*/
export default function MarkdownInput({ value, onChange }: MarkdownInputProps) {
  return (
    <textarea
      className="h-1/2 w-full resize-none rounded-lg border border-neutral-300 bg-neutral-100 p-2"
      placeholder="Type some Markdown here..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
