import { Axios } from "./Axios";
export const  getBlogs = async () => {
  try {
    const { data } = await Axios.get(`/blogs`);
    return data;
  } catch (error) {
    throw new Error("Error While getting blogs!!!");
  }
};
export const  createBlogs = async (form) => {
    try {
      const { data } = await Axios.post(`/blogs`,form);
      return data;
    } catch (error) {
      throw new Error("Error While setting blogs!!!");
    }
  };
  export const  deleteBlogs = async (id) => {
    try {
      const { data } = await Axios.delete(`/blogs/${id}`);
      return data;
    } catch (error) {
      throw new Error("Error While getting blogs!!!");
    }
  };
  export const  updateBlogs = async (form) => {
    try {
      const { data } = await Axios.put(`/blogs`,form);
      return data;
    } catch (error) {
      throw new Error("Error While getting blogs!!!");
    }
  };
  export const  getPagination = async (page,limit) => {
    try {
      const { data } = await Axios.get(`/pagination`,{params:{page,limit}});
      return data;
    } catch (error) {
      throw new Error("Error While getting blogs!!!");
    }
  };