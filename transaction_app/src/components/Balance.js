import React from 'react'
import IncomeExpenses from './IncomeExpenses';

export const Balance = () => {
    return (
        <div className='hvr-grow'>
            <h2>Company Balance</h2>
            <h1>$0.00</h1>
            <IncomeExpenses />
        </div>
    )
}
