import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
        setLoading(false);
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      appwriteService.deletePost(post.$id).then((status) => {
        if (status) {
          appwriteService.deleteFile(post.featuredImage);
          navigate("/");
        }
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600 text-lg">
        Loading post...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main content */}
          <main className="lg:col-span-3 bg-white rounded-lg shadow-lg p-8">
            {/* Featured Image with overlay */}
            <div className="relative rounded-lg overflow-hidden mb-8 shadow-md">
              <img
                src={appwriteService.getFileView(post.featuredImage)}
                alt={post.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <h1 className="absolute bottom-4 left-6 text-white text-4xl font-extrabold drop-shadow-lg">
                {post.title}
              </h1>
            </div>

            {/* Post Meta */}
            <div className="flex items-center justify-between text-gray-500 mb-6">
              <span>By <strong>{post.authorName || "Author"}</strong></span>
              <span>{new Date(post.$createdAt).toLocaleDateString()}</span>
              {/* Example Read time */}
              <span>⏱️ 7 min read</span>
            </div>

            {/* Post Content */}
            <article className="prose prose-lg max-w-none">
              {parse(post.content)}
            </article>

            {/* Edit/Delete buttons */}
            {isAuthor && (
              <div className="mt-8 flex space-x-4">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button bgColor="bg-green-600" className="hover:bg-green-700 transition">
                    Edit
                  </Button>
                </Link>
                <Button
                  bgColor="bg-red-600"
                  className="hover:bg-red-700 transition"
                  onClick={deletePost}
                >
                  Delete
                </Button>
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block bg-white rounded-lg shadow-lg p-6 sticky top-24 h-fit">
            {/* Example sidebar content */}
            <h2 className="text-xl font-semibold mb-4">About the Author</h2>
            <p className="text-gray-700 mb-6">
              {post.authorBio || "This author has not added a bio yet."}
            </p>

            <h2 className="text-xl font-semibold mb-4">Related Posts</h2>
            {/* Ideally you fetch related posts and map here */}
            <ul className="list-disc list-inside space-y-2 text-blue-600">
              <li><Link to="/">Understanding React Hooks</Link></li>
              <li><Link to="/">JavaScript Closures Explained</Link></li>
              <li><Link to="/">CSS Grid vs Flexbox</Link></li>
            </ul>
          </aside>
        </div>
      </Container>
    </div>
  );
}
