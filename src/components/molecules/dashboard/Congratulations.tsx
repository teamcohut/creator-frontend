
import { FC } from 'react'
import { FiBookOpen } from 'react-icons/fi'
import Button from '../../atoms/Button'
import { TModal } from '../../../@types/dashboard.interface'

const Congratulations: FC<ICongratulations> = ({ clear, openModal }) => {

    return (
        <>
            <div className='form bg-secondary-450 d-flex flex-column align-items-center gap-4 text-center rounded-5 mx-auto'>

                <div className="d-flex flex-column align-items-center gap-2 w-75 head">
                    {<FiBookOpen className='fiBookOpen' />}
                    <h1 className='manrope-600 primary-950 fs-h2'>Congratulations</h1>
                    <p className='manrope-500 dark-700 fs-body'>You have successfully setup your program.</p>
                    <p className='manrope-500 dark-700 fs-body'>Create your first Cohort to launch your program</p>
                </div>
                <div className="footer w-100 d-flex flex-row align-items-center gap-2">
                    <Button children='Go to Dashboard' type='button' action={clear} fill={false} outline='primary' border />
                    <Button children='Onboard New Cohort' type='button' action={()=>openModal('cohort')} fill={true} />
                </div>
                <div>
                    <p>A Cohort is a group of individuals learning together through a shared program over a set period
                        <span>Onboard yours today</span>
                    </p>
                </div>
            </div>
        </>
    )
}

interface ICongratulations {
    clear: () => void;
    openModal: (modal: TModal) => void;
}

export default Congratulations