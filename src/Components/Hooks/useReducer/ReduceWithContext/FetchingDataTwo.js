import React, { useEffect, useReducer, useRef } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  post: {},
  error: "",
  submitId: 1
};

const reducer = (state, action) => {
  if (!action.type && action.submitId) {
    return { loading: false, post: {}, error: "", submitId: action.submitId };
  } else {
    switch (action.type) {
      case "HTTP_SUCCESS":
        return {
          loading: false,
          post: action.post,
          error: "",
          submitId: action.submitId,
        };
      case "HTTP_ERROR":
        return {
          loading: false,
          post: {},
          error: action.error,
          submitId: action.submitId,
        };
      default:
        return state;
    }
  }
};

function FetchingDataTwo() {
  const [newState, dispatch] = useReducer(reducer, initialState);
  console.log(newState.submitId)
  const inputRef = useRef();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${newState.submitId}`)
      .then((res) => {
        dispatch({
          type: "HTTP_SUCCESS",
          post: res.data,
          submitId: newState.submitId,
        });
      })
      .catch((err) => {
        dispatch({
          type: "HTTP_ERROR",
          error: "Something Error Happen",
          submitId: newState.submitId,
        });
      });
  },[newState]);

  const submitButton = (e) => {
    e.preventDefault()
    dispatch({ type: "", submitId: inputRef.current.value });
    inputRef.current.value=""
  };

  return (
    <div>
      <input type="text" ref={inputRef} onChange={(e)=>{}} />
      <button type="button" onClick={submitButton}>
        Fetch Post
      </button>

      <h1>{newState.loading ? newState.loading : newState.post.title}</h1>
      <h1>{newState.error ? newState.error : null}</h1>
    </div>
  );
}

export default FetchingDataTwo;
