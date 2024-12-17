import { FC, useContext, useState } from 'react';
import SettingsStatusCard from './SettingsStatusCard';
import { FiAlertCircle } from 'react-icons/fi';
import OutlineButton from '../../../atoms/Button/OutlineButton';
import Button from '../../../atoms/Button';
import { ISetupModal } from '../../../../@types/dashboard.interface';
import { useMutation } from '@tanstack/react-query';
import api from '../../../../api/axios';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ProgramContext } from '../../../../context/programs/ProgramContext';
import { useProgramContext } from '../../../../hooks/program/useProgramContext';

const DangerDeleteProgram: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const { dispatch } = useProgramContext()
  const handleClose = () => {
    setModalOpen(false, null);
  };
  const [isHovered, setIsHovered] = useState(false);
  const {activeProgram} = useContext(ProgramContext)

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const hoverStyle = isHovered ? {
    color: 'var(--primary-800) !important',
    borderColor: 'var(--primary-800) !important',
  } : {};

  const navigate = useNavigate()

  const deleteProgramInfoMutation = useMutation({
    mutationFn: () => api.program.deleteProgram(activeProgram.id),
    onSuccess: (data: any) => {
      notification.success({message: "Program deleted"})
      dispatch({type: 'ACTIVE_PROGRAM', payload: {}})
      navigate("/")
    },
    onError: (error: any) => {
      let errorMessage = "An unexpected error occurred.";

      if (error.response?.data) {
        // Handle backend-provided error messages
        if (
          Array.isArray(error.response.data.errors) &&
          error.response.data.errors.length > 0
        ) {
          errorMessage = error.response.data.errors[0];
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message;
        }
      } else if (error.message) {
        // Handle JavaScript errors or other network issues
        errorMessage = error.message;
      }
  
      // Special case for ObjectId casting error related to Program
      if (
        errorMessage.includes("Cast to ObjectId failed") &&
        errorMessage.includes('model "Program"')
      ) {
        errorMessage = "No program created, create new program.";
      }
  
      // Display the notification
      notification.error({
        message: errorMessage,
      });
    }
  });

  const deleteProgram = () => {
    deleteProgramInfoMutation.mutate(activeProgram?.id)
  }


  return (
    
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <SettingsStatusCard
        title="Danger!"
        description="Are you sure you want to delete this program?"
        icon={<FiAlertCircle style={{ fontSize: "70px", color: "var(--error-500)" }} />}
      >
        <span className='manrope-500 dark-700 fs-body w-100'>
        Once deleted, your program and all its associated data (including cohorts, participants, and progress) will be permanently removed.
          </span>
          <div style={{ textAlign: "start", fontSize: "fs-body"}}>

            {/* Transfer Ownership Button */}
            <div className='d-flex gap-4'>

            <OutlineButton
              type="button"
              fill={false}
              outline = 'outlineColor'
              outlineColor = 'error-500'
              width={184}
              border={true}
              action={deleteProgram}
              loading={deleteProgramInfoMutation.isPending}
              customStyle={hoverStyle}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            >

              <span className={isHovered ? 'white' : 'error-500'}> Delete Program </span>
              
            </OutlineButton>

            {/* Cancel Button */}
            <Button
              type="button"
              fill={true}
              width={184}
              border={true}
              action={handleClose}
              
            >
              Cancel
            </Button>
            </div>
          </div>
      </SettingsStatusCard>
    </div>
  );
}

export default DangerDeleteProgram
