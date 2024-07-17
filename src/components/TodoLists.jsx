import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoLists = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const { status, colors } = filters;
  const statusFilter = (todo) => {
    switch (status) {
      case "Incomplete":
        return !todo.completed;
      case "Complete":
        return todo.completed;

      default:
        return todo;
    }
  };
  const colorsFilter = (todo) => {
    if (colors.length > 0) {
      return colors.includes(todo.color);
    } else {
      return todo;
    }
  };
  return (
    <section className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {/* Todo Item */}
      {todos
        .filter(statusFilter)
        .filter(colorsFilter)
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
    </section>
  );
};

export default TodoLists;
