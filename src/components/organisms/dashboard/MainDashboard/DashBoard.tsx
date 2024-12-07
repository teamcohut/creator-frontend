import React, { FC, useContext } from 'react'
import Button from "../../../atoms/Button";
import Header from '../Header';
import { FiPlus } from 'react-icons/fi';
import OverviewCard from '../../../molecules/dashboard/OverviewCard';
import { cardData } from './DashBoardCard';
import { ProgramContext } from '../../../../context/programs/ProgramContext';
import { TModal } from '../../../../@types/dashboard.interface';

const DashBoard: FC<IDashboard> = ({ openModal }) => {
    const { program } = useContext(ProgramContext)

    console.log(program);
    
    const activeProgram = program[0]
    
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
                        <Button action={() => openModal('cohort')} fill gap type="button" border={false}>
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
        </>
    )
}

interface IDashboard {
    openModal: (modal: TModal) => void;
}

export default DashBoard