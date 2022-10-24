import React, { useState, useEffect } from "react";
import { Container, Text, Button, Div, Col, Row, Icon, Modal, Image } from "atomize";
import "../app.css";
import ResHome from "./ResHome";
import Graph from "../components/Graph";
import StepOne from "../components/intro/stepone";
import StepTwo from "../components/intro/steptwo";
import StepThree from "../components/intro/stepthree";
import StepFour from "../components/intro/stepfour";
import Final from "../components/intro/final";


function Home() {


  // Stes to mage the steps
  const [step, setstep] = useState(1);
  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state


  const MySteps = () => {
    switch (step) {
      // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 1:
        return (


          <StepOne prevStep={prevStep} nextStep={nextStep} />

        );
      // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 2:
        return (

          <StepTwo nextStep={nextStep} prevStep={prevStep} />

        );
      // case 3 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 3:
        return (

          <StepThree nextStep={nextStep} prevStep={prevStep} />

        );
      case 4:
        return (

          <StepFour nextStep={nextStep} prevStep={prevStep} />

        );
      // Only formData is passed as prop to show the final value at form submit
      case 5:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                  <Final />
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
  }
  ///Get started button state
  const [show, hide] = useState("show");

  // Show and hide States for the Deposit modal
  const [showTopUP, setTopUp] = useState(false);

  //Cyanase introduction modal
  const TopupModal = ({ isOpen, onClose }) => {

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        rounded="0"
        maxW="40vw"
        m={{ t: "2rem" }}
        h="80vh"
      >
        <Icon
          name="Cross"
          pos="absolute"
          top="1rem"
          right="1rem"
          size="16px"
          onClick={onClose}
          cursor="pointer"
        />
        <MySteps />

      </Modal>
    );
  };

  return (
    <>
      <Container>
        <Div className="cont">
          <Div>
            <Text textSize="subheader" textColor={`#252859`}><b>YOUR STATISTICS</b></Text>
          </Div>
          <Row>
            <Col size="9">
              <Row d="flex" align="center" flexDir="row">
                <Col>
                  <Div rounded="sm" className="my_card" justify="center" align="center" p={{ y: "2rem", x: "1.25rem" }} bg={`#FDE5C3`}>
                    <Text textSize="subheader">Deposit</Text>
                    <Text textSize="heading">UGX<b>23,900,848</b></Text>
                  </Div>
                </Col>
                <Col >
                  <Div rounded="sm" className="my_card" p={{ y: "2rem", x: "1.25rem" }} bg={`#252859`}>
                    <Text textSize="subheader" textColor="white">Networth</Text>
                    <Text textSize="heading" textColor="white">UGX <b>70,004,848</b></Text>
                  </Div>
                </Col>

              </Row>
              {/*****************************************DOLLAR ACCOUNT DISPLAY**************************************************** */}
              <Div>
                <Text m={{ t: "1rem" }} textSize="subheader" textColor={`#252859`}>
                  <b>DOLLAR ACCOUNT</b>
                  </Text>

                <Row>
                  <Col>
                    <Div bg="#f1f1f1" className='get_started'
                      shadow="3"  p={{ y: "2rem", x: "1.25rem" }}>
                      <Text textSize="subheader" textAlign="center" textColor="#252859">Deposit</Text>
                      <Text textSize="heading" textAlign="center" textColor="#252859">USD <b>0.00</b></Text>

                    </Div>
                  </Col>
                  <Col>

                    <Div bg="#f1f1f1" className='get_started'
                      shadow="3" p={{ y: "2rem", x: "1.25rem" }}>

                      <Text textSize="subheader" textAlign="center" textColor="#252859">Networth</Text>
                      <Text textSize="heading" textAlign="center" textColor="#252859">USD <b>0.00</b></Text>

                    </Div>


                  </Col>
                </Row>
              </Div>

              {/********************************************GET STARTED*************************************************/}

              <Div className={` ${show === "show" ? 'display_yes' : 'display_none'}`}>
                <Div bg="#f1f1f1" className='get_started'
                  shadow="3" m={{ t: "1rem" }} p={{ y: "2rem", x: "1.25rem" }}>
                  <Row flexDir={{ xs: 'column', lg: 'row' }} >
                    <Col>
                      <Text
                        textWeight="500"
                        textSize="heading"
                        textColor="#252859"
                        textAlign="center"
                      >
                        <b>Welcome to Cyanase</b>
                      </Text>
                      <Text
                        textColor="#808080"
                        textSize="subheader"
                        textAlign="center"
                      >
                        Investments products, loans, sacco groups,investment clubs all in one package.
                      </Text>
                    </Col>
                    <Col>
                      <Button
                        shadow="5"
                        bg="#252859"
                        rounded="circle"
                        onClick={() => {
                          hide("hide");
                          setTopUp(true);
                        }} className="button">
                        Learn more
                      </Button>
                      <TopupModal
                        isOpen={showTopUP}
                        onClose={() => setTopUp(false)}
                      />
                    </Col>
                  </Row>
                </Div>
              </Div>


              <TopupModal
                isOpen={showTopUP}
                onClose={() => setTopUp(false)}
              />
              {/*********************************************** <Graph />********************************************/}
            </Col>
            <Col size="3">
              <Div

                className="sacco_stat"
                justify="center"
                rounded="md"
                p={{ y: "1rem", x: "0.25rem" }}
                bg={`#252859`}>

                <Text textColor="white" ><b> Your statistics.</b></Text>
                <Text textColor="white" >Total Sacco Activity</Text>
                <Div p={{ y: "1rem", x: "0.25rem" }} >

                  <Row flexDir={{ xs: 'column', lg: 'row' }} >
                    <Col>
                      <Text textColor="white" >35%</Text>
                      <Text textColor="white" >Loans</Text>
                    </Col>
                    <Col>
                      <Text textColor="white" >5%</Text>
                      <Text textColor="white" >Deposits</Text>
                    </Col>
                    <Col>
                      <Text textColor="white" >25%</Text>
                      <Text textColor="white" >Withdraw</Text>
                    </Col>
                  </Row>
                  <Graph />
                  <Text m={{ t: "1rem" }} textColor="white" >Total Sacco Activity</Text>
                  <Text textSize="subheader" textColor="white">UGX <b>23,004,848</b></Text>
                </Div>

              </Div>

            </Col>
          </Row>
        </Div>
      </Container>


      {/* Resposive home butto0n design */}
      <Div className="ResHome">
        <ResHome></ResHome>
      </Div>

    </>



  );
}

export default Home;
