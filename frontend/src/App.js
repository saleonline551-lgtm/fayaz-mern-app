import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://fayaz-mern-app.onrender.com/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await response.json();

    alert(data.message);

    setName("");
    setEmail("");
  };

  return (
    <div className="container">
      <div className="hero">
        <div className="card">
          <h1>MERN Form 🚀</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Save User</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;