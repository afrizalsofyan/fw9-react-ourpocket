import React from 'react';
import { DetailCardProfile } from '../../components/CardDetailList';
import { ProfileLayout } from '../../components/ContentLayout';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/actionAsync/profile';

function DetailProfile() {
  const dispatch = useDispatch();
  const token = useSelector((state)=>state.auth.token);
  const profile = useSelector((state)=>state.profile.result);

  React.useEffect(()=>{
    dispatch(getProfile(token));
  }, [dispatch, token]);
  return (
    <>
      <ProfileLayout
        headerText='Personal Information'
        subtitleText='We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.'
        child={
          <div className='d-flex flex-column gap-4'>
            <DetailCardProfile title='First Name' content={`${profile.first_name}`} />
            <DetailCardProfile title='Last Name' content={`${profile.last_name}`} />
            <DetailCardProfile
              title='Verified E-mail'
              content={`${profile.email}`}
            />
            <DetailCardProfile
              title='Phone Number'
              content={`${profile.phone_number}`}
              cardButton={
                <div>
                  <Link to='manage-phone' className='link-rm-line color-text-1'>
                    Manage
                  </Link>
                </div>
              }
            />
          </div>
        }
      />
    </>
  );
}

export default DetailProfile;
