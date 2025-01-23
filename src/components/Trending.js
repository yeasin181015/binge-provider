// src/components/Trending.js
import React from "react";
import { Link } from "react-router-dom";

const trendingContent = [
  { id: "1", title: "Movie 1", description: "Exciting thriller with a twist" },
  { id: "2", title: "Movie 2", description: "A heartwarming family drama" },
  { id: "3", title: "Movie 3", description: "An epic action adventure" },
];

const Trending = () => {
  return (
    <div>
      <h1>Trending Content</h1>
      <ul>
        {trendingContent.map((content) => (
          <li key={content.id}>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            {/* Link to Content Page */}
            <Link to={`/content/${content.id}`}>Watch Now</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trending;
