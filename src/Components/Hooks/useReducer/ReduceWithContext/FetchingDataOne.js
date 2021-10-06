import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchingDataOne() {
  const [load, setLoad] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [SubmitId, setSubmitId] = useState(id);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${SubmitId}`)
      .then((res) => {
        setLoad(false);
        setError("");
        setPost(res.data);
      })
      .catch((err) => {
        setLoad(false);
        setError("Something Error Happen");
        setPost({});
      });
  }, [SubmitId]);

  const submitButton = () => {
    setSubmitId(id);
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button type="button" onClick={submitButton}>
        Fetch Post
      </button>

      <h1>{load ? load : post.title}</h1>
      <h1>{error ? error : null}</h1>
    </div>
  );
}

export default FetchingDataOne;
