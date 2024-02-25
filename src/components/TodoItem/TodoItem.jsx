import React from "react";
import { useState, useEffect } from "react";

const TodoItem = () => {
  const [todo, setTodo] = useState("");
  const [todoId, setTodoId] = useState(1);

  const [loading, setLoading] = useState(false);

  const nextHandler = () => {
    setTodoId(todoId + 1);
  };
  useEffect(() => {
    const fetchTodoById = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos/" + todoId
        );
        const { title } = await res.json();
        setTodo(title);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodoById(todoId);
  }, [todoId]);

  return (
    <div>
      <h1>Todo Item</h1>
      {loading && <p>Loading...</p>}
      {!loading && <p>{todo}</p>}

      <p>
        <button onClick={nextHandler}>next</button>
      </p>
    </div>
  );
};

export default TodoItem;
