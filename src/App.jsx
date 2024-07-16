import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoLists from "./components/TodoLists";
import Filters from "./components/Filters";

const App = () => {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      {/* Header section  */}
      <Header />
      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        {/* Form section */}
        <Form />
        <hr className="mt-4" />
        {/* Todo Lists section */}
        <TodoLists />
        <hr className="mt-4" />
        {/* Filter section */}
        <Filters />
      </div>
    </div>
  );
};

export default App;
