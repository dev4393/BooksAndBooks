import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPagination } from "./Services/Blogs";

const Contact = () => {
  // State for the current page
  const [page, setPage] = useState(1);
  const limit = 8; // Number of items per page

  // Fetch data with react-query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["PAGINATION", page],
    queryFn: () => getPagination({ page, limit }),
    keepPreviousData: true, // Keeps previous data while fetching new data
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  // Console logging only when data is available
  if (data) {
    console.log(data);
  }

  return (
    <div>
      <ul className="flex flex-wrap gap-4 p-10 mb-10 border ">
        {data.data.map((blog) => (
          <li className="inline h-40 p-2 border rounded-lg w-80 bg-slate-500 " key={blog.id}>
           <h2>ID:{blog.id}</h2>
           <h2> BODY: {blog.body} </h2>
           <h2> TITLE:{blog.title}</h2>
          </li>
        ))}
      </ul>
      
      <div className="flex justify-between">
        <button
          className="p-2 border rounded btn btn-secondary"
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          className="px-4 py-2 mr-10 border rounded btn btn-secondary"
          onClick={() => setPage((old) => (old < data.pagination.totalPages ? old + 1 : old))}
          disabled={page === data.pagination.totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Contact;
