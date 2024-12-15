import React from 'react'
import Button from '../atoms/Button';
import { FiArrowRight } from 'react-icons/fi';
import "../style.css"

const WebsiteCard = () => {
  return (
    <>
      <div className="website-card d-flex relative py-3">
        <div>
          <span className="fs-body manrope-500 dark-50 no-wrap">Your Website is Live!</span>
          <Button
            action={() => { }}
            fill={false}
            outline='white'
            type='button'
            border
            gap>
            Visit Website
            <FiArrowRight />
          </Button>
        </div>
        <img className='w-100 imgT' alt='placeholder-image' src='/assets/images/desktop.png' width="" />
      </div>
    </>
  );
}

export default WebsiteCard