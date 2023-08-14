import React, { useState, useEffect } from "react";
import { SendOutlined } from "@ant-design/icons";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // ... Setup WebSocket connection and useEffect as shown in the previous examples ...

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment) {
      const commentObj = { text: newComment };
      //   ws.send(JSON.stringify(commentObj));
      setNewComment("");
    }
  };

  return (
    <div className="relative h-screen">
      <div className="fixed bottom-4 right-4 bg-gray-200 p-4">
        {/* Comment section */}
        <div className="mb-4 flex">
          <input type="text" placeholder="Write a comment" value={newComment} onChange={handleCommentChange} className="w-full px-2 py-1 border rounded" />
          <button onClick={handleCommentSubmit} className="bg-blue-500 text-white px-2 py-1 rounded ml-2 flex items-center">
            <SendOutlined className="mr-1" />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-160px)]">
          {comments.map((comment, index) => (
            <div key={index} className="bg-white p-2 mb-2 shadow">
              {comment.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
