import {FC} from 'react'
import './index.css'
import { IProgressbar } from '../../../../@types/progressbar.interface'

const ProgressBar:FC<IProgressbar> = ({ length, page }) => {
  return (
    <>
        <div className='d-flex gap-1 progress-div'>
            {
                Array(length).fill(0).map((el, i) => (
                    <div className={`progress-page w-100 p-1 ${ i+1 <= page? 'active': 'inactive'}`}></div>
                ))
            }
        </div>
    </>
  )
}

export default ProgressBar