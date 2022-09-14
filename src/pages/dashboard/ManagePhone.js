import React from 'react';
import { ProfileLayout } from '../../components/ContentLayout';
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash } from 'react-icons/fi';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ManagePhone() {
  const redirect = useNavigate();
  const idPhone = 1;
  const profile = useSelector((state)=> state.user.profile);
  const handleDeletePhone = (id) => {
    id = 1;
    if(id===idPhone) {
      if(window.confirm('Are you sure want to delete this phone? ')){
        console.log('phone deleted');
        redirect('/home/profile/details');
      }
    }
  };
  return (
    <>
      <ProfileLayout
        headerText='Manage Phone Number'
        subtitleText='You can only delete the phone number and then you must add another phone number.'
        child={
          <div className='height-up-form d-flex flex-column justify-content-between'>
            <div className='d-flex flex-row align-items-center justify-content-between px-3 shadow-sm rounded-4 px-4 py-3'>
              <div className='d-flex flex-column gap-2'>
                <span className='fnt-desc2'>Phone number</span>
                <span className='fw-bold fs-5 color-text-6'>{profile?.phone_number}</span>
              </div>
              {/* <div>
                <Button onClick={handleDeletePhone} className='btn border-0 bg-transparent shadow-none'>
                  <FiTrash className='bg-grey-light icon-btn' />
                </Button>
              </div> */}
            </div>
            <div className='d-grid px-5'>
              <Link to='add-phone' className='btn border-0 px-4 py-2 btn-prim-1'>
                <span>{!profile?.phone_number ? 'Add new phone' : 'Update your phone'}</span>
              </Link>
            </div>
          </div>
        }
      />
    </>
  );
}

export default ManagePhone;
