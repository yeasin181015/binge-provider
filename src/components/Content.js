// src/components/Content.js
import React from "react";
import { useParams } from "react-router-dom";

const Content = () => {
  const { id } = useParams(); // Extract the content ID from the route

  return (
    <div>
      <h1>Playing Content</h1>
      <p>You're watching content ID: {id}</p>
    </div>
  );
};

export default Content;
