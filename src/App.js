import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import data from "./FakeData.json";
import Home from "./screens/Home";
import Posts from "./screens/Posts";
import About from "./screens/About";
import Post from "./screens/Post";
import NoMatch from "./screens/NoMatch";

//NavLink: a component for setting the URL and providing
// navigation between components in our app
// without triggering a page refresh
// We can even style in the NavLink itself

// Route: a component that connects a certain path in the URL
// with the relevant component to render at that location

function App() {
  return (
    <div className="App">
      <div className="links">
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/posts"}>Posts</NavLink>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/posts" element={<Posts posts={data} />} />

        <Route path="/posts/:post_id" element={<Post {...data} />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
