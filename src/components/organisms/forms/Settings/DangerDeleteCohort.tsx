import { FC, useContext, useState } from 'react';
import Button from '../../../atoms/Button';
import SettingsStatusCard from './SettingsStatusCard';
import { FiAlertCircle } from 'react-icons/fi';
import OutlineButton from '../../../atoms/Button/OutlineButton';
import { ISetupModal } from '../../../../@types/dashboard.interface';
import { notification } from 'antd';
import { useMutation } from '@tanstack/react-query';
import api from '../../../../api/axios';
import { useNavigate } from 'react-router-dom';
import { ProgramContext } from '../../../../context/programs/ProgramContext';

const DangerDeleteCohort: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const handleClose = () => {
    setModalOpen(false, '');
  };
  const [isHovered, setIsHovered] = useState(false);
  const {dispatch, activeCohort} = useContext(ProgramContext)
  

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const hoverStyle = isHovered ? {
    color: 'var(--primary-800) !important',
    borderColor: 'var(--primary-800) !important',
  } : {};

  const navigate = useNavigate()

  const deleteCohortInfoMutation = useMutation({
    mutationFn: () => api.cohort.deleteCohort(activeCohort?.id),
    onSuccess: (data: any) => {
      notification.success({message: "Cohort deleted"})
      dispatch({type: 'ACTIVE_COHORT', payload: {}})
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
  
      // Special case for ObjectId casting error related to Cohort
      if (
        errorMessage.includes("Cast to ObjectId failed") &&
        errorMessage.includes('model "Cohort"')
      ) {
        errorMessage = "No cohort created, nothing to delete";
      }
  
      // Display the notification
      notification.error({
        message: errorMessage,
      });
    }
  });


  return (
    
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <SettingsStatusCard
        title="Danger!"
        description="Are you sure you want to delete this cohort?"
        icon={<FiAlertCircle style={{ fontSize: "70px", color: "var(--error-500)" }} />}
      >
        <span className='manrope-500 dark-700 fs-body'>
          Once deleted, you will lose all progress and associated data.
          </span>
          <div style={{ textAlign: "start", fontSize: "fs-body"}}>

            
            <div className='d-flex gap-4'>

            <OutlineButton
              type="button"
              fill={false}
              outline = 'outlineColor'
              outlineColor = 'error-500'
              width={184}
              border={true}
              action={()=> {deleteCohortInfoMutation.mutate()}}
              customStyle={hoverStyle}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              loading={deleteCohortInfoMutation.isPending}
            >

              <span className={isHovered ? 'white' : 'error-500'}> Delete Cohort </span>
              
            </OutlineButton>

            {/* Cancel Button */}
            <Button
              type="button"
              fill={true}
              width={184}
              border={true}
              action={() => {handleClose()}}
              
            >
              Cancel
            </Button>
            </div>
          </div>
      </SettingsStatusCard>
    </div>
  );
}

export default DangerDeleteCohort
