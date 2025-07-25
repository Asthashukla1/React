import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="py-8 min-h-screen bg-gray-50 flex items-start">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
