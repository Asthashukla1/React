import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService.getPosts().then((res) => {
      if (res) {
        setPosts(res.documents);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600 text-lg">
        Loading posts...
      </div>
    );
  }

  return (
    <div className="w-full py-8 bg-gray-50 min-h-screen">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No posts available.
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
