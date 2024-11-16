import React from 'react'
import "./index.css"

const WebsiteCard = () => {
  return (
    <>
      <div className="mcard">
        <div>
          <span className="fs-body manrope-500 dark-50">Your Website is Live!</span>
        </div>
          <img className='w-100 imgT' alt='placeholder-image' src='/assets/images/desktop.png' width=""/>
      </div>
    </>
  );
}

export default WebsiteCard