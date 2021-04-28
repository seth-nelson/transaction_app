import React from 'react'

const TransactionButtons = () => {
    return (
        <div className='transaction-buttons-container'>
            <button className='hvr-shutter-out-horizontal'>Add Transaction</button>
            <button className='hvr-shutter-in-horizontal'>Remove Transaction</button>
        </div>
    )
}

export default TransactionButtons;