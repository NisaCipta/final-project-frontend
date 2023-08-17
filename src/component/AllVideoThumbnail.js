import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { getToken } from "../utils/LocalStorage";
import { message } from "antd";
import { newHttpClientAuth } from "../utils/HttpClientAxios";

const ListVideo = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);

  const [childValue, setChildValue] = useState("");

  const handleChildValueChange = (value) => {
    setChildValue(value);
  };

  function updateVideoSearch(childValue) {
    const httpClient = newHttpClientAuth();
    httpClient.get(`/videos?title=${childValue}`).then((response) => {
      setVideos(response.data.data);
    });
  }

  useEffect(() => {
    if (!getToken() || getToken() == null) {
      message.destroy();
      message.warning({
        content: "you must login first",
      });
      navigate("/login");
      return;
    }
    updateVideoSearch(childValue);
  }, []);

  return (
    <div>
      <Navbar onValueChange={handleChildValueChange} onDataChange={updateVideoSearch} />
      <h2>List of Videos</h2>
      <div className="flex flex-wrap justify-center gap-5 mt-5">
        {videos.map((video) => (
          <div key={video.id} className="relative">
            <Link to={`/video/${video._id}`} className="block">
              <div className="bg-[#04413C] w-64 py-1/2 h-96 mx-auto rounded-lg shadow-md opacity-400">
                <div className="flex justify-between items-center h-full">
                  <img className="" src={`https://img.youtube.com/vi/${video.video_url}/maxresdefault.jpg`} />
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
