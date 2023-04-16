import Expense from "./Components/Expenses/Expense";
import { useState } from "react";
const  App=()=>{
  const [expenses,setExpenses]=useState([
    {
      date :new Date(2021,1,15),
      title :"Toilet Paper",
      amount :94.12,
      LocationOfExpenditure: "Supermarket",
      id:"el-1"
    },
    {
      date :new Date(2021,4,21),
      title : "New Tv",
      amount :799.49,
      LocationOfExpenditure: "Electronics Store",
      id :"el-2"
    },
    {
      date :new Date(2021,5,28),
      title : "Car Insurance",
      amount :294.97,
      LocationOfExpenditure: "Insurance Company",
      id:"el-3"
    },
    {
      date :new Date(2022,2,28),
      title : "New Desk",
      amount :450.97,
      LocationOfExpenditure: "Furniture Store",
      id:"el-4"
    },
  ]);
  const handleDeleteExpense = (expenseId) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== expenseId);
    setExpenses(updatedExpenses);
  }

  return (
    <div>
      {expenses.map(expense => (
        <Expense
          key={expense.id} // add a key prop to avoid a warning
          id={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          LocationOfExpenditure={expense.LocationOfExpenditure}
          onDeleteExpense={handleDeleteExpense}
        />
      ))}
    </div>
  );
}

export default App;

