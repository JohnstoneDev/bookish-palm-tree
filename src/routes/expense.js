import { getExpense } from '../data';
import { useParams } from 'react-router-dom';


export default function Expense(){
  let params = useParams();
  let expense = getExpense(parseInt(params.expenseId, 10));

   return (
    <main style={{ padding: "1rem" }}>
       <h2>Total Spent: {expense.cost}</h2>
       <p>
          Spent on : {expense.name}
       </p>
       <p>Date: {expense.date}</p>
    </main>
   )
}
