import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("")

     try {
      const response = await fetch("http://localhost:3041/players/player", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message);
        return;
      }

      navigate("/option");
    } catch (err) {
      setError("server faild");
    }
    
  };

  return (
    <div>
      signUp
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="user name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      {error && <p>{error}</p>}
      <Link to="/play">game</Link>
    </div>
  );
}
