"use client";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import * as actions from "@/actions";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
interface SinppentEditFormProps {
  snippent: Snippet;
}
export default function SinppentEditForm({ snippent }: SinppentEditFormProps) {
  const [code, setCode] = useState(snippent.code);
  const [title, setTitle] = useState(snippent.title);
  const [isResetTitle, setIsResetTitle] = useState(false);
  const onchangeFn = (value: string = "") => {
    setCode(value);
  };
  const editSnippetAction = actions.editSnippet.bind(
    SinppentEditForm,
    snippent.id,
    {
      code,
      title,
    }
  );

  return (
    <div>
      <div className="flex justify-between p-2 items-center">
        {isResetTitle ? (
          <Input
            className="w-56"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <>{snippent.title}</>
        )}
        <div>
          <Button
            onClick={() => {
              setIsResetTitle(true);
            }}
            color="primary"
          >
            修改标题
          </Button>
          <Button
            onClick={() => {
              setIsResetTitle(false);
              setTitle(snippent.title);
            }}
            color="danger"
          >
            取消修改
          </Button>
        </div>
      </div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippent.code}
        options={{ minimap: { enabled: false } }}
        onChange={onchangeFn}
      />
      <form action={editSnippetAction}>
        <Button type="submit" color="primary">
          确认修改
        </Button>
      </form>
    </div>
  );
}
