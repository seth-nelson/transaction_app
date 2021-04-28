import React from 'react'
import AddTransactionButton from './AddTransactionButton';
import RemoveTransactionButton from './RemoveTransactionButton'

const AddRemoveTransaction = () => {
    return (
        <div className='add-remove-transaction-container'>
            <AddTransactionButton />
            <RemoveTransactionButton />
        </div>
    )
}

export default AddRemoveTransaction;