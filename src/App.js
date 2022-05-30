import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
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
      <NewExpense></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
