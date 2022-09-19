import { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UpdatePost() {
  const [post, setPost] = useState("");
  const formRef = useRef(null);
  let navigate = useNavigate();

  const close = () => {
    formRef?.current.reset();
  };

  useEffect(() => {
    if (Boolean(post)) {
      fetch(`http://localhost:7771/posts`, {
        method: "POST",
        body: JSON.stringify({
          id: 0,
          content: post,
        }),
      })
        .then((res) => console.log(res))
        .then(() => navigate('/'));
    }
  });

  const hendleSubmit = (evt) => {
    evt.preventDefault();
      setPost(evt.target.post.value);
      evt.target.post.value = '';
  };

  return (
    <div className="create">
      <Link to={"/"} className="close" onClick={close}>
        ❌
      </Link>
      <form onSubmit={hendleSubmit}>
        <div className="form__wrap">
          <label htmlFor="post">
            <textarea name="post" id="post"></textarea>
          </label>
          <button type="submit">Опубликовать</button>
        </div>
      </form>
    </div>
  );
}