import Expense from "../components/Expense/Expense";
import Income from "../components/Income/Income";

import ListExpense from "../components/ListExpense/ListExpense";
import ListIncome from "../components/ListIncome/ListIncome";

const ListPresentation = () => {
  return (
    <div className="list-container">
      <div className="expense-container">
        <h2>Expenses:</h2>
        <Expense>
          <ListExpense>name, amount, category</ListExpense>
        </Expense>
      </div>
      <div className="income-container">
        <h2>Incomes:</h2>
        <Income>
          <ListIncome>name, amount, category</ListIncome>
        </Income>
      </div>
    </div>
  );
};

export default ListPresentation;