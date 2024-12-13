import { FiSave, FiTrash2 } from 'react-icons/fi';
import { TextInput2 } from '../../../components/atoms/inputs/TextInput'
import OutlineButton from '../../../components/atoms/Button/OutlineButton'
import { useContext, useState } from 'react'
import DeleteCohortModal from '../../../components/organisms/dashboard/modals/DeleteCohortModal'
import { ProgramContext } from '../../../context/programs/ProgramContext'
import DateInput2 from '../../../components/atoms/inputs/DateInput2'
import { Select } from 'antd'
import { Option } from 'antd/es/mentions'
import type { CustomTagProps } from "rc-select/lib/BaseSelect";

const CohortSettings = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { activeCohort } = useContext(ProgramContext);
  const [modal, setModal] = useState({ name: "", open: false } as {
    name: string;
    open: boolean;
  });
  const [tags, setTags] = useState<string[]>([]);

  const handleTagsChange = (value: string[]) => {
    setTags(value);
  };
  console.log(activeCohort)

  const tagRender = (props: CustomTagProps) => {
    const { label, closable, onClose } = props;

    return (
      <span
        style={{
          borderRadius: "20px",
          backgroundColor: "#ECF1FF",
          color: "#888888",
          padding: "4px 12px",
          display: "inline-flex",
          alignItems: "center",
          margin: "8px",
        }}
      >
        {label}
        {closable && (
          <span
            onClick={onClose} // Call the default onClose to remove the tag
            style={{
              marginLeft: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ×
          </span>
        )}
      </span>
    );
  };
  


  

  const setModalOpenState = (open: boolean, name: string) => {
    setModal({ name, open });
  };
  
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const hoverStyle = isHovered ? {
    color: 'var(--primary-800) !important',
    borderColor: 'var(--primary-800) !important',
  } : {};
  const tracks: Array<string>= []
  return (
    <>
    <div className='d-flex gap-133 align-items-start pt-4'>
      <div className='w-60'>
        <div className='d-flex gap-2'>
          <p className='d-flex justify-content-center align-items-center w-45'> 
          <TextInput2 id='cohort-number' placeHolder='Cohut123' label='Cohort Name' value={activeCohort?.name}/>
          </p>
        </div>
        <div className="d-flex flex-row align-items-end gap-3 pt-4 pb-4">
            <DateInput2
              id="startDate"
              onchange={() => {}}
              placeHolder=""
              label="Set Cohort Duration"
              value={activeCohort?.startDate ? activeCohort.startDate.split("T")[0] : ""}
            />
            <h3 className='dark-700'>-</h3>
            <DateInput2
              id="endDate"
              onchange={() => {}}
              placeHolder="mm/dd/yy"
              value={activeCohort?.endDate ? activeCohort.endDate.split("T")[0] : ""}
            />
          </div>

          <span className='fs-body manrope-600 primary-950'>Track</span>

      <Select
      mode="tags"
      style={{ width: "100%" }}
      tagRender={tagRender}
      placeholder="Input and press 'Enter' to add a track or simply select one"
      value={tags}
      onChange={handleTagsChange}
      >
      {tracks.map((option) => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </Select>
    <div className='pb-4'></div>

        

        {/* <TextInput2 id='link' 
          label='Link to Generate Certificate' 
          placeHolder='Unique link for learners to access their certificates' 
          icon={<FiLink/>} 
        />
        
        <span className='fs-small manrope-500 primary-700'>
          You'll need to have created digital certificates on an external platform
        </span>

        <div className='pb-4'></div> */}

        {/* <TextAreaInput id='message' placeHolder='Enter Text' label='Graduation Message' onchange={() => {}}/>
        
        <span className='fs-small manrope-500 primary-700'>
          Once you graduate a learner, this message will automatically get sent to them
        </span>

        <div className='pb-4'></div> */}

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
