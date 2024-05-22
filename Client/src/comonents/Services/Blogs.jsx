import { Axios } from "./Axios";
export const  getBlogs = async () => {
  try {
    const { data } = await Axios.get(`/posts`);
    return data;
  } catch (error) {
    throw new Error("Error While getting blogs!!!");
  }
};
export const  createBlogs = async (form) => {
    try {
      const { data } = await Axios.post(`/posts`,form);
      return data;
    } catch (error) {
      throw new Error("Error While setting blogs!!!");
    }
  };
  export const  deleteBlogs = async (id) => {
    try {
      const { data } = await Axios.get(`/posts/${id}`);
      return data;
    } catch (error) {
      throw new Error("Error While getting blogs!!!");
    }
  };