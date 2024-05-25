import { useContext } from "react";
import BudgetContext from "../context/BudgetContext";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Expenses = () => {
  const states = useContext(BudgetContext);
  const expenses = states.expenseState.expenses;
  console.log(expenses);
  return (
    <div className="mt-14">
      <h1 className="text-2xl text-center mb-3">Expenses</h1>

      <div className="w-[70%] mx-auto">
        {!expenses || expenses.length == 0 ? (
          <p className="text-2xl text-red-500 text-center">
            No expenses yet .....
          </p>
        ) : (
          <div className="flex flex-col gap-4 text-xl">
            {expenses.map((item) => (
              <div
                key={item.itemId}
                className="bg-violet-400 p-2 flex justify-between"
              >
                <p className="w-[100px]">{item.itemName}</p>
                <p className="w-[70px]">&#8377; {item.itemCost}</p>
                <button
                  onClick={() => states.removeExpense(item.itemId)}
                  className="hover:scale-105 transition-all"
                >
                  <DeleteForeverIcon />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Expenses;
