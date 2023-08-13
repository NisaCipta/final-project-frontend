import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Navbar from "./Navbar";
import MyComponent from "./Antd";
import ListVideo from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function AllComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<RegisterForm />} />
        <Route path="/home" element={<Navbar />} />
        <Route path="/antd" element={<MyComponent />} />
        <Route path="/video" element={<ListVideo />} />
      </Routes>
    </Router>
  );
}

export default AllComponent;
