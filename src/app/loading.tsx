import { Spinner } from "@nextui-org/react";
import React from "react";

export default function Loading() {
  return (
    <div className=" w-full justify-center items-center">
      <Spinner size="lg" label="Loading..." color="warning" />
    </div>
  );
}
