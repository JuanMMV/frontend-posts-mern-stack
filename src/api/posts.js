import axios from "axios";

  const host = "https://backend-posts-mern-stack-production.up.railway.app/posts/";
//const host = "http://localhost:4000/posts";

export const getPostsRequests = async () => await axios.get(host);

export const createPostRequest = async (post) =>{  
  const form = new FormData();

  for(let key in post) {
    form.append(key, post[key])
  }

  return await axios.post(host, form, {
    headers:{
      "Content-Type":"multipart/form-data"
    }
  })}

export const deletePostRequest = async (_id) =>
  await axios.delete(host + _id);

export const getPostRequests = async (id) => await axios.get(host + id);

export const updatePostRequests = async (id, newFields) => {
  const form = new FormData();

  for(let key in newFields) {
    form.append(key, newFields[key])
  }
  return await axios.put(`${host}${id}`, form, {
    headers:{
      "Content-Type":"multipart/form-data"
    }
  })
}
