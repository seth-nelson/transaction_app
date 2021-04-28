import React from 'react'

const IncomeExpenses = () => {
    return (
        <React.Fragment>
            <div className='income'>
                <h3>Income</h3>
                <h4>+$0.00</h4>
            </div>
            <div className='expenses'>
                <h3>Expenses</h3>
                <h4>-$0.00</h4>
            </div>
        </React.Fragment>
    )
}

export default IncomeExpenses;