import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import TransactionCard from './TransactionCard';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div className='transaction-list'>
            {transactions.map(transaction => (<TransactionCard key={transaction.id} transaction={transaction}/>))}
        </div>
    )
}

export default TransactionList;