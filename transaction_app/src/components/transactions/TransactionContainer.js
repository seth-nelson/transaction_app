import React from 'react'
import AddRemoveTransaction  from './AddRemoveTransaction';
import TransactionList from './TransactionCard';
import TransactionHeader from './TransactionHeader';

const TransactionContainer = () => {
    return (
        <div className='transaction-container'>
            <TransactionHeader />
            <AddRemoveTransaction />
            <TransactionList />
        </div>
    )
}

export default TransactionContainer;