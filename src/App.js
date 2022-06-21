import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import {IncomeExpenses} from "./components/IncomeExpenses";
import {TransactionList} from "./components/TransactionList";
import {AddTransaction} from "./components/AddTransaction";
import Chart from './components/Chart'
import React, { useContext } from "react";

import {GlobalProvider,GlobalContext} from "./context/GlobalState"



function App() {
  const { transactions } = useContext(GlobalContext);


  
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
        <Chart  displayLegend={false} />
      </div>
    </GlobalProvider>
  );
}

export default App;
