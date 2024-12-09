import React, { useContext, useState } from 'react'
import { FiChevronDown, FiChevronUp, FiPlus } from 'react-icons/fi'
import '../style.css'
import { ProgramContext } from '../../../context/programs/ProgramContext'
import { TActiveModal } from '../../../@types/dashboard.interface'
import SetupCohortModal from '../../organisms/dashboard/modals/SetupCohortModal'

const CohortsDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [activeModal, setActiveModal] = useState<TActiveModal>(null)
    const { activeProgram, cohorts, activeCohort } = useContext(ProgramContext)

    console.log(cohorts);
    
    const openModal = (modal: TActiveModal) => {
        setActiveModal(modal)
        setModalOpen(true)
    }
    return (
        <>
            {
                activeModal === 'cohort' &&
                <SetupCohortModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            }
            <div className='programs w-100'>
                <button className='current-program d-flex align-items-center w-100' onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <img className='rounded-circle' src={activeProgram.logo} width={36} height={36} alt="" />
                    <span className='manrope-500 fs-body primary-950'>{activeProgram.title}</span>
                    {
                        dropdownOpen ?
                            <FiChevronUp className='manrope-500 fs-body primary-950' /> :
                            <FiChevronDown className='manrope-500 fs-body primary-950' />
                    }
                </button>
                <div className={`flex-column py-3 program-dropdown ${dropdownOpen ? 'd-flex' : 'd-none'}`}>
                    <div className='d-flex flex-column gap-3 py-2'>
                        {
                            cohorts?.map((el: any, i: number) => (
                                <div className='other-program d-flex align-items-center px-3 py-2'>
                                    <img className='rounded-circle' src={activeProgram.logo} width={24} height={24} alt="" />
                                    <span className='manrope-500 fs-body primary-950 d-flex flex-column align-items-start'>
                                        Cohort {el.number}
                                    </span>
                                </div>
                            ))
                        }
                        <button onClick={() => openModal('cohort')} className='border-none other-program d-flex align-items-center px-3 py-2 fs-body primary-700'>
                            <FiPlus />
                            <span className='manrope-500'>Onboard New Cohort</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CohortsDropdown