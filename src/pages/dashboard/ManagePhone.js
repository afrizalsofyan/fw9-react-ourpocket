import React from "react";
import { ProfileLayout } from "../../components/ContentLayout";
import { Link } from "react-router-dom";
import { FiTrash } from "react-icons/fi";

function ManagePhone() {
  return (
    <>
      <ProfileLayout
        headerText="Manage Phone Number"
        subtitleText="You can only delete the phone number and then you must add another phone number."
        child={
          <>
            <div className="d-flex flex-row align-items-center justify-content-between px-3 shadow-sm rounded-4 px-4 py-3">
              <div className="d-flex flex-column gap-2">
                <span className="fnt-desc2">Primary</span>
                <span className="fw-bold fs-5">+62 813 9387 7946</span>
              </div>
              <div>
                <Link to="" className="btn border-0">
                  <FiTrash className="bg-grey-light icon-btn" />
                </Link>
              </div>
            </div>
            <div className='d-grid px-5 my-5'>
              <Link to="addPhone" className="btn border-0 btn-primary px-4 py-2 color-blue-pm btn-cstm">
                <span>Add new phone</span>
              </Link>
            </div>
          </>
        }
      />
    </>
  );
}

export default ManagePhone;
