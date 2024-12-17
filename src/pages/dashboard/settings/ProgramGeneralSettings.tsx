import { useContext, useState } from 'react';
import { TextInput2 } from '../../../components/atoms/inputs/TextInput'
import TextAreaInput from '../../../components/atoms/inputs/TextareaInput'
import { FiEdit2, FiSave, FiTrash2 } from 'react-icons/fi';
import OutlineButton from '../../../components/atoms/Button/OutlineButton'
import DeleteProgramModal from '../../../components/organisms/dashboard/modals/DeleteProgramModal'
import { notification } from 'antd';
import { ProgramContext } from '../../../context/programs/ProgramContext';
import api from '../../../api/axios';
import { useMutation } from '@tanstack/react-query';
import GroupButton from '../../../components/atoms/Button/GroupButton';
import EditProgramImagesModal from '../../../components/organisms/dashboard/modals/EditProgramImagesModal';


const ProgramGeneralSettings = () => {
  const {dispatch, activeProgram} = useContext(ProgramContext)
  const [isHovered, setIsHovered] = useState(false);
  const [title, setTitle] = useState(activeProgram?.title);
  const [description, setDescription] = useState(activeProgram?.description);
  const [format, setFormat] = useState(activeProgram?.format)
  const [thumbnail, setThumbnail] = useState<string>(activeProgram.logo);
  const [banner, setBanner] = useState<string>(activeProgram.cover);

  console.log(activeProgram)

  const uploadImageMutation = useMutation({
    mutationFn: (data: any) => api.program.uploadProgramImage(data.file),
    onSuccess: (data: any, variables) => {
      if (variables.type === "thumbnail") {
        setThumbnail(data.data.data.url);
      }
      if (variables.type === "banner") {
        setBanner(data.data.data.url);
      }
    },
    onError: (error: any) => {
      notification.error({
        message: error.response.data.errors[0] ?? error.response.data.message,
      });
    },
  });


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


  const updateProgramMutation = useMutation({
    mutationFn: (payload: any) => api.program.updateProgram(activeProgram?.id, payload),
    onSuccess: (data: any) => {
      notification.success({message: data.data.message});
      dispatch({ type: "ACTIVE_PROGRAM", payload: data.data.data });

    },
    onError: (error: any) => {
      notification.error({
        message: error.response.data.errors[0] ?? error.response.data.message,
      });
    },
  });

  const handleProgramSubmit = async () => {

    const payload = {
      title,
      format,
      description,
      communities: [],
      certificates: [],
      
    };

    updateProgramMutation.mutate(payload);
  };



  const buttonOptions = [
    {
      label: "Hybrid",
      onClick: () => setFormat("hybrid"),
      active: format === "hybrid", 
    },
    {
      label: "Virtual",
      onClick: () => setFormat("virtual"),
      active: format === "virtual",
    },
    {
      label: "Physical",
      onClick: () => setFormat("physical"),
      active: format === "physical",
    },
  ];
  return (
    <>
      <div className='w-100'>
        <div style={{position: "relative"}}>

        <img src={banner} alt="Banner" 
          style={{width: "100%",
          height: "183px",
          borderBottomLeftRadius: "25px",
          borderBottomRightRadius: "25px"}} />
        <img src={thumbnail} 
          alt="logo" 
          style={{width: "80px",
          height: "80px",
          borderRadius: "50%", 
          position: "absolute",
          left: 30,
          top: 143,
        }}
        />
        <div 
          style={{backgroundColor: "white", 
          width: "32px", 
          height: "32px", 
          borderRadius: "50%",
          position: "absolute",
          right: 40,
          top: 22,
          cursor: "pointer"
          }}
          className='d-flex align-items-center justify-content-center'
          onClick={() => setModal((prev) => ({ open: true, name: "changeProgramImaagesModal" }))}
          >

        <FiEdit2 color='#453BDB'/>
        </div>

        </div>

        <div className='pb-4'></div>
        <div className='pb-5'></div>
        <TextInput2 id='program-title' 
          label='Program Title' 
          value={title}
          onchange={(e) => setTitle(e.target.value)}
          />

        <div className='pb-5'></div>

        <TextAreaInput id='description' 
          label= 'Description' 
          placeHolder='' 
          onchange={(e) => setDescription(e.target.value)}
          value={description}
          />

        <div className='pb-5'></div>
      <h4 className='fs-body manrope-600 primary-950'>Program Format</h4>
      <GroupButton buttons={buttonOptions}/>

      <div className='pb-4'></div>

      <div className='pb-4'></div>

        <OutlineButton 
            action={handleProgramSubmit} 
            type="button" 
            fill={false} 
            outline='primary' 
            gap={true} width={120} 
            border={true}
            customStyle={hoverStyle}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            loading={updateProgramMutation.isPending}
            disabled={uploadImageMutation.isPending || updateProgramMutation.isPending}
            >
          <FiSave/>
          <span>Save</span>
        </OutlineButton>
        <div className='pb-5'></div>
        <div className='pb-5'></div>
        

      <div>
      <h4 className="manrope-600 fs-h4 primary-950 pb-1">Danger Zone</h4>
      <span style={{cursor: 'pointer'}} className="d-flex align-items-center gap-1 manrope-700 fs-body error-300"
        onClick={() => setModal((prev) => ({ open: true, name: "deleteProgramModal" }))}>
          Delete Program <FiTrash2 />
      </span>
      

      </div>
    </div>
    <div className='pb-4'></div>
    <div className='pb-4'></div>
      

      
      {modal.name === "deleteProgramModal" && (
        <DeleteProgramModal
          modalOpen={modal.open}
          setModalOpen={setModalOpenState}
        />
      )}
      {modal.name === "changeProgramImaagesModal" && (
        <EditProgramImagesModal
          modalOpen={modal.open}
          setModalOpen={setModalOpenState}
        />
      )}
    </>
    
  )
}

export default ProgramGeneralSettings
