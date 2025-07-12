import React from "react";
import { FaRegEye, FaStar, FaShareAlt } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    details,
    total_view,
    rating,
    image_url,
    
  } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-md mb-5">
      {/* Header */}
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500">
          <FiBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      {/* Image */}
      <div className="px-4 py-3">
        <img src={image_url} alt={title} className="w-full rounded-md" />
      </div>

      {/* Details */}
      <div className="px-4 pb-3 text-sm text-gray-700">
        {details.slice(0, 200)}...{" "}
        <span className="text-orange-600 font-medium cursor-pointer">
          Read More
        </span>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.number ? "" : "opacity-30"} />
          ))}
          <span className="text-black ml-2">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
