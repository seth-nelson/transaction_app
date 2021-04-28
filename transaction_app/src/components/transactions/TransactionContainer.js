import React from 'react'
import AddRemoveTransaction  from './AddRemoveTransaction';
import TransactionCard from './TransactionCard';
import TransactionHeader from './TransactionHeader';

const TransactionContainer = () => {
    return (
        <div className='transaction-container'>
            <TransactionHeader />
            <AddRemoveTransaction />
            <TransactionCard />
        </div>
    )
}

export default TransactionContainer;