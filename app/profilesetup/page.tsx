'use client'
import { useSession } from "next-auth/react";
import { useState } from "react";
import * as React from "react"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from "next/navigation";

export default function Loading() {
  const { data: session, status } = useSession();
  const router = useRouter();


  const UserInfo = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>());
  
    const isStepOptional = (step: number) => {
      return step === 1 ;
    };
  
    const isStepSkipped = (step: number) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleSkip = () => {

      router.push('/profile')
  
      
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    const theme = createTheme({
      components: {
        MuiStepLabel: {
          styleOverrides: {
            label: {
              color: '#D3B8E6', // Light purple for inactive steps
              '&.Mui-active': {
                color: 'white', // White for active steps
              },
              '&.Mui-completed' :{
                 color: 'white'
              }
          }
        },
        }
      },
    });
 
    const steps = ['Create Your Profile', 'Pick Favorite Genres', 'Pick Favorite Movies'];

    const ProfileCreation = () => {
      return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          Profile 
        </div>
      )
    }
    const SelectGenres = () => {
      return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
        Genres Select
        </div>
      )
    }
    const SelectMovies = () => {
      return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center"> 
            Movie Select
        </div>
      )
    }
    const FinishedProfileSetup = () => {
      return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center"> 
          <div>Profile Setup Complete </div>
          <Button onClick={() =>  router.push('/profile')}>Check Profile</Button>
            <Button onClick={() =>  router.push('/movies')}>Browse Movies</Button>
        </div>
      )
    }

    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full sm:px-2 md:px-20  ">
        <Box sx={{ width: '100%' }}>
        <ThemeProvider theme={theme}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          
         
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} >
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      </ThemeProvider>
      {activeStep === steps.length ? (
        <React.Fragment>
          <FinishedProfileSetup/>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 && (<div><ProfileCreation/></div>) }
          {activeStep === 1 && (<div><SelectGenres/></div>) }
          {activeStep === 2 && (<div><SelectMovies/></div>) }
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
        </div>

      </div>
    )
  }

  return (<div>

    {!session ? (<div role="status" className='w-screen p-5 md:w-screen md:p-0 flex items-center justify-center h-screen '>
      <svg aria-hidden="true" className="inline w-20 h-20 text-gray-200 animate-spin dark:text-zinc-800 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>) : (<UserInfo />)}
  </div>)

}
