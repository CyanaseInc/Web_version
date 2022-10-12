import React, { useState } from 'react';
import { Container, Text, Icon, Div, Col, Row, Switch, SideDrawer } from "atomize";
import { Iconly } from 'react-iconly';
import Switcher from "../components/Switcher";
import ResGoal from './ResGoal';
import { Link } from 'react-router-dom';


function ResHome() {

  const [show, setShow] = useState(false);

  const GoalDrawer = ({ isOpen, onClose }) => {

    return (
      <SideDrawer bg="gray100" isOpen={isOpen} onClose={onClose} w={{ xs: "100vw", md: "50rem" }}>
        <Div onClick={onClose} d="flex" m={{ b: "4rem" }}>
          <Icon size="30px" name="LeftArrowSolid" color={`#252859`} />

        </Div>

        <ResGoal />
      </SideDrawer>
    );
  };
  return (
    <>
      <Div className="card">
        {/**************** *************UPPER BLUE SECTION****************************************** */}
        <Div rounded="md" align="center" className="upper-card" bg={`#252859`}>
          <Row p={{ y: "1rem", x: "1.25rem" }} flex="row">
            <Col size="10">
              <Div w="100%" rounded="md" d="flex" align="center" className="search"  >
                <Iconly
                  primaryColor='white'
                  name="Search"
                  set='broken'
                  stroke='bold'

                />
                <Div d="flex" flexGrow="1" justify="flex-end">
                  <p> Welcome back, Viannie</p>
                </Div>

              </Div>
            </Col>
            <Col size={`2%`}>
              <Div className="dp_res" >
                <img className="dp" src="../image/dp.jpg" />
              </Div>

            </Col>
          </Row>
          <Div p="0.5rem">
            <Div p={{ x: "0.5rem", y: "0.5rem" }} d="flex">
              <Div>
                <Text textSize="paragraph">Nov, 5</Text>
                <Text textSize="subheader"><b>Your statistics</b></Text>
              </Div>
              <Div flexGrow="1" d="flex" justify="flex-end" >
                <Row>
                  <Col>

                    <Div h="40px" w="40px" align="center" rounded="circle" bg="#3C426B" p={{ x: "0.5rem", y: "0.5rem" }}>
                      <Link to="/Wallet">
                        <Iconly
                          primaryColor='#ff9b00'
                          name="Wallet"
                          set='broken'
                          stroke='bold'

                        />{' '}
                      </Link>
                    </Div>


                  </Col>
                  <Col>
                    <Div
                      onClick={() => setShow(true)}
                      h="40px" w="40px"
                      rounded="circle"
                      bg="#3C426B"
                      p={{ x: "0.5rem", y: "0.5rem" }}>

                      <Iconly
                        primaryColor='#ff9b00'
                        name="AddUser"
                        set='broken'
                        stroke='bold'

                      />
                    </Div>
                    <GoalDrawer
                      isOpen={show}
                      onClose={() => setShow(false)}
                    />
                  </Col>
                </Row>




              </Div>
            </Div>
            <Div className="text" p="0.2rem">
              <Row>
                <Col>
                  <Div p={{ x: "0.5rem", y: "0.5rem" }} bg="#3C426B" rounded="md">
                    <Iconly
                      primaryColor='#ff9b00'
                      name="Wallet"
                      set='bold'
                      stroke='bold'

                    />
                    <Text textSize="subheader">Deposit</Text>
                    <Text textSize="title">UGX <b>230,000</b></Text>
                  </Div>
                </Col>
                <Col>
                  <Div p={{ x: "0.5rem", y: "0.5rem" }} bg="#3C426B" rounded="md">
                    <Iconly
                      primaryColor='#ff9b00'
                      name="Work"
                      set='bold'
                      stroke='bold'

                    />
                    <Text textSize="subheader">Networth</Text>
                    <Text textSize="title">UGX <b>2,000,0</b></Text>
                  </Div>
                </Col>
              </Row>



            </Div>
            <Div bg="#3C426B" rounded="md" m={{ t: "1rem" }} p={{ x: "0.5rem", y: "0.5rem" }}>
              <Row flex="row">
                <Col size="2">
                  <Div h="40px" w="40px" align="center" rounded="circle" bg="#3C426B" p={{ x: "0.5rem", y: "0.5rem" }}>
                    <Iconly
                      primaryColor='#ff9b00'
                      name="InfoCircle"
                      set='broken'
                      stroke='bold'
                      size="medium"
                    />
                  </Div>
                </Col>
                <Col size="8">
                  <Text><b>Saving Tips</b></Text>
                  <Text>Dont spend all your money invest</Text>
                </Col>
              </Row>


            </Div>
          </Div>
        </Div>
        {/**************** *************LOWER WHITE SECTION****************************************** */}
        <Div className="lower_part">
          <Div d="flex" align="center" m={{ t: "0.5rem" }} >

            {/**************** *************MESSAGE NOTE SECTION****************************************** */}
            <Row>
              <Col>
                <Div d="flex" align="center" p={{ x: "0.5rem", y: "0.5rem" }}>
                  <img className="sacco_text" src="image/dp.jpg" />
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
            {/**************** *************AUTO SAVE SECTION****************************************** */}
            <Div p="0.5rem">
              <Div className="auto_save" p="0.5rem" d="flex" flexGrow="1" align="flex-end" justify="flex-end" rounded="md" bg="#252859">
                <Text textColor="white">Auto save</Text>
                < Switcher />
              </Div>
            </Div>
          </Div>

          {/**************** *************RECENT ACTIVITY SECTION****************************************** */}

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
        </Div>
      </Div>
    </>

  );

}
export default ResHome;