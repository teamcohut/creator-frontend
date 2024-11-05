import {FC} from 'react'
import './index.css'
import { IProgressbar } from '../../../../@types/progressbar.interface'

const ProgressBar:FC<IProgressbar> = ({ length, page, height, absolute }) => {
  return (
    <>
        <div className={`d-flex gap-1 progress-div ${absolute && 'absolute'}`}>
            {
                Array(length).fill(0).map((el, i) => (
                    <div style={{paddingBlock: height/2}} className={`progress-page w-100 h-fit ${ i+1 <= page? 'active': 'inactive'}`}></div>
                ))
            }
        </div>
    </>
  )
}

export default ProgressBar