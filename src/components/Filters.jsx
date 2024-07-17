import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorsSelected, statusChanged } from "../redux/filters/actions";

const totalLeftTasks = (remainingTodos) => {
  switch (remainingTodos) {
    case 0:
      return "No task";
    case 1:
      return "1 task";

    default:
      return `${remainingTodos} tasks`;
  }
};
const Filters = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const remainingTodos = todos.filter((todo) => !todo.completed).length;
  const handleStatusChanged = (status) => {
    dispatch(statusChanged(status));
  };
  const { status, colors } = filters;
  const handleSelectedColors = (color) => {
    if (colors.includes(color)) {
      dispatch(colorsSelected(color, "remove"));
    } else {
      dispatch(colorsSelected(color, "added"));
    }
  };
  return (
    <section className="mt-4 flex justify-between text-xs text-gray-500 font-medium">
      <p>{totalLeftTasks(remainingTodos)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleStatusChanged("All")}
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChanged("Incomplete")}
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChanged("Complete")}
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleSelectedColors("green")}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors?.includes("green") && "bg-green-500"
          }`}
        ></li>
        <li
          onClick={() => handleSelectedColors("red")}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors?.includes("red") && "bg-red-500"
          }`}
        ></li>
        <li
          onClick={() => handleSelectedColors("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors?.includes("yellow") && "bg-yellow-500"
          }`}
        ></li>
      </ul>
    </section>
  );
};

export default Filters;
