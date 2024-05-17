"use client";
import React, { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "markdown-navbar/dist/navbar.css";
import { Editor } from "@monaco-editor/react";
interface TextareaClientProps {
  initialMarkdown: string;
}
const TextareaClient: React.FC<TextareaClientProps> = ({ initialMarkdown }) => {
  const [markdown, setMarkdown] = useState(initialMarkdown);
  const onchangeFn = (value: string = "") => {
    setMarkdown(value);
  };
  return (
    <div
      className="flex py-2 px-2 box-border "
      style={{ height: "calc(100vh - 65px) " }}
    >
      {/* <Textarea
        label="Description"
        labelPlacement="outside"
        placeholder="Enter your description"
        defaultValue={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        className="w-full"
      /> */}
      <Editor
        className=" w-1/2  py-2 px-2 box-border overflow-auto"
        theme="vs-dark"
        width="50%"
        language="markdown"
        defaultValue={markdown}
        options={{ minimap: { enabled: false } }}
        onChange={onchangeFn}
      />
      <Markdown
        className="flex flex-col py-2 px-2 box-border w-1/2 overflow-auto"
        rehypePlugins={[rehypeRaw]}
        children={markdown}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                howLineNumbers={true}
                lineNumberStyle={{
                  color: "#ddd",
                  fontSize: 10,
                }}
                language={match[1]}
                style={vscDarkPlus}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      />

      {/* <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown> */}
      {/* <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
        {markdown}
      </Markdown> */}
      {/* <Markdown>{markdown}</Markdown> */}
    </div>
  );
};
export default TextareaClient;
