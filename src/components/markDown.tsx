"use client";
import React, { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Textarea } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
interface TextareaClientProps {
  initialMarkdown: string;
}
const TextareaClient: React.FC<TextareaClientProps> = ({ initialMarkdown }) => {
  const a = `Just a link: www.nasa.gov.
  # 第一课
  ## 第二课 

  # Hi, *Pluto*!
  ### 今夜(こんや)はもう離(はな)さないでいて
  ### 帰(かえ)らないでいいよ 朝(あさ)を迎(むか)えて
  `;
  const [markdown, setMarkdown] = useState(initialMarkdown);

  return (
    <div>
      <Textarea
        label="Description"
        labelPlacement="outside"
        placeholder="Enter your description"
        defaultValue={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        className="w-full"
      />
      <Markdown
        rehypePlugins={[rehypeRaw]}
        // eslint-disable-next-line react/no-children-prop
        children={markdown}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                // eslint-disable-next-line react/no-children-prop
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={vscDarkPlus}
              />
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
