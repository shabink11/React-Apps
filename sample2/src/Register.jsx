import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let data = JSON.parse(localStorage.getItem("register")) || [];
    const handleSubmit = (event) => {
    event.preventDefault();
    data.push({ email: email, password: password });
    console.log(data);
    localStorage.setItem("register", JSON.stringify(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="pass"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={function submit() {
            localStorage.setItem(
              "register",
              JSON.stringify({ email: email, password: password })
            );
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Register;
