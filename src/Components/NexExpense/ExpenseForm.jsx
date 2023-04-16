import React  from "react";
import './ExpenseForm.css';
import { useState } from "react";
const ExpenseForm=()=>{
    const [enteredtitle,setenteredtitle]= useState(''); 
    const [enteredAmount,setenteredAmount]=useState('');
    const [enteredDate,setenteredDate]=useState('');


    const titleChangeHanler=(event)=>{
        setenteredtitle(event.target.value);
    };

    const amountChangeHandler=(event)=>{
        setenteredAmount(event.target.value);
    }
    const dateChangeHandler =(event)=>{
        setenteredDate(event.target.value);
    }

    const onSubmitHandler=(event)=>{
        event.preventDefault();

        const expensData={
            title:enteredtitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        console.log(expensData)
    }
    return <form action="" onSubmit={onSubmitHandler}>
        
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" onChange={titleChangeHanler} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="" >Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>

    </form>
    
    
}
export default ExpenseForm;