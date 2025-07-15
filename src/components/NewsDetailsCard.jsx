import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news);
    return (
       <div className="card bg-base-100 shadow-md p-5 my-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Dragon News</h2>

      {/* News Image */}
      <img
        src={news.image_url}
        alt={news.title}
        className="w-full rounded-md mb-4"
      />

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {news.title}
      </h3>

      {/* Date & Tags (optional — if you want to show later) */}
      {/* <p className="text-sm text-gray-500 mb-2">Wednesday, August 24, 2022 | Tags: ...</p> */}

      {/* News Details */}
      <p className="text-gray-700 mb-5">{news.details}</p>

      {/* Category Button */}
      <Link
        to={`/category/${news.category_id}`}
        className="btn btn-error text-white w-fit"
      >
        ⬅ All news in this category
      </Link>
    </div>
    );
};

export default NewsDetailsCard;