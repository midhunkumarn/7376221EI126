import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import Post from "./components/Posts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
