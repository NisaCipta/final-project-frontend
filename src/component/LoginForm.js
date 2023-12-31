import { useNavigate } from "react-router-dom";
import { Login } from "../image/Image";
import { Button, message, Input, Form } from "antd";
import { httpClient } from "../utils/HttpClientAxios";
import { saveSession } from "../utils/LocalStorage";

function LoginForm() {
  const navigate = useNavigate();

  const handleFailed = (e) => {
    console.log(e.errorFields[0].errors);
    message.error(e.errorFields[0].errors);
  };

  const handleSubmit = (e) => {
    httpClient
      .post("/auth/login", e)
      .then((res) => {
        saveSession(res.data.data.token, res.data.data.user);
        message.destroy();
        message.info({
          content: "success login",
        });
        navigate("/");
      })
      .catch((err) => {
        message.destroy();
        message.error({
          content: "failed login",
        });
        console.log(err);
      });
  };

  return (
    <div>
      <div className=" w-full h-screen min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-xl max-w-3xl p-5 items-center">
          <div className="md:block hidden w-1/2">
            <img src={Login} className="rounded-2xl"></img>
          </div>

          <div className="md:w-1/2 px-16">
            <h2 className="font-bold text-2xl text-[#64AAA6]">Login</h2>
            <p className="text-sm mt-4 text-[#64AAA6]">If you already a member, easly log in</p>

            <Form onFinish={handleSubmit} onFinishFailed={handleFailed} className="flex flex-col">
              <Form.Item
                name="email"
                className="mt-2"
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
                className="rounded-xl border"
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
                  Login
                </Button>
              </Form.Item>
            </Form>

            <div className="mt-1 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            <div className="text-xs flex justify-between items-center">
              <p>Don't have account?</p>
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-100 duration-300">
                <a href="/register">Register</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
