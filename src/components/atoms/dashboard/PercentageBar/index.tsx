import React from 'react'
import "./index.css"

interface IPercentageBar {
    progress: number;
}

const PercentageBar: React.FC<IPercentageBar> = ({progress}) => {
  return (
    <div>
        <div className="progressbar">
            <div className="progres primary-700 align-items-center" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="progress-percentage">{progress}%</span>
    </div>
  )
}

export default PercentageBar