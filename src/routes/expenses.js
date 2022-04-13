import { getExpenses } from '../data'
import { Link,Outlet } from "react-router-dom";

export default function Expenses(){
  let expenses = getExpenses();

   return (
     <div style={{ display : "flex "}}>
     <main style={{padding : "1rem 0" , display : "flex" , flexDirection : "column"}}>
     {expenses.map((expense) => {
       return (
         <Link key={expense.referenceNumber} to={`/expenses/${expense.referenceNumber}`} style={{ padding : "10px"}}>
            {expense.name}
         </Link>)
     })}
     </main>
     <Outlet />
     </div>
   )
}
