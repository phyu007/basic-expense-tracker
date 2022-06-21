import React,{useState,useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as moment from 'moment'

export const AddTransaction = () => {
    const[text,setText] = useState('');
    const[amount,setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);
    const [startDate, setStartDate] = useState(new Date());

    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount : +amount,
        startDate : moment(startDate).format('MMMM-YYYY'),
      }
      addTransaction(newTransaction)
    }
  return (
    <>     
    <h3>Add new transaction</h3>
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >Amount <br />
          (negative - expense, positive - income)</label
        >
        <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
      </div>
      <div className="form-control">
        <label htmlFor="startDate">Date <br /></label>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
      <button className="btn">Add transaction</button>
    </form></>
  )
}
