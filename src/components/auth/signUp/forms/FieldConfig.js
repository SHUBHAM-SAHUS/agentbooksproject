import React from "react";
import { Validators } from "react-reactive-form";

import { OtpInput, TextInput } from "components/shared/ui-components/common-form/Field.js";

export const FieldConfigEmail = {
  controls: {
    email: {
      options: {
        validators: [Validators.required, Validators.email]
      },
      render: TextInput,
      meta: { label: "Email", type: "email" }
    },
    
   
    $field_1: {
      isStatic: false,
      render: ({ invalid, meta: { handleReset } }) => (
          <div className="pt-5">
            <button
                color="default"
                className="btn-slim btn btn-primary btn-block sign_in_btn pb-3 pt-3"
                type="submit"
                disabled={invalid}
                >
              Continue
            </button>
          </div>
      )
    }
  }
};

export const FieldConfigName = {
  controls: {
    firstName: {
      options: {
        validators: [Validators.required]
      },
      render: TextInput,
      meta: { label: "First Name", type: "text" }
    },
    lastName: {
      options: {
        validators: [Validators.required]
      },
      render: TextInput,
      meta: { label: "Last Name", type: "text" }
    },
   
    $field_1: {
      isStatic: false,
      render: ({ invalid, meta: { handleReset } }) => (
          <div className="pt-5">
            <button
                color="default"
                className="btn-slim btn btn-primary btn-block sign_in_btn pb-3 pt-3"
                type="submit"
                disabled={invalid}
                >
              Confirm
            </button>
          </div>
      )
    }
  }
};

export const FieldConfigPhone = {
  controls: {
    phoneNumber: {
      options: {
        validators: [Validators.required]
      },
      render: TextInput,
      meta: { label: "Phone Number", type: "text" }
    },
    
   
    $field_1: {
      isStatic: false,
      render: ({ invalid, meta: { handleReset } }) => (
          <div className="pt-5">
            <button
                color="default"
                className="btn-slim btn btn-primary btn-block sign_in_btn pb-3 pt-3"
                type="submit"
                disabled={invalid}
                >
              Continue
            </button>
          </div>
      )
    }
  }
};

export const FieldConfigConfirmEmail = {
  controls: {
    confirmEmail: {
      options: {
        validators: [Validators.required]
      },
      render: OtpInput,
      meta: { label: "", type: "text" }
    },
    
   
    $field_1: {
      isStatic: false,
      render: ({ invalid, meta: { handleReset } }) => (
          <div className="pt-5">
            <button
                color="default"
                className="btn-slim btn btn-primary btn-block sign_in_btn pb-3 pt-3"
                type="submit"
                disabled={invalid}
                >
              Confirm
            </button>
          </div>
      )
    }
  }
};

export const FieldConfigConfirmPhone = {
  controls: {
    confirmPhone: {
      options: {
        validators: [Validators.required]
      },
      render: OtpInput,
      meta: { label: "", type: "text" }
    },
    
   
    $field_1: {
      isStatic: false,
      render: ({ invalid, meta: { handleReset } }) => (
          <div className="pt-5">
            <button
                color="default"
                className="btn-slim btn btn-primary btn-block sign_in_btn pb-3 pt-3"
                type="submit"
                disabled={invalid}
                >
              Confirm
            </button>
          </div>
      )
    }
  }
};

export const FieldConfigPassword = {
  controls: {
    password: {
      options: {
        validators: [Validators.required]
      },
      render: TextInput,
      meta: { label: "Password", type: "password" }
    },
  confirmPassword: {
      options: {
        validators: [Validators.required]
      },
      render: TextInput,
      meta: { label: "Repear password", type: "password" }
    },
   
    $field_1: {
      isStatic: false,
      render: ({ invalid, meta: { handleReset } }) => (
          <div className="pt-5">
            <button
                color="default"
                className="btn-slim text-uppercase btn btn-primary btn-block sign_in_btn pb-3 pt-3"
                type="submit"
                disabled={invalid}
                >
              Continue
            </button>
          </div>
      )
    }
  }
};

