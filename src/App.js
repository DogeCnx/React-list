import React from "react";
import Input from "./.components/Input";
import Lane from "./.components/Lane";
import Title from "./.components/Title";
import {useTodo} from "./contexts/ActionContext"
import "./main.css";

export default function App() {

  const [,{handleAddTodo}] = useTodo();

  return (
    <div className="container">
      <Title>Title</Title>
      <Input onSubmit={handleAddTodo} />
      <Lane  />
    </div>
  );
}
