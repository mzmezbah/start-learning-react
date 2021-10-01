import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchTwo() {
  const [post, setPost] = useState({});

  const [Id, setId] = useState(1);

  const [buttonClickId,setButtonClickId] = useState(1)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${buttonClickId}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [buttonClickId]);

  const buttonClick = () =>{
      setButtonClickId(Id)
  }

  return (
    <div>
      <input type="text" value={Id} onChange={(e) => setId(e.target.value)} />
      <button type='button' onClick={buttonClick}>Fetch Post</button>
      <ul>
        <li>{post.title}</li>
        <p>{post.body}</p>
      </ul>
    </div>
  );
}

export default FetchTwo;
