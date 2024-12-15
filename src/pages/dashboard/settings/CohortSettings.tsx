import { useContext, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { FiSave, FiTrash2 } from 'react-icons/fi';
import { notification } from 'antd'
import type { CustomTagProps } from "rc-select/lib/BaseSelect";
import api from '../../../api/axios'
import { ITrack } from '../../../@types/settings.interface'
import { ProgramContext } from '../../../context/programs/ProgramContext'
import { TextInput2 } from '../../../components/atoms/inputs/TextInput'
import OutlineButton from '../../../components/atoms/Button/OutlineButton'
import DeleteCohortModal from '../../../components/organisms/dashboard/modals/DeleteCohortModal'
import DateInput2 from '../../../components/atoms/inputs/DateInput2'

const CohortSettings = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { dispatch, activeCohort } = useContext(ProgramContext);
  const [cohortName, setCohortName] = useState(activeCohort?.name);
  const [startDate, setStartDate] = useState(activeCohort?.startDate?.split("T")[0])
  const [endDate, setEndDate] = useState(activeCohort?.endDate?.split("T")[0])
  const [modal, setModal] = useState({ name: "", open: false } as {
    name: string;
    open: boolean;
  });
  const [tags, setTags] = useState<ITrack[]>(activeCohort?.tracks);

  // const tracks: ITrack[] = activeCohort?.tracks;

  // const handleTagsChange = (value: ITrack[]) => {
  //   setTags(value);
  //   console.log(tags)
  // };

  const handleChange = (e: any) => {
    setCohortName(e.target.value)
    console.log(cohortName)
  }

  // const tagRender = (props: CustomTagProps) => {
  //   const { label, closable, onClose } = props;

  //   return (
  //     <span
  //       style={{
  //         borderRadius: "20px",
  //         backgroundColor: "#ECF1FF",
  //         color: "#888888",
  //         padding: "4px 12px",
  //         display: "inline-flex",
  //         alignItems: "center",
  //         margin: "8px",
  //       }}
  //     >
  //       {label}
  //       {closable && (
  //         <span
  //           onClick={onClose} // Call the default onClose to remove the tag
  //           style={{
  //             marginLeft: "8px",
  //             cursor: "pointer",
  //             fontWeight: "bold",
  //           }}
  //         >
  //           &#x78;
  //         </span>
  //       )}
  //     </span>
  //   );
  // };

  const updateCohortInfoMutation = useMutation({
    mutationFn: (payload: any) => api.cohort.updateCohort(activeCohort.id, payload),
    onSuccess: (data: any) => {
      notification.success({ message: "Account updated successfully" })
      dispatch({ type: "ACTIVE_COHORT", payload: data.data.data });
    },
    onError: (error: any) => {
      let errorMessage = "An unexpected error occurred.";

      if (error.response?.data) {
        // Handle backend-provided error messages
        if (Array.isArray(error.response.data.errors) && error.response.data.errors.length > 0) {
          errorMessage = error.response.data.errors[0];
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message;
        }
      } else if (error.message) {
        // Handle JavaScript errors or other network issues
        errorMessage = error.message;
      }

      // Special case for ObjectId casting error
      if (errorMessage.includes("Cast to ObjectId failed")) {
        errorMessage = "No cohort found, setup your program and onboard new cohort.";
      }

      // Display the notification
      notification.error({
        message: errorMessage,
      });
    }
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


  return (
    <>
      <div className='d-flex gap-133 align-items-start pt-4'>
        <div className='w-60'>
          <div className='d-flex gap-2'>
            <p className='d-flex justify-content-center align-items-center w-45'>
              <TextInput2 id='cohort-name' placeHolder='Cohut123' label='Cohort Name'
                onchange={handleChange}
                value={cohortName} />
            </p>
          </div>
          <div className="d-flex flex-row align-items-end gap-3 pt-4 pb-4">
            <DateInput2
              id="startDate"
              onchange={(e) => setStartDate(e.target.value)}
              placeHolder=""
              label="Set Cohort Duration"
              value={startDate}
            />
            <h3 className='dark-700'>-</h3>
            <DateInput2
              id="endDate"
              onchange={(e) => { setEndDate(e.target.value) }}
              placeHolder="mm/dd/yy"
              value={endDate}
            />
          </div>

          <OutlineButton
            action={() => {
              updateCohortInfoMutation.mutate({
                name: cohortName,
                startDate,
                endDate,
                tracks: tags
              })
            }}
            type="button"
            fill={false}
            outline='primary'
            gap={true} width={120}
            border={true}
            customStyle={hoverStyle}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            loading={updateCohortInfoMutation.isPending}
            disabled={updateCohortInfoMutation.isPending}
          >
            <FiSave />
            <span>Save</span>
          </OutlineButton>

        </div>
        <div>
          <h4 className="manrope-600 fs-h4 primary-950 pb-1">Danger Zone</h4>
          <span onClick={() => setModal((prev) => ({ open: true, name: "deleteCohortModal" }))} className="d-flex align-items-center gap-1 manrope-700 fs-body error-300"
            style={{ cursor: 'pointer' }}
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
