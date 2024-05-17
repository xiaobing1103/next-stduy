import { Spinner } from "@nextui-org/react";
import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <Spinner size="lg" label="加载页面中" color="warning" />
    </div>
  );
}
