import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Add <QueryClientProvider client={queryClient}> in app.jsx 
//Use useQuery fn to get data provide key and fn(which gets the data using axios) to it in object
//useQuery has data ,isLoading,isError,error parameters
const baseUrl = "https://jsonplaceholder.typicode.com";
const getBlogs = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/posts`);
    return data;
  } catch (error) {
    throw new Error("TestError");
  }
};

const Courses = () => {
  const {data,isLoading,isError,error} = useQuery({
    queryKey: ["BLOGS"],
    queryFn: getBlogs,
  });

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
    </div>
  );
};

export default Courses;
