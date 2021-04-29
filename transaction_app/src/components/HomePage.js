import React from 'react'
import { Balance } from './Balance'
import { IncomeExpenses } from './IncomeExpenses'
import { SubContainer } from './SubContainer'

const HomePage = () => {
    return (
        <div className='home-page'>
            <Balance />
            <IncomeExpenses />
            <SubContainer />
        </div>
    )
}

export default HomePage;
