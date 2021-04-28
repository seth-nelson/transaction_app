import React from 'react'
import TransactionContainer  from './transactions/TransactionContainer';
import HistoryContainer  from './HistoryContainer';

export const SubContainer = () => {
    return (
        <div className='sub-container'>
            <TransactionContainer />
            <HistoryContainer />
        </div>
    )
}