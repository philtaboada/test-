import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Coments = ({ data }) => {

  const navigate = useNavigate();

  const handleClick = (id) => {
    return navigate(`/post/${id}`);
  };

  const DeletePost = (id) => {
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
    axios.delete(URL).then((res) => console.log(res)).catch((err) => console.log(err))
  };

  const UpdatePost = (id) => {
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const data = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    axios.put(URL, data).then((res) => console.log(res)).catch((err) => console.log(err))
  };

  return (
    <div>
      {data.map((item) => {
        return (
          <>
            <div
              onClick={() => handleClick(item.id)}
              style={{
                cursor: "pointer",
                border: "solid 1px purple",
                background: "black",
              }}
            >
              <div>{item.title}</div>
              <div>{item.body}</div>
            </div>
            <button onClick={()=>(DeletePost(item.id))}>DELETE</button>
            <button onClick={()=> (UpdatePost(item.id))} >Update</button>
          </>
        );
      })}
    </div>
  );
};

export default Coments;
