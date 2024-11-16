import {FC} from 'react'
import './index.css'
import { IProgressbar } from '../../../@types/progressbar.interface'

const ProgressBar:FC<IProgressbar> = ({ length, page, height, absolute, gap, rounded }) => {
  return (
    <>
        <div className={`d-flex progress-div ${gap && 'gap-1'} ${absolute && 'absolute'} ${rounded && 'rounded-pill'}`}>
            {
                Array(length).fill(0).map((el, i) => (
                    <div key={i} style={{paddingBlock: height/2}} className={`progress-page w-100 h-fit ${ i+1 <= page? 'active-page': 'inactive-page'}`}></div>
                ))
            }
        </div>
    </>
  )
}

export default ProgressBar