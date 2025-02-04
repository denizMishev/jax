import { useRef, useEffect } from "react";

interface TextPanelProps {
  onTextChange: (text: string) => void;
  initialText?: string;
}

export function TextPanel({ onTextChange, initialText = "" }: TextPanelProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.value = initialText;
    }
  }, [initialText]);

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const newText = e.currentTarget.value;
    onTextChange(newText);
  };

  return (
    <div className="bg-[#dcdcdc1a] rounded-lg shadow-md w-[47%]">
      <textarea
        ref={textareaRef}
        className="w-full h-full p-4 font-mono text-accent-100 text-base focus:outline-none resize-none"
        onInput={handleInput}
        placeholder="Type here.."
      />
    </div>
  );
}
