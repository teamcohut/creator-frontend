import { FC, useState } from 'react';
import Button from '../../../atoms/Button';
import { Switch } from 'antd';
import { FiX } from 'react-icons/fi';
import { ISetupModal } from '../../../../@types/dashboard.interface';

const EditPermissions: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const handleClose = () => {
    setModalOpen(false, null);
  };
  type CheckedStates = {
    participant: boolean;
    program: boolean;
    permission: boolean;
    billing: boolean;
  };

  const [checkedStates, setCheckedStates] = useState({
    participant: false,
    program: false,
    permission: false,
    billing: false,
  });

  const handleToggle = (key: keyof CheckedStates) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key], 
    }));
  };
  return (
    <div className=''>
    <div className="form bg-white d-flex flex-column rounded-5 mx-auto gap-1">
      <div className="d-flex justify-content-between">
        <h1 className="manrope-600 primary-950 fs-h2">Edit Permissions</h1>
        <FiX style={{ fontSize: '24px' }} onClick={handleClose}/>
      </div>
      <p className='pb-4 dark-700 manrope-500 fs-body'>
      Control what your admin can do on your program
      </p>

      <form className="d-flex flex-column gap-1">

      <div>
          <h3 className="manrope-600 fs-body primary-950">First Name</h3>
          <p className="manrope-500 fs-body dark-400">Kosoko</p>
        </div>

      <div>
        <h3 className="manrope-600 fs-body primary-950">Last Name</h3>
        <p className="manrope-500 fs-body dark-400">Ogudu</p>
      </div>

      <div>
          <h3 className="manrope-600 fs-body primary-950">Email</h3>
          <p className="manrope-500 fs-body dark-400 pb-1">kosoko4real@gmail.com</p>
      </div>
        
        <div>
          <span className='primary-950 manrope-600 fs-body'>Access to Features</span>

          <div className='d-flex justify-content-between fs-body manrope-500 dark-700'>
            <p>Participants</p>
            <Switch
              size="small"
              checked={checkedStates.participant}
              onChange={() => handleToggle('participant')}
              style={{
                backgroundColor: checkedStates.participant ? '#453BDB' : '',
              }}
            />
          </div>

          <div className='d-flex justify-content-between fs-body manrope-500 dark-700'>
            <p>Program Settings</p>
            <Switch
              size="small"
              checked={checkedStates.program}
              onChange={() => handleToggle('program')}
              style={{
                backgroundColor: checkedStates.program ? '#453BDB' : '',
              }}
            />
          </div>

          <div className='d-flex justify-content-between fs-body manrope-500 dark-700'>
            <p>Permissions</p>
            <Switch
              size="small"
              checked={checkedStates.permission}
              onChange={() => handleToggle('permission')}
              style={{
                backgroundColor: checkedStates.permission ? '#453BDB' : '',
              }}
            />
          </div>

          <div className='d-flex justify-content-between fs-body manrope-500 dark-700'>
            <p>Billing</p>
            <Switch
              size="small"
              checked={checkedStates.billing}
              onChange={() => handleToggle('billing')}
              style={{
                backgroundColor: checkedStates.billing ? '#453BDB' : '',
              }}
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="d-flex flex-column align-items-center gap-3 mt-4">
          <Button
            children="Save Changes"
            action={() => { }}
            type="button"
            fill={true}
          />
        </div>
      </form>
    </div>
  </div>
);
}

export default EditPermissions
