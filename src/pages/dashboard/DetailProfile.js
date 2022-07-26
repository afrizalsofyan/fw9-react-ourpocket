import React from 'react';
import { DetailCardProfile } from '../../components/CardDetailList';
import { ProfileLayout } from '../../components/ContentLayout';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileCurrentUser } from '../../redux/actionAsync/user';

function DetailProfile() {
  const dispatch = useDispatch();
  const token = useSelector((state)=>state.auth.token);
  const profile = useSelector((state)=>state.user.profile);
  
  React.useEffect(()=>{
    dispatch(getProfileCurrentUser());
  }, [dispatch, token]);
  
  return (
    <>
      <ProfileLayout
        headerText='Personal Information'
        subtitleText='We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.'
        child={
          <div className='d-flex flex-column gap-4'>
            <DetailCardProfile title='First Name' content={`${profile?.first_name}`} />
            <DetailCardProfile title='Last Name' content={`${profile?.last_name}`} />
            <DetailCardProfile
              title='Verified E-mail'
              content={`${profile?.email}`}
            />
            <div className='d-flex flex-row justify-content-between align-items-center shadow-sm rounded-4 px-4 py-3'>
              <div className='d-flex flex-column gap-2'>
                <span className='fnt-desc2'><span className='color-text-2'>Phone Number</span></span>
                <span className='fw-bold fs-5 color-text-6'>{profile?.phone_number}</span>
              </div>
              <div>
                <Link to='manage-phone' className='link-rm-line color-text-1'>
                  Manage
                </Link>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}

export default DetailProfile;
