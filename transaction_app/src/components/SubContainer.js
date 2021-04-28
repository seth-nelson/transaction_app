import React from 'react'
import { TransactionContainer }  from './components/TransactionContainer';
import { HistoryContainer }  from './components/HistoryContainer';


export const SubContainer = () => {
    return (
        <div>
            <TransactionContainer />
            <HistoryContainer />
        </div>
    )
}