import SinppentEditForm from "@/components/sinppent-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";
import * as actions from "@/actions";
interface EditpageProps {
  params: {
    id: string;
  };
}

export default async function Editpage(props: EditpageProps) {
  const id = parseInt(props.params.id);
  const snippets = await db.snippet.findFirst({
    where: { id: Number(id) },
  });
  if (!snippets) {
    return notFound();
  }
  return <SinppentEditForm snippent={snippets} />;
}
