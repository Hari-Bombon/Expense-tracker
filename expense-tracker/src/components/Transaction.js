import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';



export const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+';
  
  
  return (
    <li className={transaction.transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.transaction.amount)}</span>
        <button onClick ={() => deleteTransaction(transaction.transaction.id)}className="delete-btn">X</button>
  </li>
  )
}
export default Transaction;
