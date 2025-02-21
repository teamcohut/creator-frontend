import { FC, useState } from 'react';
import { FiUser, FiX } from 'react-icons/fi';
import { TextInput2 } from '../atoms/inputs/TextInput';
import EmailInput from '../atoms/inputs/EmailInput';
import Button from '../atoms/Button';
import { Switch } from 'antd';
import { ISetupModal } from '../../@types/dashboard.interface';

const AddNewAdmin: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
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
          <h1 className="manrope-600 primary-950 fs-h2">Add New Admin</h1>
          <button onClick={handleClose} className='border-none bg-transparent'>
            <FiX className='fs-h3' />
          </button>
        </div>
        <p className='pb-4 dark-700 manrope-500 fs-body'>
          Invite a New User to Manage your Learning Program
        </p>

        <form className="d-flex flex-column gap-4">
          <TextInput2
            id='firstname'
            placeHolder='First Name'
            icon={<FiUser className='dark-300' />}
            label='First Name'
            onchange={() => { }}
          />
          <TextInput2
            id='lastname'
            placeHolder='Last Name'
            icon={<FiUser className='dark-300' />}
            label='Last Name'
            onchange={() => { }}
          />
          <EmailInput
            id='email'
            placeholder='Email'
            label='Email'
            onchange={() => { }}
          />

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
              children="Continue"
              action={() => { }}
              type="button"
              fill={true}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewAdmin;
