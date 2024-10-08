interface MarkdownInputProps {
  value: string;
  onChange: (input: string) => void;
}

/*
    MarkdownInput is a simple textarea element that allows users to input Markdown text. It takes two props:
    - value: the current value of the textarea
    - onChange: a function that updates the value of the textarea when the user types
*/
export default function MarkdownInput({ value, onChange }: MarkdownInputProps) {
  return (
    <textarea
      className="h-full w-full resize-none"
      placeholder="Type some Markdown here..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
