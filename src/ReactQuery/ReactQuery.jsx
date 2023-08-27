import React from "react";
import "./ReactQuery.css";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { wait } from "../helpers/helperFunctions";

// The main two thing you can do with react-query are:
//  1. Query (getting data from somewhere)
//  2. Mutation (changing some type of data)

// How to think about query key
//   /posts       ["posts"]
//   /posts/1     ["posts", post.id]
//   /posts?authorId=1      ["posts", {authorId: 1}]
//   /posts/2/comments      ["posts", post.id, "comments"]

const POSTS = [
  {
    id: 1,
    title: "Post-1",
  },
  {
    id: 2,
    title: "Post-2",
  },
];

const ReactQuery = () => {
  const queryClient = useQueryClient();

  const postQuery = useQuery({
    queryKey: ["posts"], // unique identifier for your query - must be an array
    queryFn: ({ queryKey }) => wait(1000).then(() => [...POSTS]), // must return a promise
  });

  const newPostMutation = useMutation({
    mutationFn: (title) =>
      wait(1000).then(() =>
        POSTS.push({
          id: crypto.randomUUID(),
          title,
        })
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]); // if we don't add it then it will always shows cached data
    },
  });

  if (postQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (postQuery.isError) {
    return <pre>{JSON.stringify(postQuery.error) || "ERROR"}</pre>;
  }

  return (
    <>
      <div>
        {postQuery.data.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
      <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate("New post")}
      >
        Add New
      </button>
    </>
  );
};

export default ReactQuery;
