import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-dark.css';

import { useStore } from '../store';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export const CodeEditor: React.FC = () => {
  const { htmlCode, setHtmlCode, cssCode, setCssCode, jsCode, setJsCode } = useStore();

  const editorStyles = {
    fontFamily: '"Fira code", "Fira Mono", monospace',
    fontSize: 14,
    minHeight: '100%',
  };

  return (
    <Card className="h-full w-full border-0 rounded-none">
      <CardContent className="p-0 h-full">
        <Tabs defaultValue="html" className="h-full flex flex-col">
          <TabsList className="grid w-full grid-cols-3 rounded-none">
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="css">CSS</TabsTrigger>
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
          </TabsList>
          <div className="flex-grow overflow-auto">
            <TabsContent value="html" className="m-0 h-full">
              <Editor
                value={htmlCode}
                onValueChange={setHtmlCode}
                highlight={(code) => highlight(code, languages.markup, 'markup')}
                padding={10}
                style={editorStyles}
              />
            </TabsContent>
            <TabsContent value="css" className="m-0 h-full">
              <Editor
                value={cssCode}
                onValueChange={setCssCode}
                highlight={(code) => highlight(code, languages.css, 'css')}
                padding={10}
                style={editorStyles}
              />
            </TabsContent>
            <TabsContent value="javascript" className="m-0 h-full">
              <Editor
                value={jsCode}
                onValueChange={setJsCode}
                highlight={(code) => highlight(code, languages.js, 'javascript')}
                padding={10}
                style={editorStyles}
              />
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};