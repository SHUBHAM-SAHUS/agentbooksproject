import React, { useState } from "react";
import {useDispatch} from "react-redux";

// ui components
import CommonForm from "components/shared/ui-components/common-form";
import { FieldConfigName } from "./FieldConfig.js";



// Field config to configure form
const NameForm = (props) => {
  const [loginForm, setLoginForm] = useState({});
  const dispatch= useDispatch();

 

  const handleSubmit = e => {
    e.preventDefault();
    props.handleNext();
  };
  const setForm = loginForm => {
    setLoginForm(loginForm);
  };
  return (
    <div className="container-fluid" id="login-page">
      <div className="row full_height">
          <div className="col-md-12 col-sm-12">
            <div className="d-flex justify-content-center">
                <div className="row">
                  <div className="col-md-11 offset-md-1 col-sm-12">
                      <div id="login-card">
                        <h1 className=" text-center mb-3">Your Name</h1>
                        <p>This is the information we have on <br/> file from you. Please confirm or <br/> change it as needed.</p>
                        <div className="card card-default">
                            <div className="card-body p-0">
                              <CommonForm
                                  setForm={setForm}
                                  fieldConfig={FieldConfigName}
                                  handleSubmit={handleSubmit}
                                  ></CommonForm>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};
export default NameForm;