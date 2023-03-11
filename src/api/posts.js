import axios from "axios";

export const getPostsRequests = async () => await axios.get("/posts");

export const createPostRequest = async (post) =>{  
  const form = new FormData();

  for(let key in post) {
    form.append(key, post[key])
  }

  return await axios.post("/posts", form, {
    headers:{
      "Content-Type":"multipart/form-data"
    }
  })}

export const deletePostRequest = async (_id) =>
  await axios.delete("/posts/" + _id);

export const getPostRequests = async (id) => await axios.get("/posts/" + id);

export const updatePostRequests = async (id, newFields) => {
  const form = new FormData();

  for(let key in newFields) {
    form.append(key, newFields[key])
  }
  return await axios.put(`/posts/${id}`, form, {
    headers:{
      "Content-Type":"multipart/form-data"
    }
  })
}
