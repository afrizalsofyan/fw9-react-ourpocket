import React from "react";
import { ProfileLayout } from "../../components/ContentLayout";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import InputField from "../../components/InputField";

function AddNewPhone() {
  return (
    <>
      <ProfileLayout
        headerText="Add Phone Number"
        subtitleText="Add at least one phone number for the transfer ID so you can start transfering your money to another user."
        child={
          <>
            <div class="d-flex flex-row justify-content-center py-5">
              <div class="d-flex flex-column justify-content-center gap-5 w-75">
                <InputField
                  icon={
                    <>
                      <FiPhone size={24} class="txt-color-blue" />
                      <span class="ms-2 fw-bold">+62</span>
                    </>
                  }
                  placeholder="Enter your phone number"
                  type="number"
                />
                <div className='d-grid px-5 my-5'>
                <Link to="/home/profile" className="btn border-0 btn-primary px-4 py-2 color-blue-pm btn-cstm">
                    <span>Add Phone Number</span>
                </Link>
                </div>
              </div>
            </div>
          </>
        }
      />
    </>
  );
}

export default AddNewPhone;
