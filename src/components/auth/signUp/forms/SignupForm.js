import React, { useState } from "react";
import {useDispatch} from "react-redux";

// user action
import * as userAuthAction from "redux/actions/AuthActions";
//import {Link} from "react-router-dom";
// service
import * as commonService from "utils/CommonService.js";
// ui components
import CommonForm from "components/shared/ui-components/common-form";
import { FieldConfigEmail } from "./FieldConfig.js";



// Field config to configure form
const SignupForm = (props) => {
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
                        <h1 className=" text-left mb-3">Sign Up</h1>
                        <p>Enter your email address</p>
                        <div className="card card-default">
                            <div className="card-body p-5">
                              <CommonForm
                                  setForm={setForm}
                                  fieldConfig={FieldConfigEmail}
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
export default SignupForm;