import React from 'react'
import './index.css'

const ProgressBar:React.FC<IProgressbar> = ({ length, page }) => {
  return (
    <>
        <div className='d-flex gap-1 progress-div'>
            {
                Array(length).fill(0).map((el, i) => (
                    // {console.log(i)}
                    <div className={`progress-page w-100 p-1 ${ i+1 <= page? 'active': 'inactive'}`}></div>
                ))
                
            }
        </div>
    </>
  )
}

interface IProgressbar {
    length: number,
    page: number
}

export default ProgressBar