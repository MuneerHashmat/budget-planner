import BudgetState from "./context/BudgetState";
import Budget from "./components/Budget";
import AddExpenses from "./components/AddExpenses";
import Expenses from "./components/Expenses";

function App() {
  return (
    <>
      <BudgetState>
        <Budget />
        <AddExpenses />
        <Expenses />
      </BudgetState>
    </>
  );
}

export default App;
