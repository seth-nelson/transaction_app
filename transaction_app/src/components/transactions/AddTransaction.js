import React, { useState } from 'react'

const AddTransaction = () => {
const [text, setText] = useState(''); // text
const [type, setType] = useState(''); // text
const [amount, setAmount] = useState(); // number
const [department, setDepartment] = useState(''); // text

    return (
        <form className='form'>
            <div className='transaction-form'>
                <label hmtlFor='amount'>Amount</label>
                <input type='text' value={amount} onChange={(e) => setText(e.target.value)} placeholder='Enter Amount..'></input>
            </div>
            <div className='transaction-form'>
                <label hmtlFor='amount'>Type</label>
                <input type='text' value={type} onChange={(e) => setType(e.target.value)} placeholder='Enter Type..'></input>
            </div>
            <div className='transaction-form'>
                <label hmtlFor='text'>Description</label>
                <input type='text' value={text} onChange={(e) => setAmount(e.target.value)} placeholder='Description..'></input>
            </div>
            <div className='transaction-form'>
                <label hmtlFor='text'>Department</label>
                <input type='text' value={department} onChange={(e) => setDepartment(e.target.value)} placeholder='Department..'></input>
            </div>
            <button className='hvr-shutter-out-horizontal'>Add Transaction</button>
        </form>
    )
}

export default AddTransaction;