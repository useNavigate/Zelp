import { useState, useEffect } from "react";
import PostIndex from "./PostIndex";
import PostForm from "./PostForm";

function Post() {
      const [newPost, setNewPost] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/posts");
      setPosts(await res.json());
    };
    fetchPosts();
  }, []);
  useEffect(() => {
    if (newPost) setPosts((prevPosts) => [newPost, ...prevPosts]);
  }, [newPost]);
  return (
    <>
    <h1>postPage</h1>
    <PostForm setNewPost ={setNewPost}/>
      <PostIndex posts={posts} />

    </>
  );
}

export default Post;
