import React, { useContext, useState } from 'react'
import Button from "../../../atoms/Button";
import Header from '../Header';
import { FiPlus } from 'react-icons/fi';
import OverviewCard from '../../../molecules/dashboard/OverviewCard';
import { cardData } from './DashBoardCard';
import Modal from '../Modal';
import OnboardCohortModal from '../../forms/Onboard/OnboardCohortModal';
import UploadParticipants from '../../forms/Onboard/UploadParticipants';
import SendEmail from '../../forms/Onboard/SendEmail';
import { ProgramContext } from '../../../../context/programs/ProgramContext';

const DashBoard = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [currentStep, setCurrentStep] = useState<number>(1);
    const { program } = useContext(ProgramContext)

    console.log(program);
    
    const activeProgram = program.data[0]

    const nextStep = () => {
        setCurrentStep(currentStep+1)
    }
    
    return (
        <>
            <div>
                <Header title="Good morning Admin," subtitle="A Cohort is a group of individuals leanring together through a shared program over a set period">
                    {
                        activeProgram.cohorts.length > 0?
                        <div className='d-flex gap-4'>
                            <Button action={()=>{}} fill={false} type='button' border outline='primary'>
                                <FiPlus className='fs-body' /> Add Task
                            </Button>
                            <Button action={()=>{}} fill type='button' border={false}>
                                <FiPlus className='fs-body' /> Create New Session
                            </Button>
                        </div>:
                        <Button action={() => setModalOpen(true)} fill gap type="button" border={false}>
                            <FiPlus className="fs-body" />
                            Onboard Your First Cohort
                        </Button>
                    }
                </Header>

                <div className="overview-container d-flex">
                    {cardData.map((card, index) => (
                        <OverviewCard key={index} {...card} />
                    ))}
                </div>

                {/* <Calendar /> */}
            </div>
            <Modal open={modalOpen} setModalOpen={setModalOpen} >
                {
                    currentStep === 1 ?
                    <OnboardCohortModal onSubmit={nextStep} />:
                    currentStep === 2?
                    <UploadParticipants onSubmit={nextStep} />:
                    currentStep === 3?
                    <SendEmail onSubmit={()=>{
                        setCurrentStep(1)
                        setModalOpen(false)
                    }} />:
                    <></>
                }
            </Modal>
        </>
    )
}

export default DashBoard