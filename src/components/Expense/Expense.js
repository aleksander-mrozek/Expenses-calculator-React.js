import styles from "./Expense.module.css";

const Expense = ({children}) => {
  return (
    <ul>
      {children}
    </ul>
  );
};

export default Expense;