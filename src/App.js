import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/index";
import "./App.css";
import CreatePost from "./components/create-post";
import UpdatePost from "./components/update-post";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/new" element={<CreatePost />} />
          <Route path="/posts/update/:id" element={<UpdatePost />}/>
          {/* 
              <Route path="/timeattack" element={<TimeAttackPage />} />
              <Route path="/forza" element={<ForzaPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
