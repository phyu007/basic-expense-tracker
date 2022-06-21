import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  var obj = [...transactions];
  obj.sort((a,b) => a.amount - b.amount)

  return (
    <>
      <h3>Expense Ordered by Amount</h3>
      <ul id="list" className="list">
        {obj.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
