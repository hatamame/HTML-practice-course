import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { CodeEditor } from './components/Editor';
import { Preview } from './components/Preview';

function App() {
  return (
    <div className="h-screen w-screen bg-background text-foreground font-sans">
      <ResizablePanelGroup direction="horizontal" className="h-full w-full">
        {/* 左ペイン: 目次 */}
        <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />

        {/* 中央ペイン: 解説 */}
        <ResizablePanel defaultSize={40} minSize={30}>
          <MainContent />
        </ResizablePanel>
        <ResizableHandle withHandle />

        {/* 右ペイン: エディタとプレビュー */}
        <ResizablePanel defaultSize={40} minSize={30}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={50} minSize={20}>
              <CodeEditor />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50} minSize={20}>
              <Preview />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;