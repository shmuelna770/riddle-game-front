import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const hadleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3041/players/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: name, password }),
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
      login
      <form onSubmit={hadleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
      {error && <p>{error}</p>}
      <Link to="/play">game</Link>
    </div>
  );
}
