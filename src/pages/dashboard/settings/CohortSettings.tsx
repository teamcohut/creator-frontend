import { FiSave, FiTrash2, FiX } from 'react-icons/fi'
import DateInput from '../../../components/atoms/inputs/DateInput'
import { TextInput2 } from '../../../components/atoms/inputs/TextInput'
import TextAreaInput from '../../../components/atoms/inputs/TextareaInput'
import OutlineButton from '../../../components/atoms/Button/OutlineButton'
import { useState } from 'react'
import DeleteCohortModal from '../../../components/organisms/dashboard/modals/DeleteCohortModal'

const CohortSettings = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [modal, setModal] = useState({ name: "", open: false } as {
    name: string;
    open: boolean;
  });

  const setModalOpenState = (open: boolean, name: string) => {
    setModal({ name, open });
  };
  
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const hoverStyle = isHovered ? {
    color: 'var(--primary-800) !important',
    borderColor: 'var(--primary-800) !important',
  } : {};
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
    <>
    <div className='d-flex gap-133 align-items-start pt-4'>
      <div className='w-60'>
        <div className='d-flex gap-2'>
          <p className='d-flex justify-content-center align-items-center w-45'> 
          <TextInput2 id='cohort-number' placeHolder='Cohut123' label='Cohort Name'/>
          </p>
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

        {/* <TextInput2 id='link' 
          label='Link to Generate Certificate' 
          placeHolder='Unique link for learners to access their certificates' 
          icon={<FiLink/>} 
        /> */}
        
        <span className='fs-small manrope-500 primary-700'>
          You'll need to have created digital certificates on an external platform
        </span>

        <div className='pb-4'></div>

        <TextAreaInput id='message' placeHolder='Enter Text' label='Graduation Message' onchange={() => {}}/>
        
        <span className='fs-small manrope-500 primary-700'>
          Once you graduate a learner, this message will automatically get sent to them
        </span>

        <div className='pb-4'></div>

        <OutlineButton 
            action={()=>{}} 
            type="button" 
            fill={false} 
            outline='primary' 
            gap={true} width={120} 
            border={true}
            customStyle={hoverStyle}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}>
          <FiSave/>
          <span>Save</span>
        </OutlineButton>

        
        <div className='pb-5'></div>

      </div>
      <div>  
        <h4 className="manrope-600 fs-h4 primary-950 pb-1">Danger Zone</h4>
        <span onClick={() => setModal((prev) => ({ open: true, name: "deleteCohortModal" }))} className="d-flex align-items-center gap-1 manrope-700 fs-body error-300"
        style={{cursor: 'pointer'}}
        >
          Delete Cohort <FiTrash2 />
          </span>
      </div>
    </div>
    {modal.name === "deleteCohortModal" && (
        <DeleteCohortModal
          modalOpen={modal.open}
          setModalOpen={setModalOpenState}
        />
      )}
    </> 
  )
}

export default CohortSettings
