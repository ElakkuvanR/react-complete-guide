import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 300,
      date: new Date(2022, 5, 28),
    },
    {
      title: "Car Wash",
      amount: 111,
      date: new Date(2022, 3, 1),
    },
    {
      title: "Friends Birthday Gift",
      amount: 1500,
      date: new Date(2022, 4, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started here!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
