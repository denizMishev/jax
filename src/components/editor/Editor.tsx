import { TextPanel } from "./TextPanel";
import { PreviewPanel } from "./PreviewPanel";

export function Editor() {
  return (
    <main className="w-full h-[calc(100vh-90px)] py-6">
      <div className="h-full w-full flex justify-around">
        <TextPanel></TextPanel>
        <PreviewPanel></PreviewPanel>
      </div>
    </main>
  );
}
