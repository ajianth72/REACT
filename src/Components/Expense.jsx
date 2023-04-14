import './Expenses.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

function Expense(props) {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2 className='expense-item__title'>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <ExpenseDetails LocationOfExpenditure={props.LocationOfExpenditure} />
    </div>
  );
}

export default Expense;
