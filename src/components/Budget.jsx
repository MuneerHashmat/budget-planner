import { useContext } from "react";
import BudgetContext from "../context/BudgetContext";

const Budget = () => {
  const states = useContext(BudgetContext);
  const budget = states.expenseState.budget;
  const totalExpenses = states.expenseState.expenses.reduce((total, item) => {
    return (total += item.itemCost);
  }, 0);

  return (
    <div>
      <h1 className="text-center text-3xl w-screen bg-violet-400 py-3 font-bold font-sans mb-10">
        BUDGET PLANNER
      </h1>
      <div className="flex justify-around text-2xl w-[80%] mx-auto">
        <p className=" px-3 py-2 bg-gray-100 border border-gray-200 rounded-lg">
          Budget: <span className="font-bold"> &#8377;{budget}</span>
        </p>
        <p className=" px-3 py-2 bg-green-100 border border-green-200 rounded-lg">
          Remaining:{" "}
          <span className="font-bold">&#8377;{budget - totalExpenses}</span>
        </p>
        <p className=" px-3 py-2 bg-red-100 border border-red-200 rounded-lg">
          Spent so far:{" "}
          <span className="font-bold">&#8377;{totalExpenses}</span>
        </p>
      </div>
    </div>
  );
};

export default Budget;
