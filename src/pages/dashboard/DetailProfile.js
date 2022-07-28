import React from "react";
import { DetailCardProfile } from "../../components/CardDetailList";
import { ProfileLayout } from "../../components/ContentLayout";
import { Link } from "react-router-dom";

function DetailProfile() {
  return (
    <>
      <ProfileLayout
        headerText="Personal Information"
        subtitleText="We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support."
        child={
          <div className="d-flex flex-column gap-4">
            <DetailCardProfile title="First Name" content="Robert" />
            <DetailCardProfile title="Last Name" content="Chandler" />
            <DetailCardProfile
              title="Verified E-mail"
              content="pewdiepie1@gmail.com"
            />
            <DetailCardProfile
              title="Phone Number"
              content="Chandler"
              cardButton={
                <div>
                  <Link to="manage-phone" className="link-rm-line color-text-1">
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
