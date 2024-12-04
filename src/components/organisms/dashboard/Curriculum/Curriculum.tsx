import React from 'react'
import Button from "../../../atoms/Button";
import Header from '../Header';
import { FiPlus } from 'react-icons/fi';
import OverviewCard from '../../../molecules/dashboard/OverviewCard';
import { cardData } from './CurriculumCard';
import Title from '../Title';

const Curriculum = () => {
    return (
        <div>
            <Header title="Curriculum" subtitle="View and manage your programs curriculum here">
                <Button action={() => { }} fill gap type="button" border={false}>
                    <FiPlus className="fs-body" />
                    Add New Course
                </Button>
            </Header>

            <div className="overview-container d-flex">
                {cardData.map((card, index) => (
                    <OverviewCard key={index} {...card} />
                ))}
            </div>

            <div>
                <Title text='My First Bootcamp'>
                    <Button action={() => { }} fill gap type="button" border={false}>
                        <FiPlus className="fs-body" />
                        Add New Course
                    </Button>
                </Title>

                <div className='d-flex flex-column'>
                    <p>Hands-on projects, mentorship, job placement assistance.</p>
                    <div className='d-flex flex-row gap-3'>
                        <span>Begins: 1st Oct, 2024</span>
                        <span>Ends: 2nd Oct, 2024</span>
                    </div>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-2'>
                    <h4 className='manrope-600 fs-h4 primary-950'>Courses </h4>
                    <span className='manrope-500 fs-footer primary-950 bg-secondary-450 px-2 py-1 rounded-4'>5</span>
                </div>

                <div className='d-flex align-items-center gap-2'>
                    <button className="btn rounded-pill bg-secondary-450 manrope-500 primary-950">All</button>
                    <button className="btn rounded-pill border-secondary manrope-500 dark-400">Active</button>
                    <button className="btn rounded-pill border-secondary manrope-500 dark-400">Inactive</button>
                    <button className="btn rounded-pill border-secondary manrope-500 dark-400">Closed</button>
                </div>

            </div>
        </div>
    )
}

export default Curriculum