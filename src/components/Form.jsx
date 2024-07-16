import noteImg from "../assets/images/notes.png";
import plusImg from "../assets/images/plus.png";
import tickImg from "../assets/images/double-tick.png";

const Form = () => {
  return (
    <section>
      <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={noteImg} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8 bg-no-repeat bg-contain"
        >
          <img src={plusImg} alt="Plus Img" />
        </button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer hover:font-bold">
          <img className="w-4 h-4" src={tickImg} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer hover:font-bold">Clear completed</li>
      </ul>
    </section>
  );
};

export default Form;
