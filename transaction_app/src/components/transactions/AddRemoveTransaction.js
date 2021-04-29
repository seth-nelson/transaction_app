import React from 'react'
import { Link } from 'react-router-dom';

const TransactionButtons = () => {
    return (
        <div className='transaction-buttons-container'>
            <Link to='/AddTransaction'><button className='hvr-shutter-out-horizontal'>Add Transaction</button></Link>
            <button className='hvr-shutter-in-horizontal'>Remove Transaction</button>
        </div>
    )
}

export default TransactionButtons;