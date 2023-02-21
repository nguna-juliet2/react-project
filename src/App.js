
import Expenses from "./componets/Expenses";
function App(){
  const expenses = [
    {
      title: 'Toilet paper', 
      amount: 267.7, 
      date: new Date(2021,2,28)
    },
    {
      title: 'new TV', 
      amount: 345.7, 
      date: new Date(2024,2,4)
    },
    {
      title: 'car insurance', 
      amount: 245.7, 
      date: new Date(2023,2,2)
    },
    {
      title: 'new desk', 
      amount: 767.7, 
      date: new Date(2020,9,28)
    }
]
  return(
  <div>
    <h2>lets get started</h2>
    <Expenses expenses={expenses}/>
     
  </div>
  );
}

 
export default App;
