import React from 'react'
import HistoryCard from './HistoryCard';
import HistoryHeader from './HistoryHeader';

const HistoryContainer = () => {
    return (
        <div className='history-container'>
            <HistoryHeader />
            <HistoryCard />
        </div>
    )
}

export default HistoryContainer;