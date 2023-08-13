import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "axios";

const ListVideo = () => {
  const [videos, setVideos] = useState([]);

  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/v1/api", // Ganti dengan URL API yang sesuai
    headers: {
      Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pc2FjaXB0YUBnbWFpbC5jb20iLCJpYXQiOjE2OTE5MTE1MjJ9.zVolYDZ8VwLxaLC1JZaKTlA5PMEWZwsr8Wzntiry5tg",
    },
  });

  useEffect(() => {
    axiosInstance.get("/videos").then((response) => {
      setVideos(response.data);
    });
  }, []);

  return (
    <div>
      <h2>List of Videos</h2>
      {videos.map((video) => (
        <div key={video.id}>
          <h3>{video.title}</h3>
          <YouTube videoId={video.id} opts={{ width: "640", height: "360" }} />
        </div>
      ))}
    </div>
  );
};

export default ListVideo;
