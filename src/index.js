import { render } from "react-dom";
import './index.css';

import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom'

import Expenses from './routes/expenses';
import Expense from './routes/expense'
import Invoices from './routes/invoices';
import Invoice from "./routes/invoice";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter> {/* main router for instructing the browser */}
  <Routes>        {/* Main Route containing other nested Routes. */}
    <Route path ="/" element={<App />}>
      <Route path="expenses" element={<Expenses/>}>
          <Route index element={
            <main style={{ padding : "1rem "}}>
              <h3> Select an Expense to view Details </h3>
            </main>
          }/>

          <Route path=":expenseId" element={<Expense/>} />
      </Route>

      <Route path="invoices" element={<Invoices/>}>
        <Route index element ={
          <main style={{ padding : "1rem"}}>
          <h3> Select an Invoice </h3>
          </main>
        }
        /> { /* index route so that there is no empty elemennt before you click a link */ }

        <Route path=":invoiceId" element={<Invoice />} /> {/*you can nest another child root witin a paret route that is nested. Also notice that ":invoiceId" is a dynamic segment that will be used as an object param in the linked Component.*/}
      </Route>

      <Route path="*"
       element={
         <main style={{ padding : "1rem"}}>
          <p> There is nothing to show here!</p>
        </main>
       }
       />  { /*This is a no match Route,when the link cannot be found within the app*/}
    </Route>

  </Routes>
  </BrowserRouter>
  ,
   rootElement
);
