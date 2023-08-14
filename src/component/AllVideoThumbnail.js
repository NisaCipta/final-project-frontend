import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const ListVideo = () => {
  const [videos, setVideos] = useState([]);

  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/v1/api",
    headers: {
      Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pc2FjaXB0YUBnbWFpbC5jb20iLCJpYXQiOjE2OTIwMDMyMjh9.uF9bCAcoZYH1Ja3SU_NkoiHkIcX5DfODqeMhsPqtmOU",
    },
  });

  const opts = {
    width: "300",
    height: "300",
  };

  useEffect(() => {
    axiosInstance.get("/videos").then((response) => {
      setVideos(response.data.data);
    });
  }, []);

  // const [thumbnailUrl, setThumbnailUrl] = useState("");

  // const handleReady = (event) => {
  //   // Dapatkan URL thumbnail dari data video
  //   const thumbnail = event.target.getVideoData().thumbnailUrl;
  //   setThumbnailUrl(thumbnail);
  // };
  return (
    <div>
      <Navbar />
      <h2>List of Videos</h2>
      <div className="flex flex-wrap justify-center gap-5 mt-5">
        {videos.map((video) => (
          <div key={video.id} className="relative">
            <Link to={`/video/${video._id}`} className="block">
              <div className="bg-[#04413C] w-64 py-1/2 h-96 mx-auto rounded-lg shadow-md opacity-400">
                <div className="flex justify-between items-center h-full">
                  <img className="" src={`https://img.youtube.com/vi/${video.video_url}/maxresdefault.jpg`} opts={opts} />
                </div>
              </div>
              <h3 className="absolute bottom-0 left-0 mb-2 ml-2 text-white text-sm font-semibold">{video.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListVideo;
