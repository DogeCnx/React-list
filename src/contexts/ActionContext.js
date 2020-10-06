import React, { createContext, useState, useEffect, useContext,useMemo ,useCallback} from "react";

const ActionContext = createContext({});

export function Provider({ children }) {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <ActionContext.Provider value={{ todos, setTodos }}>
        {children}
      </ActionContext.Provider>
    </>
  );
}

export function useTodo() {
  const { todos, setTodos } = useContext(ActionContext);

  const handleAddTodo = (todoInput) =>
    setTodos([...todos, { id: Date.now(), content: todoInput, type: "todo" }]);

  const handleDoClick = useCallback((itemId) => {
    const cloneTodos = [...todos];
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (todos[itemIndex]) {
      cloneTodos[itemIndex].type = "doing";
    }
    setTodos(cloneTodos);
  },[todos,setTodos]);

  const handleDoneClick = useCallback((itemId) => {
    const cloneTodos = [...todos];
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (todos[itemIndex]) {
      cloneTodos[itemIndex].type = "done";
    }
    setTodos(cloneTodos);
  },[todos,setTodos]);


  const handleTodoClick =  useCallback((itemId) => {
    const cloneTodos = [...todos];
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (todos[itemIndex]) {
      cloneTodos[itemIndex].type = "todo";
    }
    setTodos(cloneTodos);
  },[todos,setTodos]);

  useEffect (() => {
    if (!todos.length)
      setTodos(JSON.parse(window.localStorage.getItem("todos")) || []);
  },[setTodos]);

  useEffect( () => {
    if (todos.length)
      window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [setTodos, todos]);


  const Constants = {
    store : 'todos',type : {
      todo: 'todo',
      doing: 'doing',
      done : 'done',
    }
  }

  const state = useMemo(() => ({
    todos: todos.filter((todo) => todo.type ===  Constants.type.todo  ),
    doings: todos.filter((todo) => todo.type === Constants.type.doing ),
    dones: todos.filter((todo) => todo.type === Constants.type.done )
  }),[todos])


  const dispatcher = useMemo( () => ({
    handleAddTodo,handleTodoClick,handleDoClick,handleDoneClick
  }),[handleAddTodo,handleTodoClick,handleDoClick,handleDoneClick])
  return [
    state,
    dispatcher
  ];
}

export default ActionContext;
