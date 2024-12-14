import { FC } from 'react';
import { FiX } from 'react-icons/fi'
import { ISuccessCard } from '../../../../@types/auth.interface'

const SettingsStatusCard: FC<ISuccessCard> = ({ title, description, icon, email, width, children }) => {
  return (
    <>
        <form className='form bg-white d-flex flex-column align-items-center gap-3 text-center rounded-5' action="">
            <div className="w-100 d-flex justify-content-end">
                <FiX style={{fontSize: '24px'}}/>
            </div>
            
            <div className="d-flex flex-column align-items-center gap-2 head">
                {icon}
                <h1 className='manrope-600 primary-950 fs-h2 pb-4 pt-1'>{title}</h1>
                {email && <span className='manrope-500 primary-700 fs-body'>{email}</span>}
                <span className='manrope-500 dark-700 fs-body' style={width ? { width: `${width}%`} : {}}>{description}</span>
            </div>
            {children}
        </form>
    </>
  )
}

export default SettingsStatusCard
