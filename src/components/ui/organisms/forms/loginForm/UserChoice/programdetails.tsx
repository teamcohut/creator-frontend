import React from 'react'
import Button from '../../../../atoms/forms/Button/index'
import { Link, useNavigate } from 'react-router-dom'
import ProgressBar from '../../../../molecules/forms/ProgressBar'
import { FiArrowLeft, FiUpload } from 'react-icons/fi'
import '../../index.css'
import TextAreaInput from '../../../../atoms/forms/inputs/TextAreaInput'
import TextInput from '../../../../atoms/forms/inputs/TextInput'

const SignUpPage2 = () => {
  const navigate = useNavigate()
  return (
    <>
      <form className='form bg-white d-flex flex-column rounded-5' action="">
        <ProgressBar length={2} page={2} />
        <div className="w-100 d-flex justify-content-between">
          <Link className='primary-700 manrope-600 fs-h3 text-decoration-none d-flex d-lg-none' to={'/'}>Cohut</Link>
          <span className='dark-700 back' onClick={()=>navigate(-1)}><FiArrowLeft /> Back</span>
        </div>
        <div className="d-flex flex-column gap-2">
          <h1 className='manrope-600 primary-950 fs-h2'>Program Details</h1>
          <span className='manrope-500 dark-700 fs-body'>Lets input what makes your learning program special</span>
        </div>

        <div className="d-flex flex-column gap-4">
        <TextInput 
            label="Program Title"
            id="programtitle"
            placeHolder="Enter Title"
            onchange={(e:any)=>console.log(e.target.value)}
          />

          <TextAreaInput 
            label="Description"
            id="description"
            placeHolder="What is your program about?"
            onchange={(e:any)=>console.log(e.target.value)}
          />

          <div className='dashed-border p-3 rounded-2 d-flex flex-column align-items-center justify-content-center text-center'>
              <img src={'/assets/images/Big.png'} alt={'Cohut Logo'} />
                <p className='fs-caption'>Drag-n-drop or <span className='primary-600'>Upload</span> Thumbnail image</p>
          </div>
          <span className='fs-caption primary-400'>(png,jpeg,jpg)</span>
        </div>

        <div className="d-flex flex-column align-items-center gap-3">
          <Button text='Continue' action={(e: any)=>console.log(e.target.value)} type='button' />
        </div>
        <div className="footer w-100 d-flex flex-column align-items-center gap-2">
          <div className="d-flex gap-2">
            <Link className='dark-500 fs-footer text-decoration-none' to={"#"}>Privacy Policy.</Link>
            <Link className='dark-500 fs-footer text-decoration-none' to={"#"}>Help.</Link>
            <Link className='dark-500 fs-footer text-decoration-none' to={"#"}>Visit www.cohut.co</Link>
          </div>
          <span className='dark-500 fs-footer text-decoration-none'>(c) 2024 Cohut</span>
        </div>
      </form>
    </>
  )
}

export default SignUpPage2