import './Expenses.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import { useState } from 'react';

const Expense=(props)=> {
  const [amount, setAmount] = useState(props.amount);

  const addAmount = () => {
    setAmount(amount + 100);
    console.log(amount)
  }


  const deleteExpense=()=>{
    props.onDeleteExpense(props.id);
  }
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2 className='expense-item__title'>{props.title}</h2>
        <div className='expense-item__price'>${amount}</div>
      
      </div>
      <ExpenseDetails LocationOfExpenditure={props.LocationOfExpenditure} />
      <button onClick={deleteExpense} >Delete Expense</button>
      <button onClick={addAmount}>Add</button>
      
    </div>
  );
}

export default Expense;
