import  { useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import { getBlogs, deleteBlogs } from "./Services/Blogs";

// Create a column helper outside the component
const columnHelper = createColumnHelper();

const Table = () => {
  // Fetch blogs
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["BLOGS"],
    queryFn: getBlogs,
  });

  const cache = useQueryClient();

  // Delete mutation
  const deleteMutation = useMutation({
    mutationKey: ["DELETE"],
    mutationFn: deleteBlogs,
    onSuccess: () => {
      console.log("Success");
      cache.invalidateQueries({ queryKey: ["BLOGS"] });
    },
    onError: () => console.log("Error in delete call"),
  });

  // Define columns
  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: "ID",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("body", {
        header: "Body",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("title", {
        header: "Title",
        cell: (info) => info.getValue(),
      }),
      columnHelper.display({
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (

          <button
            className="text-white btn btn-error"
            onClick={() => deleteMutation.mutate(row.original.id)}
          >
            Delete
          </button>
        ),
      }),
    ],
    [deleteMutation]
  );

  const dataMemo = useMemo(() => data || [], [data]);

  const table = useReactTable({
    data: dataMemo,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="p-10 mb-10 border">
      <table className="w-full border-collapse ">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-2 text-left border-r bg-[#7e7d7d]">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2 border-r">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
