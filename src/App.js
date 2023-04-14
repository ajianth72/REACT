import Expense from "./Components/Expenses/Expense";
const  App=()=>{
  const expenses=[
    {
      date :new Date(2021,1,15),
      title :"Toilet Paper",
      amount :94.12,
      LocationOfExpenditure: "Supermarket"
    },
    {
      date :new Date(2021,4,21),
      title : "New Tv",
      amount :799.49,
      LocationOfExpenditure: "Electronics Store"
    },
    {
      date :new Date(2021,5,28),
      title : "Car Insurance",
      amount :294.97,
      LocationOfExpenditure: "Insurance Company"
    },
    {
      date :new Date(2022,2,28),
      title : "New Desk",
      amount :450.97,
      LocationOfExpenditure: "Furniture Store"
    },
  ]

  return (
    <div>
      {expenses.map(expense => (
        <Expense
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          LocationOfExpenditure={expense.LocationOfExpenditure}
        />
      ))}
    </div>
  );
}

export default App;

