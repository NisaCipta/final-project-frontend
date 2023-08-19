import React, { useState, useEffect, useRef } from "react";
import { SendOutlined } from "@ant-design/icons";
import { newHttpClientAuth } from "../utils/HttpClientAxios";
import { Button, message, Input, Form } from "antd";
import { getUsername } from "../utils/LocalStorage";

const Comment = ({ comment, videoId, getComment }) => {
  const [form] = Form.useForm();
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  });

  const handleCommentFailed = (e) => {
    message.error(e.errorFields[0].errors);
  };

  const handleChange = () => {
    form.resetFields();
    getComment(videoId);
  };

  const handleCommentSubmit = (e) => {
    e.username = getUsername();
    e.video_id = videoId;
    const httpClient = newHttpClientAuth();
    httpClient
      .post("/comments", e)
      .then((response) => {
        message.destroy();
        message.info({
          content: response.data?.message,
        });
        handleChange();
      })
      .catch((err) => {
        message.destroy();
        message.error({
          content: "please fill the column comment",
        });
        console.log(err, 343434);
      });
  };

  return (
    <>
      <div className="bg-gray-100 px-5 flex flex-col justify-end">
        <div ref={listRef} className="max-h-screen overflow-y-auto" style={{ overflow: "hidden" }}>
          {comment.map((comment, index) => (
            <div key={index} className="bg-white p-2 mb-2 shadow">
              {comment.comment}
            </div>
          ))}
        </div>
        <div className="mb-4 flex">
          <Form form={form} onFinishFailed={handleCommentFailed} onFinish={handleCommentSubmit}>
            <div className="flex items-center">
              <Form.Item
                name="comment"
                className="w-full"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid E-mail!",
                  },
                ]}
              >
                <Input placeholder="Write a comment" />
              </Form.Item>

              <Form.Item>
                <Button htmlType="submit" className="bg-blue-500 text-white px-2 py-1 rounded ml-2 flex items-center">
                  <SendOutlined className="mr-1" />
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Comment;
