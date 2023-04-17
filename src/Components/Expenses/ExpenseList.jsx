import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = (props) => {
  let expeenseContent = (
    <p className="li-item">Only single Expense here. Please add more...</p>
  );

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  } else if (props.items.length === 1) {
    return (
      <div>
        {expeenseContent}
        <ul className="expenses-list">
          <ExpenseItem
            key={props.items[0].id}
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          />
        </ul>
      </div>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;

