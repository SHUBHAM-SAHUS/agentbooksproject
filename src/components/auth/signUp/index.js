import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SignupForm from './forms/SignupForm'
import NameForm from './forms/NameForm'
import ConfirmEmail from './forms/ConfirmEmail'
import PhoneForm from './forms/PhoneForm'
import ConfirmPhone from './forms/ConfirmPhone'
import PasswordForm from './forms/PasswordForm'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad','hauqgsqu','dhwifhdehf','enfjje'];
}

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return (<SignupForm handleNext={handleNext} handleStep={handleStep}/>);
//     case 1:
//       return (<ConfirmEmail handleNext={handleNext} handleStep={handleStep}/>);
//     case 2:
//       return (<ConfirmEmail handleNext={handleNext} handleStep={handleStep}/>);
//     case 3 :
//       return (<PhoneForm handleNext={handleNext} handleStep={handleStep}/>);
//     case 4:
//       return(<ConfirmPhone handleNext={handleNext} handleStep={handleStep}/>);
//     case 5:
//       return(<PasswordForm handleNext={handleNext} handleStep={handleStep}/>);
//     default:
//       return 'Unknown step';
//   }
// }

export const HorizontalNonLinearStepper =()=> {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();


  const getStepContent =(step)=> {
    switch (step) {
      case 0:
        return (<SignupForm handleNext={handleNext} handleStep={handleStep}/>);
      case 1:
        return (<NameForm handleNext={handleNext} handleStep={handleStep}/>);
      case 2:
        return (<ConfirmEmail handleNext={handleNext} handleStep={handleStep}/>);
      case 3 :
        return (<PhoneForm handleNext={handleNext} handleStep={handleStep}/>);
      case 4:
        return(<ConfirmPhone handleNext={handleNext} handleStep={handleStep}/>);
      case 5:
        return(<PasswordForm handleNext={handleNext} handleStep={handleStep}/>);
      default:
        return 'Unknown step';
    }
  }
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className={classes.root}>
      
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button> */}
              {/* {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                  </Button>
                ))} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}