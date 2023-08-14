import { useNavigate } from "react-router-dom";
import {removeSession} from "../utils/LocalStorage"

function Logout() {
  const navigate = useNavigate();

  removeSession()
  navigate("/login");
}

export default Logout;
