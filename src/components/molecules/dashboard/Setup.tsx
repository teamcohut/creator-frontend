import { FC } from 'react';
import { ISetup } from '../../../@types/dashboard.interface'

const Setup: FC<ISetup> = ({icon, subtitle1, title, subtitle2}) => {
  return (
    <div className='d-flex flex-column align-items-center gap-2'>
      <span>{icon}</span>
      <span className="manrospane-500 dark-300 fs-body">
          {subtitle1}
      </span>
      {title && <p className="manrope-600 fs-body dark-300">{title}</p>}
      <span className="manrope-600 dark-700 fs-body">
          {subtitle2}
      </span>
      
    </div>
  )
}

export default Setup
