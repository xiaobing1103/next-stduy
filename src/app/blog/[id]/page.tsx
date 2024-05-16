import notFound from "@/app/not-found";
import React, { useState } from "react";

import TextareaClient from "@/components/markDown";
// const markdown = "# Hi, *Pluto*!";

interface ShowpageProps {
  params: {
    id: string;
  };
  searchParams: object;
}
export default async function Showblog(props: ShowpageProps) {
  await new Promise((r) => setTimeout(r, 2000));
  const initialMarkdown = `Just a link: www.nasa.gov.
  # 第一课
  ## 第二课 
  A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  This ~is not~ strikethrough, but ~~this is~~!
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  # Hi, *Pluto*!
  ### 今夜(こんや)はもう離(はな)さないでいて
  ### 帰(かえ)らないでいいよ 朝(あさ)を迎(むか)えて
  ~~~js
    console.log('It works!')
  ~~~
 
  `;
  const {
    params: { id },
  } = props;
  console.log(id);
  if (!id) {
    return notFound;
  }
  return (
    <div>
      <TextareaClient initialMarkdown={initialMarkdown} />
    </div>
  );
}
