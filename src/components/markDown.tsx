"use client";
import React, { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Editor } from "@monaco-editor/react";

interface TextareaClientProps {
  initialMarkdown: {
    isHotBolg: boolean;
    blogTitle: string;
    blogShowContent: string;
  };
  setformData: React.Dispatch<
    React.SetStateAction<{
      blogTitle: string;
      isHotBolg: boolean;
      blogShowContent: string;
    }>
  >;
}
const TextareaClient: React.FC<TextareaClientProps> = ({
  initialMarkdown,
  setformData,
}) => {
  const onchangeFn = (value: string = "") => {
    setformData({ ...initialMarkdown, blogShowContent: value });
  };
  return (
    <div
      className="flex py-2 px-2 box-border  w-full"
      style={{ height: "calc(100vh - 65px - 56px - 40px) " }}
    >
      <Editor
        className=" w-1/2  py-2 px-2 box-border overflow-auto"
        theme="vs-dark"
        width="50%"
        language="markdown"
        defaultValue={initialMarkdown.blogShowContent}
        options={{ minimap: { enabled: false } }}
        onChange={onchangeFn}
      />
      <Markdown
        className="flex flex-col py-2 px-2 box-border w-1/2 overflow-auto"
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        children={initialMarkdown.blogShowContent}
        components={{
          h1: ({ node, ...props }) => (
            <h1
              style={{
                borderBottom: "1px solid hsla(210,18%,87%,1)",
                paddingBottom: "0.5rem",
              }}
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              style={{
                borderBottom: "1px solid hsla(210,18%,87%,1)",
                paddingBottom: "0.4rem",
              }}
              {...props}
            />
          ),
          table: ({ node, ...props }) => (
            <table className="markdown-table" {...props} />
          ),
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                showLineNumbers={true}
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
    </div>
  );
};
export default TextareaClient;
