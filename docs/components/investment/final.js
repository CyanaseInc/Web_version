import React, { useState } from "react";
import { Text, Div, Button,Row,Col } from "atomize";
import { Iconly } from "react-iconly";
import { NavLink } from "react-router-dom";

const Final = ({ nextStep, prevStep,links  }) => {
    const [select, selected] = useState("home");

    return (

        <>

            <Div align="center" d="flex" justify="center">
                <Text textColor="#828282" textWeight="500" textSize="heading">
                    Risk Profile
                </Text>

            </Div>
            {/*************************Card section***************************** */}

            <Div>
                {/*************************PERSONAL INVESTMENTS***************************** */}
                <Div p={{ x: "2rem", y: "2rem" }} borderColor="#252859" border="2px solid"

                    className={` ${select === "personal" ? 'selected' : 'not_selected'}`}
                    m={{ t: "1rem" }}

                    rounded="md"
                    shadow="3"

                >
                    <Div d="flex" justify="center" align="center" p="0.5rem">



                        <Text textColor="#ff9b00;" p="0.2rem" textSize="subheader" textWeight="600">
                            Congratulations
                        </Text>
                    </Div>
                    <Div d="flex" align="center" justify="center" className="toper">
                        <Iconly

                            name="Chart"
                            primaryColor={`#252859`}
                            set='bulk'
                            secondaryColor='orange'
                            stroke='bold'
                        />
                    </Div>
                    <Div>
                        <Text textWeight="500" textSize={{ xs: 'subheader', md: 'heading'}} textColor="#252859">
                            You have successfully completed your risk profile. We grade investors as
                            <span className="span">Low/ Conservative, Aggressive, Assertive and Moderate</span>.
                            Based on your answers your a<span ClassName="span">Conservative investor.</span> Your money will always be invested as follows.

                        </Text>
                      
                    </Div>
                    <Row>
                            <Col>
                                <Text textSize="subheader" textWeight="500">
                                    Cash
                                </Text>
                                <Text >
                                    45%
                                </Text>
                            </Col>
                            <Col>
                            <Text textWeight="500"textSize="subheader">
                                    Credit
                                </Text>
                                <Text>
                                    40%    
                                </Text>
                            </Col>

                            <Col>
                            <Text textWeight="500" textSize="subheader">
                                    Venture
                                </Text>
                                <Text>
                                   10% 
                                </Text>
                            </Col>
                            <Col>
                            <Text textWeight="500" textSize="subheader">
                                    Absolute return
                                </Text>
                                <Text>
                                    5%
                                </Text>
                            </Col>
                        </Row>
                        <NavLink to={`${links === "resDeposit" ? '/ResDeposit' :'/Deposit'}`}>
                       <Div d="flex" justify="center">
                        <Button variant="primary"
                            align="center"
                            shadow="3"
                            hoverShadow="4"
                            bg={`#ff9b00`}
                            p="0.5rem"
                            m={{ t: "1rem" }}
                            rounded="circle"
                           
                        >

                            Make a deposit To invest
                        </Button>
                    </Div>   
                        </NavLink>  
                   
                </Div>
            </Div>




        </>
    )

};
export default Final;