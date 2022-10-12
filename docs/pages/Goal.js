import React, { useState, useEffect } from "react";
import { Container, Text, Button, Div, Col, Row, Icon, SideDrawer, Modal, Input } from "atomize";
import "../app.css";
import { Iconly } from 'react-iconly';
import ProgressBar from "../components/progressbar";
import { useForm } from "react-hook-form";




function Goal() {
  /****************************************************** * PROGRESS BAR STATES*****************/
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  /////// *******************************************SIDE DRAWER STATE *****************************************

  const GoalDrawer = ({ isOpen, onClose }) => {

    return (
      <SideDrawer isOpen={isOpen} onClose={onClose} w={{ xs: "100vw", md: "50rem" }}>
        <Div onClick={onClose} d="flex" m={{ b: "4rem" }}>
          <Icon size="40px" name="LeftArrowSolid" color={`#252859`} />
          <Text p={{ l: "0.5rem", t: "0.25rem" }}>This is the modal</Text>
        </Div>
    
      </SideDrawer>
    );
  };

  const [show, setShow] = useState(false);
  //// *****************************TOP UP BUTTON STATE MODAL****************************************************

  const [showTopUP, setTopUp] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  
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
        <Div m={{t:"2rem"}} justify="center">
          <Div className="toper">

          <Iconly
                 
                  name="Wallet"
                  primaryColor={`#252859`}
                  set='bulk'
                  secondaryColor='orange'
                  stroke='bold'
                />
          </Div>

          <Text m={{ t: "1rem" }} textSize="subheader" textColor="#252859" textWeight="500">
            Top up your investment wallet
          </Text>
          <Text>
            Make it easy to choose your investment type by depositing to your wallet
          </Text>
          <Div justify="center">
            <Input  w={{ xs: '100%', md: '24rem' }}
              {...register("amount", { required: true, maxLength: 15 })}
              placeholder="Enter amount" name="amount" type="text"
m={{l:"5rem", t:"3rem"}}
              p={{ x: "2.5rem" }}
              prefix={

                <Iconly
                  className="ivn"
                  name="Wallet"
                  primaryColor={`#252859`}
                  set='bulk'
                  secondaryColor='orange'
                  stroke='bold'
                />
              }
            />
 <Button  w="24rem"
 m={{ t: "2rem", l:"5rem" }} className="button2"
                    onClick={() =>
                      setTopUp(true)
                    }
                    bg="warning700"
                    shadow="3"
                    hoverShadow="4"
                  >
                    Deposit
                  </Button>
          </Div>


          {errors.fname && <p className="text-error">Your first name is required</p>}

        </Div>


      </Modal>
    );
  };
  return (
    <>
      <Container className="menu">

        <Div m={{ t: "4rem" }} className="cont">

          <Row flexWrap="wrap" d="flex" align="center" flexDir="row">

            <Col size="9">
              <Div>
                <Text textSize="subheader" textColor={`#252859`}><b>WALLET</b></Text>
                <Div rounded="sm" className="my_card" justify="center" align="center" p={{ y: "2rem", x: "1.25rem" }} bg={`#FDE5C3`}>

                  <Text textSize="subheader">Account balance</Text>
                  <Text textSize="heading">UGX<b>23,900,848</b></Text>

                  <Button m={{ t: "0.5rem" }} className="button2"
                    onClick={() =>
                      setTopUp(true)
                    }
                    bg="warning700"
                    shadow="3"
                    hoverShadow="4"
                  >
                    Top up
                  </Button>
                  <TopupModal
                    isOpen={showTopUP}
                    onClose={() => setTopUp(false)}
                  />
                </Div>
              </Div>
              {/*******************************************************RECENT ACTIVITY********************************************/}
              <Div p={{ x: "0.5rem", y: "0.5rem" }} m={{ t: "1rem", l: "0.5rem" }}>
                <Text className="text_fst"><b>Recent activity</b></Text>
                <Div rounded="md" className="recent_row" m={{ t: "0.5rem" }} p={{ x: "0.5rem", y: "0.5rem" }}>

                  <Row >
                    <Col >
                      <Div m={{ t: "2em" }}>
                        <Iconly

                          name="Wallet"
                          primaryColor={`#252859`}
                          set='bulk'
                          secondaryColor='orange'
                          stroke='bold'
                        />
                      </Div>

                    </Col>
                    <Col >
                      <Div>
                        <Text textSize="subheader" textWeight="500">Deposit</Text>
                        <Text textWeight="500">UGX 300,000</Text>
                        <Text textColor="green">Successful</Text>
                      </Div>

                    </Col>
                    <Col >
                      <Div className="time">
                        <Text textColor="orange" textWeight="500">Yesterday</Text>
                        <Text textWeight="500">2:00 hrs</Text>

                      </Div>

                    </Col>
                  </Row>
                </Div>
                <Div rounded="md" className="recent_row" m={{ t: "0.5rem" }} p={{ x: "0.5rem", y: "0.5rem" }}>
                  <Row >
                    <Col >
                      <Div m={{ t: "2em" }}>
                        <Iconly

                          name="Wallet"
                          primaryColor={`#252859`}
                          set='bulk'
                          secondaryColor='orange'
                          stroke='bold'
                        />
                      </Div>

                    </Col>
                    <Col >
                      <Div>
                        <Text textSize="subheader" textWeight="500">Deposit</Text>
                        <Text textWeight="500">UGX 300,000</Text>
                        <Text textColor="red" >failed</Text>
                      </Div>

                    </Col>
                    <Col >
                      <Div className="time">
                        <Text textColor="orange" textWeight="500">Yesterday</Text>
                        <Text textWeight="500">2:00 hrs</Text>

                      </Div>

                    </Col>
                  </Row>
                </Div>
                <Div rounded="md" className="recent_row" m={{ t: "0.5rem" }} p={{ x: "0.5rem", y: "0.5rem" }}>
                  <Row>
                    <Col >
                      <Div m={{ t: "2em" }}>
                        <Iconly

                          name="Wallet"
                          primaryColor={`#252859`}
                          set='bulk'
                          secondaryColor='orange'
                          stroke='bold'
                        />
                      </Div>

                    </Col>
                    <Col >
                      <Div>
                        <Text textSize="subheader" textWeight="500">Withdraw</Text>
                        <Text textWeight="500">UGX 300,000</Text>
                        <Text textColor="red" >Failed</Text>
                      </Div>

                    </Col>
                    <Col >
                      <Div className="time">
                        <Text textColor="orange" textWeight="500">Yesterday</Text>
                        <Text textWeight="500">2:00 hrs</Text>

                      </Div>

                    </Col>
                  </Row>
                </Div>
                <Div rounded="md" className="recent_row" m={{ t: "0.5rem" }} p={{ x: "0.5rem", y: "0.5rem" }}>
                  <Row>
                    <Col >
                      <Div m={{ t: "2em" }}>
                        <Iconly

                          name="Wallet"
                          primaryColor={`#252859`}
                          set='bulk'
                          secondaryColor='orange'
                          stroke='bold'
                        />
                      </Div>

                    </Col>
                    <Col >
                      <Div>
                        <Text textSize="subheader" textWeight="500">Withdraw</Text>
                        <Text textWeight="500">UGX 300,000</Text>
                        <Text textColor="red" >Failed</Text>
                      </Div>

                    </Col>
                    <Col >
                      <Div className="time">
                        <Text textColor="orange" textWeight="500">Yesterday</Text>
                        <Text textWeight="500">2:00 hrs</Text>

                      </Div>

                    </Col>
                  </Row>
                </Div>
              </Div>
            </Col>
            {/***************************** Goal columns *************************/}
            <Col flex size="3">
              <Div className="" d="flex">
                <Text textSize="subheader" textColor={`#252859`}><b>GOALS</b></Text>
                <Button
                  onClick={() =>
                    setShow(true)
                  }
                  h="2rem"
                  w="7.5rem"
                  rounded="md"
                  m={{ l: "5rem", t: "-0.5rem" }}

                  className="button2"
                  bg={`#252859`}


                >
                  Set goal
                </Button>
                <GoalDrawer
                  isOpen={show}
                  onClose={() => setShow(false)}
                />
              </Div>
              <Div rounded="md" p={{ y: "2rem", x: "1.25rem" }} bg={`#f5f5f5`}>
                <Div d="flex">
                  <Div className="goal-Svg" h="30px" w="30px" rounded="circle" bg="#F6ECDF" p={{ x: "0.5rem", y: "0.5rem" }}>
                    <Iconly
                      primaryColor='#ff9b00'
                      name="AddUser"
                      set='broken'
                      stroke='bold'

                    />
                  </Div>
                  <Div w="100%" p={{ x: "0.5rem", y: "0.5rem" }}>
                    <Text textColor="#252859"><b>Build a house</b></Text>
                    <Text textColor="#CDCCCC"><b>Created 3, Aug 1924 </b></Text>
                  </Div>

                </Div>

                <Div p={{ x: "0.5rem", y: "0.5rem" }}>
                  <Row>
                    <Col>
                      <Text textWeight="500">Week 1</Text>
                    </Col>
                    <Col>
                      <Text textWeight="500">UGX 200,000</Text>
                    </Col>
                  </Row>
                  {/***************************** Progress bar *************************/}
                  <Div>
                    <ProgressBar bgcolor={"#252859"} completed={completed} />
                  </Div>

                </Div>

              </Div>
              <Div m={{ t: "0.5rem" }} rounded="md" className="goal-resp" p={{ y: "2rem", x: "1.25rem" }} bg={`#f5f5f5`}>
                <Div d="flex">
                  <Div className="goal-Svg" h="30px" w="30px" rounded="circle" bg="#F6ECDF" p={{ x: "0.5rem", y: "0.5rem" }}>
                    <Iconly
                      primaryColor='#ff9b00'
                      name="AddUser"
                      set='broken'
                      stroke='bold'

                    />
                  </Div>
                  <Div p={{ x: "0.5rem", y: "0.5rem" }}>
                    <Text className="my-small-text" textColor="#252859" ><b>Buy a subaru</b></Text>
                    <Text className="my-small-text" textColor="#CDCCCC"><b>Created 3, Aug 1924 </b></Text>
                  </Div>

                </Div>

                <Div p={{ x: "0.5rem", y: "0.5rem" }}>
                  <Row>
                    <Col>
                      <Text textWeight="500">Week 2</Text>
                    </Col>
                    <Col>
                      <Text textWeight="500">UGX 500,000</Text>
                    </Col>
                  </Row>
                  {/***************************** Progress bar *************************/}
                  <Div>
                    <ProgressBar bgcolor={"#252859"} completed={completed} />
                  </Div>

                </Div>

              </Div>
              <Div shadow="4" m={{ t: "0.5rem" }} rounded="md" className="goal-resp" p={{ y: "2rem", x: "1.25rem" }}>
                {/************************************Chat System************************************/}
                <Div d="flex">

                  <Div m={{ t: "0.5rem" }} p={{ x: "0.5rem", y: "0.5rem" }}>
                    <Text className="my-small-text" textColor="fafafa"><b>My chats</b></Text>
                    <Row>
                      <Col>
                        <Div d="flex" align="center" p={{ x: "0.5rem", y: "0.5rem" }}>
                          <img className="sacco_text" src="image/bg.png" />
                          <Div className="sacco_note" p={{ x: "0.5rem", y: "0.5rem" }} d="flex" align="center" w="20-px" h="20px" rounded="circle" bg="blue" textColor="white">
                            8
                          </Div>
                          <img className="sacco_text" src="image/dp.jpg" />
                          <Div className="sacco_note" p={{ x: "0.5rem", y: "0.5rem" }} d="flex" align="center" rounded="circle" bg="blue" textColor="white">
                            8
                          </Div>
                          <img className="sacco_text" src="image/dp.jpg" />
                          <Div className="sacco_note" p={{ x: "0.5rem", y: "0.5rem" }} d="flex" align="center" rounded="circle" bg="blue" textColor="white">
                            8
                          </Div>
                        </Div>
                      </Col>


                    </Row>
                  </Div>

                </Div>



              </Div>
            </Col>

          </Row>


        </Div>

      </Container>
      {/* Resposive home butto0n design */}


    </>



  );
}

export default Goal;
