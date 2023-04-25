import React from "react";
import "./App.css";
export default function App() {
  const [users, setUsers] = React.useState([]);

  const fetchUserData = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.slip);
      });
  };

  React.useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <body>
      <section className="app">
        <div className="card">
          <div className="heading" id={users.id}>
            {users.advice}
          </div>
          <button className="button" onClick={fetchUserData}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </section>
    </body>
  );
}
