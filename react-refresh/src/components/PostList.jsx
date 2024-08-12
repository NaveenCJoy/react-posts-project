import { useState, useEffect } from "react";
import NewPost from "../routes/NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const posts = useLoaderData();

  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     const response = await fetch("http://localhost:8080/posts");
  //     const resData = await response.json();
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }
  //   fetchPosts();
  // }, []);

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <li>
              <Post
                key={post.id}
                id={post.id}
                author={post.author}
                text={post.body}
              />
            </li>
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h1>No posts yet.</h1>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
