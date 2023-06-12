import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import PostDetails from "./components/PostDetails";

function App() {
  const [data, setData] = useState([]);
  const API =
    "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    GetPost()
  }, []);

  const GetPost = () => {
    axios
    .get(API)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
  }

  const CreatePost = async (data) => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    const postComments = await axios
      .post(URL, data)
      .then((res) => console.log("Se envio la información", res))
      .catch((err) => console.log(err));
    return postComments;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Create CreatePost={CreatePost} data={data} GetPost={GetPost} />} />
        <Route path="/post/:id" element={<PostDetails/>} />
      </Routes>
    </>
  );
}

export default App;
