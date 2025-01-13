
import { FC, useState } from 'react'
import { FiBookOpen } from 'react-icons/fi'
import Button from '../../atoms/Button'
import { TModal } from '../../../@types/dashboard.interface'
import SetupCohortModal from '../../organisms/dashboard/modals/SetupCohortModal'

const Congratulations: FC<ICongratulations> = ({ clear, openModal }) => {
    const [modal, setModal] = useState({ name: null, open: false } as {
        name: TModal;
        open: boolean;
    });
    const setModalOpenState = (open: boolean, name: TModal) => {
        setModal({ name, open });
    };

    return (
        <>
            <div className='bg-white form d-flex flex-column align-items-center gap-4 text-center rounded-5 mx-auto'>

                <div className="d-flex flex-column align-items-center gap-2 w-75 head">
                    {<FiBookOpen className='fiBookOpen' />}
                    <h1 className='manrope-600 primary-950 fs-h2'>Congratulations</h1>
                    <p className='manrope-500 dark-700 fs-body'>You have successfully setup your program.</p>
                    <p className='manrope-500 dark-700 fs-body'>Create your first Cohort to launch your program</p>
                </div>
                <div className="footer w-100 d-flex flex-row align-items-center gap-2">
                    <Button children='Go to Dashboard' type='button' action={clear} fill={false} outline='primary' border />
                    <Button children='Onboard New Cohort' type='button' action={() => setModal((prev) => ({ open: true, name: "cohort" }))} fill={true} />
                </div>
                <div>
                    <p>A Cohort is a group of individuals learning together through a shared program over a set period. <span> Onboard yours today</span>
                    </p>
                </div>
            </div>
            {modal.name === "cohort" && (
                <SetupCohortModal
                    modalOpen={modal.open}
                    setModalOpen={setModalOpenState}
                />
            )}
        </>
    )
}

interface ICongratulations {
    clear: () => void;
    openModal: (modal: TModal) => void;
}

export default Congratulations
