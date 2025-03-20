import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Users.css"; 

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNDUwODEyLCJpYXQiOjE3NDI0NTA1MTIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjZhMjU4OTVmLWEwZjctNDA3Mi05ZDViLWI2YjdkOTExNGM4MCIsInN1YiI6Im1pZGh1bmt1bWFyLmVpMjJAYml0c2F0aHkuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjZhMjU4OTVmLWEwZjctNDA3Mi05ZDViLWI2YjdkOTExNGM4MCIsImNsaWVudFNlY3JldCI6Illxck1zWGFMdEt0TE1OUGsiLCJvd25lck5hbWUiOiJNaWRodW5rdW1hciIsIm93bmVyRW1haWwiOiJtaWRodW5rdW1hci5laTIyQGJpdHNhdGh5LmFjLmluIiwicm9sbE5vIjoiNzM3NjIyMUVJMTI2In0.ywr2dp0M4Naf59oVk91P-ZSH67RTXMkaL7YTfDzm0hY";
  const API_URL = "http://20.244.56.144/test/users";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${accessToken.trim()}`,
            "Content-Type": "application/json",
          },
        });

        if (response.data && response.data.users) {
          setUsers(Object.values(response.data.users)); 
        } else {
          throw new Error("Invalid API response");
        }
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>User List</h1>
      {error && <p className="error">{error}</p>}
      <div className="user-grid">
        {users.length > 0 ? (
          users.map((user, index) => (
            <div key={index} className="user-card">
              <h2>{user}</h2>
              <button onClick={() => navigate("/post")}>Post</button>
            </div>
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </div>
    </div>
  );
}

export default Users;
