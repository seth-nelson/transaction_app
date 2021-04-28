import React from 'react'
import TransactionContainer  from './transactions/TransactionContainer';
import AddRemoveTransaction  from './transactions/AddRemoveTransaction';
import HistoryContainer  from './HistoryContainer';

export const SubContainer = () => {
    return (
        <div className='sub-container'>
            <AddRemoveTransaction />
            <TransactionContainer />
            <HistoryContainer />
        </div>
    )
}