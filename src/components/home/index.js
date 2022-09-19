import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7771/posts")
    .then((res) => res.json())
    .then((data) => {
      setPosts(data)
    })
  }, [posts.length]);

  return (
    <>
      <nav className="nav">
        <Link className="create-post" to={"/posts/new"}>
          Создать пост
        </Link>
      </nav>
      <div className="posts">
        {Boolean(posts.length) ? posts : <p>постов нет</p>}
      </div>
    </>
  );
}
