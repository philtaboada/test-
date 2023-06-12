import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostDetails = () => {
  const [data, setData] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const API = `https://jsonplaceholder.typicode.com/posts/${id}`
    axios(API).then((res) => setData(res.data)).catch((err) => console.log(err)
    )
  }, [])

  return (
    <>
      <h1 >{data.title}</h1>
      <div>{data.body}</div>
    </>
  )
}

export default PostDetails