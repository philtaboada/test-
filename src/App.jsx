import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const API =
    "https://api.thecatapi.com/v1/images/search?limit=4&api_key=live_ekL7Ra6SuK4eEyZ2OAsZKxaRrOvGyEMNVxvX4wy3oQ4qx1oaRQCqM26cZhYUnN8K";

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));  
  }, []);

  const deleteImg = (itemId) => {
    setData(prevData => prevData.filter(item => item.id !== itemId));
  }

  return (
    <>
      {data.map(item => 
          (
            <>
            <img width={300} key={item.id} src={item.url} alt={item.url} />
            <button onClick={() => deleteImg(item.id)}>Delete Img</button>
            <div>{item.id}</div>
            </>
          ))}
    </>
  );
}

export default App;
