import { useState } from 'react';
import DragNDropInput from '../../../components/atoms/inputs/DragNDropInput'
import { TextInput2 } from '../../../components/atoms/inputs/TextInput'
import TextAreaInput from '../../../components/atoms/inputs/TextareaInput'
import { FiSave, FiTrash2 } from 'react-icons/fi'
import GroupButton from '../../../components/atoms/Button/GroupButton'
import OutlineButton from '../../../components/atoms/Button/OutlineButton'
import DeleteProgramModal from '../../../components/organisms/dashboard/modals/DeleteProgramModal'


const ProgramGeneralSettings = () => {

  const [activeView, setActiveView] = useState("Hybrid");
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

  const handleButtonClick = (view: string) => {
    setActiveView(view);
  };



  const buttonOptions = [
    {
      label: "Hybrid",
      onClick: () => handleButtonClick("Hybrid"),
      active: activeView === "Hybrid",
    },
    {
      label: "Online",
      onClick: () => handleButtonClick("Online"),
      active: activeView === "Online",
    },
    {
      label: "Physical",
      onClick: () => handleButtonClick("Physical"),
      active: activeView === "Physical",
    },
  ];
  return (
    <div className='d-flex gap-133 align-items-start'>
      <div className='w-60'>
        <DragNDropInput id='logo' label='Program Logo' detail='Program’s Logo' />
        <p className='fs-small manrope-500 primary-400 pb-4'>(png, jpg, jpeg)</p>

        <DragNDropInput id='banner' label='Banner Image' detail='Program’s Cover Image' />
        <p className='fs-small manrope-500 primary-400 pb-4'>
          Banner image will be displayed across your Program (png, jpg, jpeg)
          </p>

        <TextInput2 id='program-title' label='Program Title'/>

        <div className='pb-5'></div>

        <TextAreaInput id='description' label= 'Description' placeHolder='' onchange={() => {}}/>

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
        
        <div className='p-4'></div>
      </div>
      

      <div>

      <p className='manrope-600 primary-950 fs-body'>Program Format</p>

      <GroupButton buttons={buttonOptions}/>



      <h4 className="manrope-600 fs-h4 primary-950 pb-1 pt-5">Danger Zone</h4>
      <span style={{cursor: 'pointer'}} className="d-flex align-items-center gap-1 manrope-700 fs-body error-300"
        onClick={() => setModal((prev) => ({ open: true, name: "deleteProgramModal" }))}>
          Delete Program <FiTrash2 />
      </span>

      </div>
      {modal.name === "deleteProgramModal" && (
        <DeleteProgramModal
          modalOpen={modal.open}
          setModalOpen={setModalOpenState}
        />
      )}
    </div>
  )
}

export default ProgramGeneralSettings
