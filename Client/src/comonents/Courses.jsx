import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createBlogs, deleteBlogs, getBlogs } from "./Services/Blogs";
// Add <QueryClientProvider client={queryClient}> in app.jsx 
//Use useQuery fn to get data provide key and fn(which gets the data using axios) to it in object
//useQuery has data ,isLoading,isError,error parameters
const Courses = () => {
  //GET 
  const {data,isLoading,isError,error} = useQuery({
    queryKey: ["BLOGS"],
    queryFn: getBlogs,
  });
//POST
  const cache=useQueryClient();
  const createMutation=useMutation({
    mutationKey:["CREATE"],
    mutationFn:createBlogs,
    onSuccess:()=>{console.log("Success")
      cache.invalidateQueries({queryKey:["BLOGS"]})
    },
    onError:()=>console.log("Error in post call")
  })
  const deleteMutation=useMutation({
    mutationKey:["DELETE"],
    mutationFn:deleteBlogs,
    onSuccess:()=>{console.log("Success")
      cache.invalidateQueries({queryKey:["BLOGS"]})
    },
    onError:()=>console.log("Error in delete call")
  })


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div>

      <h1>Courses</h1>
      <ul>
        {data.map((blog) => (
          <li key={blog.id}>
            {blog.id}::{blog.body}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={()=>{createMutation.mutate({
        "userId": 101,
        "id": 101,
        "title": "excepturi optio reprehenderit",
        "body": "quia et"
      })}}>Submit</button>
            <button className="m-2 btn btn-secondary" onClick={()=>deleteMutation.mutate(1)}>Delete</button>
    </div>
  );
};

export default Courses;
