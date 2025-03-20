import { useNavigate } from "react-router-dom";

function Post() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Post Page</h1>
      <p>This is the post page.</p>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default Post;
