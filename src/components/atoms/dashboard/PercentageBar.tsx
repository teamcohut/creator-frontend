import React from 'react'
import "../style.css"

interface IPercentageBar {
    progress: number;
}

const PercentageBar: React.FC<IPercentageBar> = ({progress}) => {
  return (
    <div className='w-100 d-flex align-items-center gap-2'>
        <div className="percentage-bar w-100">
            <div className="percentage-progress primary-700 align-items-center" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="manrope-600 fs-caption primary-700">{progress}%</span>
    </div>
  )
}

export default PercentageBar