import React, { useState } from "react";
import {useDispatch} from "react-redux";

// user action
import * as userAuthAction from "redux/actions/AuthActions";
//import {Link} from "react-router-dom";
// service
import * as commonService from "utils/CommonService.js";
// ui components
import CommonForm from "components/shared/ui-components/common-form";
import { FieldConfigEmail,FieldConfigConfirmEmail } from "./FieldConfig.js";
import { useCookies } from 'react-cookie';



// Field config to configure form
const ConfirmEmail = (props) => {
  const [localCookies, setCookie] = useCookies(['email', "password"]);
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
                        <h1 className=" text-center mb-3">Confirm Email</h1>
                        <p>Your email we have in our files<br/>
                           h*******yn@acc******<br/>
                           Click SEND CODE to send you an email<br/>with the confirmation code to your<br/> email.
                        </p>
                        <div className="card card-default">
                            <div className="card-body p-0">
                              <CommonForm
                                  setForm={setForm}
                                  fieldConfig={FieldConfigConfirmEmail}
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
export default ConfirmEmail;