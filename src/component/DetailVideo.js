import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Comment from "./Comment";

const VideoDetail = () => {
  // get url params
  const { id } = useParams();
  const [videos, setVideos] = useState([]);

  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/v1/api",
    headers: {
      Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pc2FjaXB0YUBnbWFpbC5jb20iLCJpYXQiOjE2OTIwMDMyMjh9.uF9bCAcoZYH1Ja3SU_NkoiHkIcX5DfODqeMhsPqtmOU",
    },
  });

  useEffect(() => {
    axiosInstance.get(`/videos/${id}/products`).then((response) => {
      setVideos(response.data.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Comment />
      <div className="relative h-screen">
        <div className="w-4/5 bg-gray-100 p-8">
          {/* Video */}
          <div className="mb-4">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${videos.video_url}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          {/* List of Products */}
          <h2 className="text-2xl mb-2">Products</h2>
          <div className="grid grid-cols-5 gap-4">
            {/* Sample product cards */}
            <div className="bg-white p-4 shadow">
              <h3 className="text-lg font-semibold mb-2">Product 1</h3>
              <p>Product description...</p>
            </div>
            <div className="bg-white p-4 shadow">
              <h3 className="text-lg font-semibold mb-2">Product 2</h3>
              <p>Product description...</p>
            </div>
            <div className="bg-white p-4 shadow">
              <h3 className="text-lg font-semibold mb-2">Product 3</h3>
              <p>Product description...</p>
            </div>
            {/* Add more product cards as needed */}
          </div>
        </div>
        {/* Comment Section */}
        <div className="fixed bottom-4 right-4 bg-gray-200 p-4">{/* ... Same comment section code as before ... */}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
