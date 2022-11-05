import React, { useState } from "react";
import { Text, Input, Div, Row, Col, Anchor, Icon, Container, Button, Image } from "atomize";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Iconly } from "react-iconly";


const StepFour = ({ nextStep,prevStep}) => {
    const [select, selected] = useState("home");

    return (

        <>



                <Div>
                    <Div align="center" d="flex" justify="center">
                        <Text textColor="#828282" textWeight="500" textSize={{ t:{xs: 'subheader', md: 'heading'}}}>
                            Answer questions to continue
                        </Text>

                    </Div>
                    <Row  m={{ t:{xs: '1rem', md: '3rem'}}}
                    >
                        <Col>
                            <Div align="center" d="flex" justify="center">
                                <Text textColor="#252859" textWeight="500"textSize='heading'>
                                    <span className="span">How much </span> do you want to invest?
                                </Text>

                            </Div>
                            <Div

                                m={{ t: "1rem" }} p="0.5rem" d="flex"
                                align="center"
                                rounded="md"
                                shadow="3"
                                h="10rem"
                                border="1px solid"
                                borderColor="#ff9b00;"
                            >
                                <Div p="0.5rem">
                                    <div  className="row radio">
                                        <input id="saving" type="radio" name="objective" value="2" checked="checked" />
                                        <label for="saving">$1k-$2k</label>
                                    </div>

                                    <div  className="row radio">
                                        <input id="ret" type="radio" name="objective" value="3" />
                                        <label for="ret">$2k-$5k</label>
                                    </div>

                                    <div  className="row radio">
                                        <input id="pre" type="radio" name="objective" value="5" />
                                        <label for="pre">$1k-$2k</label>
                                    </div>

                                    <div  className="row radio">
                                        <input id="pr" type="radio" name="objective" value="7" />
                                        <label for="pr">$5k-$10k</label>
                                    </div>
                                </Div>
                            </Div>
                        </Col>
                        <Col>
                            <Div align="center" d="flex" justify="center">
                                <Text textColor="#252859" textWeight="500" textSize="heading">
                                    <span className="span">What is your source </span>of capital?
                                </Text>

                            </Div>
                            <Div

                                m={{ t: "1rem" }} p="0.5rem" d="flex"
                                align="center"
                                rounded="md"
                                shadow="3"
                                h="10rem"
                                border="1px solid"
                                borderColor="#ff9b00;"
                            >
                                <Div p="0.5rem">
                                    <div  className="row radio">
                                        <input id="less" type="radio" name="time" value="2" checked="checked" />
                                        <label for="less">Employment</label>
                                    </div>

                                    <div  className="row radio">
                                        <input id="two" type="radio" name="time" value="3" />
                                        <label for="two">Inheritance/ Gift</label>
                                    </div>

                                    <div  className="row radio">
                                        <input id="five" type="radio" name="time" value="5" />
                                        <label for="five">Savings /Superannuation</label>
                                    </div>
                                    <div  className="row radio">
                                        <input id="ten" type="radio" name="time" value="7" />
                                        <label for="ten">Others</label>
                                    </div>
                                </Div>
                            </Div>
                        </Col>
                    </Row>


                </Div>
                <Div d="flex" justify="center">
                    <Row m={{ t: "2rem", l: "2rem" }} d="flex" align="center" justify="center">
                        <Col>
                            <Button variant="primary"
                                align="center"
                                shadow="3"
                                hoverShadow="4"
                                bg={`#252859`}
                                rounded="circle"
                                w="5rem"
                                onClick={() =>
                                    prevStep()
                                }>

                                Previous
                            </Button>
                        </Col>

                        <Col>
                            <Button variant="primary"
                                align="center"
                                shadow="3"
                                hoverShadow="4"
                                bg={`#252859`}
                                p="0.5rem"
                                m={{ l: "1rem" }}
                                rounded="circle"
                                w="5rem"
                                onClick={() =>
                                    nextStep()
                                }>

                                Next
                            </Button>
                        </Col>
                    </Row>
                </Div>

            </>
    )

};
export default StepFour;