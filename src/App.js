// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
// import "./App.css";
import AllComponent from "./component/AllComponent";
// import Axios from "axios";

// console.log(process.env.REACT_APP_BACKEND, 444);
function App() {
  const [data, setData] = useState();
  // const getData = async () => {
  //   const response = await Axios.get("http://localhost:5000/getData");
  //   setData(response.data);
  // };

  // useEffect(() => {
  //   const baseURL = "http://localhost:3000/v1/api";
  //   fetch(baseURL)
  //     .then((r) => r.json())
  //     .then((body) => setData(body))
  //     .catch((err) => console.log("Error while fetching posts"));
  //   getData();
  // }, []);
  return (
    <div className=" w-full h-screen">
      {/* <div>{data}</div> */}
      <AllComponent />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
