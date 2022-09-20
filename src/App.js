import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [data, setdata] = useState([]);
  function fetchApi() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setdata(json);
      });
  }
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <h1>Hello</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
