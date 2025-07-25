import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link
      to={`/post/${$id}`}
      className="block transform transition-transform hover:scale-[1.02]"
    >
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="relative group">
          <img
            src={appwriteService.getFileView(featuredImage)}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
        </div>

        <div className="p-4 flex-grow flex flex-col justify-between">
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 hover:text-indigo-600 transition-colors">
            {title}
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Click to read more →
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
