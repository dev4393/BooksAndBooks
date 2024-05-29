import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createBlogs,
  deleteBlogs,
  getBlogs,
  updateBlogs,
} from "./Services/Blogs";
import { useState } from "react";

// Add <QueryClientProvider client={queryClient}> in app.jsx
//Use useQuery fn to get data provide key and fn(which gets the data using axios) to it in object
//useQuery has data ,isLoading,isError,error parameters
const Courses = () => {
  
  const [inputId, setInputId] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [inputId1, setInputId1] = useState("");
  const [inputTitle1, setInputTitle1] = useState("");
  const [inputBody1, setInputBody1] = useState("");
  //GET
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["BLOGS"],
    queryFn: getBlogs,
  });
  //POST
  const cache = useQueryClient();
  const createMutation = useMutation({
    mutationKey: ["CREATE"],
    mutationFn: createBlogs,
    onSuccess: () => {
      console.log("Success");
      cache.invalidateQueries({ queryKey: ["BLOGS"] });
    },
    onError: () => console.log("Error in post call"),
  });
  //DELETE
  const deleteMutation = useMutation({
    mutationKey: ["DELETE"],
    mutationFn: deleteBlogs,
    onSuccess: () => {
      console.log("Success");
      cache.invalidateQueries({ queryKey: ["BLOGS"] });
    },
    onError: () => console.log("Error in delete call"),
  });
  //UPDATE
  const updateMutation = useMutation({
    mutationKey: ["UPDATE"],
    mutationFn: updateBlogs,
    onSuccess: () => {
      console.log("Success");
      cache.invalidateQueries({ queryKey: ["BLOGS"] });
    },
    onError: () => console.log("Error in update call"),
  });
 

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div>
      <ul className="flex flex-wrap gap-4 p-10 mb-10 border ">
        {data.map((blog) => (
          <li className="inline p-2 border rounded-lg w-80" key={blog.id}>
            {blog.id}:{blog.body}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-3 gap-2 ">
        <div className="flex flex-col gap-2 border">
          <input
            type="text"
            placeholder="Type here"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            className="w-full max-w-xs input input-bordered input-primary"
          />
          <input
            type="text"
            placeholder="Type here"
            value={inputBody}
            onChange={(e) => setInputBody(e.target.value)}
            className="w-full max-w-xs input input-bordered input-primary"
          />

          <button
            className="w-20 btn btn-primary "
            onClick={() => {
              createMutation.mutate({
                title: inputTitle,
                body: inputBody,
              });
            }}
          >
            Add
          </button>
        </div>
        <div className="flex flex-col gap-2 border">
          <input
            type="text"
            placeholder="Type here"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            className="w-full max-w-xs input input-bordered input-primary"
          />
          <button
            className="w-20 ml-2 btn btn-secondary"
            onClick={() => deleteMutation.mutate(inputId)}
          >
            Delete
          </button>
        </div>
        <div className="flex flex-col gap-2 border">
        <input
            type="text"
            placeholder="Type here"
            value={inputId1}
            onChange={(e) => setInputId1(e.target.value)}
            className="w-full max-w-xs input input-bordered input-primary"
          />
        <input
            type="text"
            placeholder="Type here"
            value={inputTitle1}
            onChange={(e) => setInputTitle1(e.target.value)}
            className="w-full max-w-xs input input-bordered input-primary"
          />
          <input
            type="text"
            placeholder="Type here"
            value={inputBody1}
            onChange={(e) => setInputBody1(e.target.value)}
            className="w-full max-w-xs input input-bordered input-primary"
          />
          <button
            className="w-20 btn btn-primary"
            onClick={() => {
              updateMutation.mutate({
                id:inputId1,
                title: inputTitle1,
                body: inputBody1,
              });
            }}
          >
            Update
          </button>
        </div>
      </div>

      <br />
    </div>
  );
};

export default Courses;
