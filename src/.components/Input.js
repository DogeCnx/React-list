import React, { useState } from "react";

export function Input({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
    setValue("");
  };

  const handleInputChange = (event) => setValue(event.target.value);

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <input
        onChange={handleInputChange}
        value={value}
        type="text"
        className="input"
        placeholder="Create new task"
      />
    </form>
  );
}
export default Input;
