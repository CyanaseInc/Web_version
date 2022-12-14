import React, { useState } from 'react';
import BtnSlider from '../components/withdraw/BtnSlider';
import StepOne from '../components/withdraw/stepone';
import StepTwo from '../components/withdraw/steptwo';
import StepThree from '../components/withdraw/stepthree';
import StepFour from '../components/withdraw/stepfour';
import SaccoStepTwo from '../components/withdraw/saccoStepTwo';
import Final from '../components/withdraw/Final';
import { useForm } from "react-hook-form";
import 'regenerator-runtime/runtime';
import { Container, Text, Tag, Div, Col, Row, Modal, Button } from "atomize";
import { Iconly } from 'react-iconly';

function Withdraw() {

  const linkType = "withdraw";
  //state for steps
  const [step, setstep] = useState(1);


  //state for form data
  const [formData, setFormData] = useState({


  });
  // states for changing determning the direction of the withdraw
  const [direction, setValue] = useState("personal");

  // Function for going back to previous directional page
  const back = () => {

    setValue("personal");
  }
  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };
  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevStep => ({
      ...prevStep,
      [input]: value
    }));
  }
  //Steps one takes if they choose personal Investments
  const AllSteps = () => {


    if (direction === "personal") {
      switch (step) {
        // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 1:
          return (


            <StepOne nextStep={nextStep}/>

          );
        // Only formData is passed as prop to show the final value at form submit
        case 2:
          return (
            <div className="App">
              <Container>
                <Row>
                  <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                    <Final values={formData} />
                  </Col>
                </Row>
              </Container>
            </div>
          );

        // default case to show nothing
        default:
          return (
            <div className="App">
            </div>
          );
      }

    } else if (direction === "sacco") {

      switch (step) {
        // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 1:
          return (


            <SaccoStepTwo back={back} prevStep={prevStep} nextStep={nextStep} handleFormData={handleInputData} values={formData} />

          );
        // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 2:
          return (

            <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />

          );
        // case 3 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 3:
          return (

            <StepThree nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />

          );
        case 4:
          return (

            <StepFour nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />

          );
        // Only formData is passed as prop to show the final value at form submit
        case 5:
          return (
            <div className="App">
              <Container>
                <Row>
                  <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                    <Final values={formData} />
                  </Col>
                </Row>
              </Container>
            </div>
          );

        // default case to show nothing
        default:
          return (
            <div className="App">
            </div>
          );
      }



    } else if (direction === "club") {



    }
    // javascript switch case to show different form in each step


  }
  {/*******withdraw MODAL***************************************************************** */ }

  return (
    <>
      <Container >
       
        <Div w="100" m={{ t: "5rem", l: "10rem" }}>
        <Text
          textAlign="center"
          textSize="heading" m={{ t: "1rem" }}
          textWeight="500"
          textColor="#252859">
          Withdraw
        </Text>

          {/******************ADDING THE SLIDING COMPONENTS OF THE REACT APP******************/}

          <AllSteps />
        </Div>
      </Container>



    </>

  );

}
export default Withdraw;