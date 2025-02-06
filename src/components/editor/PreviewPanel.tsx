interface PreviewPanelProps {
  content: string;
}

export function PreviewPanel({ content }: PreviewPanelProps) {
  return (
    <div className="bg-[#dcdcdc33] rounded-lg shadow-md w-[47%]">
      <div
        className="prose max-w-none p-4"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
