import React from 'react'
import Table from '../../../components/organisms/dashboard/Table'
import api from '../../../api/axios';
import { useQuery } from '@tanstack/react-query';
import Button from '../../../components/atoms/Button';
import { FiPlus } from 'react-icons/fi';
import SearchInput from '../../../components/atoms/inputs/SearchInput';

const PermissionsSettings = () => {

  const header = [
    "Full Name",
    "Email Address",
    "Role",
    "Status",
    "Last Login",
    "",
  ];

  return (
    <div>
      <div className='d-flex w-100 justify-content-between align-items-center pb-5'>
        <h5>Admin Accounts</h5>
        <Button action={()=>{}} type="button" fill={false} outline='primary' gap={true} width={177} border={true}>
          <FiPlus/>
          <span>Add New Admin</span>
        </Button>
      </div>
      <div className='d-flex justify-content-between pb-4'>
        
        <SearchInput id="" placeHolder='Search by name' onchange={()=>{}} width={18}/>
        <div>
        <button
            className="btn rounded-pill bg-secondary-450 manrope-500 primary-950"
            onClick={()=> {}}
          >
            All
          </button>
          <button
            className="btn rounded-pill border-secondary manrope-500 dark-400"
            onClick={()=> {}}
          >
            Active
          </button>
          <button
            className="btn rounded-pill border-secondary manrope-500 dark-400"
            onClick={()=> {}}
          >
            Inactive
          </button>  
          </div>    
        
      </div>
      <Table header={header} body={[]} />
    </div>
  )
}

export default PermissionsSettings
