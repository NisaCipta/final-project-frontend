import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../image/Image";
import { Button, message, Input, Form } from "antd";

function RegisterForm() {
  const navigate = useNavigate();

  const handleFailed = (e) => {
    console.log(e.errorFields[0].errors);
    message.error(e.errorFields[0].errors);
  };

  const handleSubmit = (e) => {
    axios
      .post("http://localhost:5000/v1/api/auth/register", e)
      .then((res) => {
        message.destroy();
        message.info({
          content: "success register",
        });

        navigate("/login");
      })
      .catch((err) => {
        message.destroy();
        message.error({
          content: err.response.data.message,
        });
        console.log(err);
      });
  };

  return (
    <div>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-xl max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-16">
            <h2 className="font-bold text-2xl text-[#64AAA6]">Register</h2>
            <p className="text-sm mt-4 text-[#64AAA6]">If you are not yet a member, please register</p>

            <Form onFinish={handleSubmit} onFinishFailed={handleFailed} className="flex flex-col">
              <Form.Item
                name="username"
                className="mt-6"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="Username" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item>
                <Button htmlType="submit" className="bg-[#04413C] text-white login-form-button hover:scale-100 duration-300 w-full">
                  Register
                </Button>
              </Form.Item>
            </Form>

            <div className="mt-1 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            {/* <hr className="my-5 border-gray-400" /> */}

            <div className="mt-2 text-xs flex justify-between items-center">
              <p>Already have an account</p>
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-100 duration-300">
                <a href="/login">Login</a>
              </button>
            </div>
          </div>

          <div className="md:block hidden w-1/2">
            <img src={Login} className="rounded-2xl"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
