import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import MyComponent from "./Antd";
import ListVideo from "./AllVideoThumbnail";
import VideoDetail from "./VideoDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function AllComponent() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<ListVideo />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/antd" element={<MyComponent />} />
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
    </Router>
  );
}

export default AllComponent;
