import React from 'react'


const TransactionCard = ({ transaction }) => {

    return (
        <div className='transaction-card'>
            <h4>
                {transaction.item}
            </h4>
            <button className='hvr-shutter-in-horizontal'>Remove</button>
        </div>
    )
}

export default TransactionCard;