import { useState } from "react";
import Coments from "./Coments";

const Create = ({ CreatePost, data, GetPost }) => {
  const [body, setBody] = useState("");
  const [title1, setTitle1] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const data = {
        title: title1,
        body: body,
        userId: 1
      }
    CreatePost(data)
    GetPost()
  };

  return (
    <div>
      <form style={{width:'350px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} onSubmit={handleClick}>
        <label htmlFor="titulo">Titulo</label>
        <input id="titulo" name="titulo" value={title1} type="text" onChange={(event) => setTitle1(event.target.value)} />
        <label htmlFor="">Cuerpo</label>
        <input value={body} type="text" onChange={(event) => setBody(event.target.value)} />
        <button style={{width: "50%", marginBottom:'50px'}}>enviar</button>
      </form>

      <Coments data={data}/>
    </div>
  );
};

export default Create;
