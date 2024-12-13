import { FiLink, FiTrash2, FiX } from 'react-icons/fi'
import DateInput from '../../../components/atoms/inputs/DateInput'
import { TextInput2 } from '../../../components/atoms/inputs/TextInput'
import TextAreaInput from '../../../components/atoms/inputs/TextareaInput'

const CohortSettings = () => {
  const tracks = [
    "Software Engineering",
    "Design",
    "Baking",
    "Software Engineering",
    "Design",
    "Baking",
    "Software Engineering",
    "Design",
    "Baking",
    "Software Engineering",
    "Design",
    "Baking",
  ]
  return (
    <div className='d-flex gap-133 align-items-start pt-4'>
      <div className='w-60'>
        <div className='d-flex gap-2'>
          <span className='fs-body manrope-600 primary-950 pt-2'>Cohort Number</span>
          <p className='d-flex justify-content-center align-items-center rounded-pill border w-78 h-48'> 1 </p>
        </div>
        <div className="d-flex flex-row align-items-end gap-3 pt-4 pb-4">
            <DateInput
              id="startDate"
              onchange={() => {}}
              placeHolder=""
              label="Set Cohort Duration"
            />
            <h3 className='dark-700'>-</h3>
            <DateInput
              id="endDate"
              onchange={() => {}}
              placeHolder=""
            />
          </div>

          <span className='fs-body manrope-600 primary-950'>Track</span>
          {/* Tracks */}
        <div className='d-flex flex-wrap border gap-1 px-4 py-2 rounded-5'>
          {tracks.map((track) => {
              return <div style={{backgroundColor: '#ECF1FF', paddingLeft: '10px', paddingRight: '10px', color: '#888888'}} key={track} className='rounded-pill d-flex gap-2 align-items-center'>{track} <FiX /></div>;
          })}
        </div>

        <span className='fs-small manrope-500 primary-400'>Input track and press ‘Enter’ to add </span>

        <div className='pb-4'></div>

        <TextInput2 id='link' 
          label='Link to Generate Certificate' 
          placeHolder='Unique link for learners to access their certificates' 
          icon={<FiLink/>} 
        />
        
        <span className='fs-small manrope-500 primary-700'>
          You'll need to have created digital certificates on an external platform
        </span>

        <div className='pb-4'></div>

        <TextAreaInput id='message' placeHolder='Enter Text' label='Graduation Message' onchange={() => {}}/>
        
        <span className='fs-small manrope-500 primary-700'>
          Once you graduate a learner, this message will automatically get sent to them
        </span>

        <div className='pb-5'></div>
        <div className='pb-5'></div>

      </div>
      <div>  
        <h4 className="manrope-600 fs-h4 primary-950 pb-1">Danger Zone</h4>
        <span className="d-flex align-items-center gap-1 manrope-700 fs-body error-300">Delete Cohort <FiTrash2 /></span>
      </div>
    </div>
  )
}

export default CohortSettings
