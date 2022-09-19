import { useRef, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [post, setPost] = useState("");
  const postRef = useRef(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (Boolean(post)) {
      fetch("http://localhost:7771/posts", {
        method: "POST",
        headers: {
          "Content-Type": "applicaton/json",
        },
        body: JSON.stringify({
          id: 0,
          content: post,
        }),
      })
        //.then((res) => console.log(res))
        .then((res) => res.json())
        //.then(response => response.text())
        .then((data) => console.log(data))
        .catch((error) => console.error("Something went wrong: ", error))
        .finally(() => navigate("/"))
        
    }
  }, [post, navigate]);

  const hendleSubmit = () => {
    setPost(postRef.current.textContent);
  };

  return (
    <div className="create">
      <Link to={"/"} className="close">
        ❌
      </Link>
      <p ref={postRef}>nice to meet you</p>

      <button onClick={hendleSubmit}>Опубликовать</button>
    </div>
  );
}
