import React from 'react'
import Header from '../Header'
import SessionList from './SessionList'
import SessionResource from './SessionResource'

const SessionDetails = () => {
    return (
        <div>
            <p>Back to Learning</p>
            <div className='d-flex flex-row gap-2'>
                <div className='w-75'>
                    <h2>Learner Onboarding Call</h2>
                    <p>Join us for a live, interacting session to kickstart your learning journey. We'll cover the basics of the program, exploring courses, interacting with instructors, and connecting with fellow learners.</p>
                    <span>11am - 12pm WAT</span>
                    <span>22nd Nov</span>
                    <span>meet.google.com/vnm-ytr-tyu</span>
                </div>
                <div className='w-25 px-3'>
                    <h5>Danger Zone</h5>
                    <p>Delete Session</p>
                </div>
            </div>
            <div className='w-25'>
                <h5>Additional Resources</h5>
                <p><a href="https://github.com/">https://github.com/teamcohut/creator-frontend/tree/master/src/components/organisms/dashboard</a></p>
            </div>
        </div>
    )
}

export default SessionDetails