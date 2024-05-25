import { useState } from "react";
import { useContext } from "react";
import BudgetContext from "../context/BudgetContext";

const AddExpenses = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);
  const states = useContext(BudgetContext);

  const addExpense = () => {
    if (!name || !cost) {
      alert("Both fields are required!");
      return;
    }
    if (cost <= 0) {
      alert("Please enter a valid cost");
      return;
    }
    if (cost.includes(".")) {
      alert("Enter an integer value for cost");
      return;
    }
    states.addNewExpense(name, cost);
    setName("");
    setCost(0);
  };

  return (
    <div className=" mt-14">
      <h1 className="text-2xl text-center mb-3">Add Expenses</h1>
      <div className="flex items-center justify-center w-[70%] mx-auto gap-7">
        <div className="flex gap-2 items-center">
          <span className="text-xl">Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-1 text-xl outline-none border-2 border-gray-400 rounded-lg"
          />
        </div>

        <div className="flex gap-2 items-center">
          <span className="text-xl">Cost:</span>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="p-1 text-xl outline-none border-2 border-gray-400 rounded-lg"
          />
        </div>

        <button
          onClick={addExpense}
          className=" bg-violet-400 px-3 py-1 shadow-lg rounded-lg hover:scale-105 transition-all text-xl"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddExpenses;
