import './Expenses.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const Expense=(props)=> {

  const deleteExpense=()=>{
    props.onDeleteExpense(props.id);
  }
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2 className='expense-item__title'>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <ExpenseDetails LocationOfExpenditure={props.LocationOfExpenditure} />
      <button onClick={deleteExpense} >Delete Expense</button>
    </div>
  );
}

export default Expense;
