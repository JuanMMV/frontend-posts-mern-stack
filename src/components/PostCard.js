import toast from "react-hot-toast";
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import { useState } from "react";

export const PostCard = ({ post }) => {
  const { deletePost } = usePosts();
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false)
  const [fullImage, setFullImage] = useState("")

  if(modalVisible){
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  const handleDelete = (_id) => {
    toast(
      (t) => (
        <div>
          <p className="text-white">
            Do you want to delete?<strong>{_id}</strong>
          </p>
          <div>
            <button
              className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2"
              onClick={() => {
                deletePost(_id);
                toast.dismiss(t.id);
              }}
            >
              Delete
            </button>
            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-sm text-white rounded-sm mx-2"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#202020",
        },
      }
    );
  };
  return (
    <div className="bg-zinc-800 text-white rounded-lg shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer" >
      <div className="px-4 py-7" onClick={() => navigate(`/posts/${post._id}`)}>
        <div className="flex justify-between">
          <h3> {post.title}</h3>
          <button
            className="bg-red-600 hover:bg-red-500 text-sm px-2 py-1 rounded-sm"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(post._id);
            }}
          >
            Delete
          </button>
        </div>
        <p>{post.description}</p>
      </div>
      {post.image && (
        <img src={post.image.url} 
          alt="ImagePost" 
          className="object-cover h-96 w-full rounded-b-lg" 
          onClick={(e) => {
            e.stopPropagation()
            setModalVisible(true)
            setFullImage(post.image.url)
          }} 
        />
      )}
      <ModalComponent modalVisible = {modalVisible} setModalVisible = {setModalVisible} fullImage={fullImage} setFullImage = {setFullImage} />
    </div>
  );
};
