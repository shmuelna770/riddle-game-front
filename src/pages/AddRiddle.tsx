import React, { useState } from "react";

export default function AddRiddle() {
  const [name, setName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:3041/riddles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, taskDescription, correctAnswer }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.message || "faild to add data");
        return;
      }
      setSuccess("riddle added sucssfuly");
      setName("");
      setTaskDescription("");
      setCorrectAnswer("");
    } catch (err) {
      setError("server faild");
    }
  };

  return (
    <div>
      <h2>add a new riddle</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="task discription"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="correct answer"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        />
        <button type="submit">add riddle</button>
      </form>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </div>
  );
}
