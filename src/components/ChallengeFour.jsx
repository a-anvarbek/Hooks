
import { useEffect, useState } from "react";
// import "./App.css";

function ChallengeFour() {
  const [sourceType, setSourceType] = useState("posts");
  const [data, setData] = useState([]);

  // sourceType o'zgarganda run bo'ladi
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${sourceType}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [sourceType]);

  return (
    <div>
      <button onClick={() => setSourceType("posts")}>Posts</button>
      <button onClick={() => setSourceType("users")}>Users</button>
      <button onClick={() => setSourceType("comments")}>Comments</button>
      <h2>{sourceType}</h2>

      {sourceType === "posts" && (
        <div>
          {data.map((item) => (
            <div
              style={{ border: "1px solid white", margin: "10px" }}
              key={item.id}
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      )}

      {sourceType === "users" && (
        <div>
          {data.map((item) => (
            <div
              style={{ border: "3px solid red", margin: "10px" }}
              key={item.id}
            >
              <h3>{item.name}</h3>
              <p>{item.email}</p>
            </div>
          ))}
        </div>
      )}

      {sourceType === "comments" && (
        <div>
          {data.map((item) => (
            <div
              style={{ border: "5px groove green", margin: "10px" }}
              key={item.id}
            >
              <h3>{item.body}</h3>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
