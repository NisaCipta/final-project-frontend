import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Comment from "./Comment";
import Product from "./Product";
import { newHttpClientAuth } from "../utils/HttpClientAxios";

const VideoDetail = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [comments, setComment] = useState([]);
  const [products, setProduct] = useState([]);
  const httpClient = newHttpClientAuth();

  function getComment(id) {
    httpClient.get(`/videos/${id}/comments`).then((response) => {
      setComment(response.data.data.comments);
    });
  }

  useEffect(() => {
    httpClient.get(`/videos/${id}/products`).then((response) => {
      setProduct(response.data.data.products);
    });
    httpClient.get(`/videos/${id}`).then((response) => {
      setVideos(response.data.data);
    });
    httpClient.get(`/videos/${id}/comments`).then((response) => {
      setComment(response.data.data.comments);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-between">
        <div className="h-screen w-full">
          <div className="bg-gray-100 h-screen p-8">
            <div className="mb-4">
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${videos.video_url}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-row">
              {products.map((product, index) => {
                return <Product id={product._id} title={product.title} price={product.price} link_product={product.link_product} key={index} />;
              })}
            </div>
          </div>
        </div>
        <Comment getComment={getComment} comment={comments} videoId={id} />
      </div>
    </>
  );
};

export default VideoDetail;
