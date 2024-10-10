import { useState } from "react";
export default function MyForm() {
  const [input, setInput] = useState({ name: "", email: "" });
  return (
    <form>
      <label style={{ marginRight: "5px" }}>Name:</label>
      <input
        value={input.name}
        onChange={(e) => {
          setInput({ name: e.target.value });
        }}
        type="text"
        placeholder="username"
      ></input>
      <hr />
      <label style={{ marginRight: "5px" }}>Email:</label>
      <input
        value={input.email}
        onChange={(e) => {
          setInput({ email: e.target.value });
        }}
        type="text"
        placeholder="email"
      ></input>
      <hr />
      <button>Click</button>
    </form>
  );
}
