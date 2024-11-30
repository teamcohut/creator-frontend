import React from 'react'
import Button from "../../../atoms/Button";
import Header from '../Header';
import { FiPlus } from 'react-icons/fi';
import OverviewCard from '../../../molecules/dashboard/OverviewCard';
import { cardData } from './DashBoardCard';
import Title from '../Title';
import Calendar from '../Calendar/Calendar';

const DashBoard = () => {
    return (
        <div>
            <Header title="Good morning Admin," subtitle="A Cohort is a group of individuals leanring together through a shared program over a set period">
                <Button action={() => { }} fill gap type="button" border={false}>
                    <FiPlus className="fs-body" />
                    Onboard Your First Cohort
                </Button>
            </Header>

            <div className="overview-container d-flex">
                {cardData.map((card, index) => (
                    <OverviewCard key={index} {...card} />
                ))}
            </div>

            <Calendar />
        </div>
    )
}

export default DashBoard