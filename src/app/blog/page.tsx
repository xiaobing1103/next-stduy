"use client";
import ComonLayout from "@/components/ComonLayout";
import {
  Button,
  //   Table,
  //   TableBody,
  //   TableCell,
  //   TableColumn,
  //   TableHeader,
  //   TableRow,
  //   getKeyValue,
} from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/navigation";
export default function BlogPage() {
  const router = useRouter();
  //   const rows = [
  //     {
  //       key: 1,
  //     },
  //   ];

  //   const columns = [
  //     {
  //       key: 1,
  //       label: "博客列表",
  //     },
  //     {
  //       key: 2,
  //       label: "fsdfds",
  //     },
  //     {
  //       key: 3,
  //       label: "fsdfds",
  //     },
  //     {
  //       key: 4,
  //       label: "fsdfds",
  //     },
  //     {
  //       key: 5,
  //       label: "fsdfds",
  //     },
  //   ];

  return (
    <ComonLayout>
      <div className="flex flex-col w-3/4 py-2">
        <div className="flex justify-end">
          <Button onClick={() => router.push("/blog/newBolg")}>新建博客</Button>
        </div>
        <div>
          {/* <Table aria-label="Example table with dynamic content">
            <TableHeader>
              {columns.map((column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              ))}
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.key}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(row, columnKey)}</TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table> */}
        </div>
      </div>
      {/* <Button>编辑博客</Button>  */}
    </ComonLayout>
  );
}
