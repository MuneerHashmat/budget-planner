import { useEffect, useState } from "react";
import BudgetContext from "./BudgetContext";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const BudgetState = (props) => {
  const initialExpenseState = {
    budget: 2000,
    expenses: [],
  };

  const state =
    JSON.parse(localStorage.getItem("state")) || initialExpenseState;

  const [expenseState, setExpenseState] = useState(state);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(expenseState));
  }, [expenseState]);

  const addNewExpense = (name, cost) => {
    const newExpense = {
      itemId: uuidv4(),
      itemName: name,
      itemCost: parseInt(cost),
    };
    setExpenseState({
      ...expenseState,
      expenses: [...expenseState.expenses, newExpense],
    });
  };

  const removeExpense = (id) => {
    setExpenseState({
      ...expenseState,
      expenses: expenseState.expenses.filter((item) => item.itemId != id),
    });
  };

  return (
    <BudgetContext.Provider
      value={{ expenseState, addNewExpense, removeExpense }}
    >
      {props.children}
    </BudgetContext.Provider>
  );
};

BudgetState.propTypes = {
  children: PropTypes.node,
};

export default BudgetState;
