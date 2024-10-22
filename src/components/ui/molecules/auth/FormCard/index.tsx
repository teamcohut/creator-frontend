import React from 'react'

const FormCard: React.FC<IFormCard> = ({children}) => {
  return (
    <>
        <div className='form-card bg-white rounded-lg py-md pt-md-lg'>
            { children }
        </div>
    </>
  )
}

interface IFormCard {
    children:  React.ReactNode

}

export default FormCard