import React, { useState } from "react";
import { Text, Input, Div, Row, Col, Anchor, Container, Button, Radiobox, } from "atomize";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Iconly } from "react-iconly";




// creating functional component ans getting props from app.js and destucturing them
const stepTwo = ({ nextStep, prevStep }) => {

    const [radio, radiosetter] = useState("yes");

    return (

        <>

            <Div>
                <Div align="center" d="flex" justify="center">
                    <Text textColor="#828282" textWeight="500" textSize={{xs: 'subheader', md: 'heading'}}>
                        Answer questions to continue
                    </Text>

                </Div>
                <Row m={{ t:{xs: '1rem', md: '3rem'}}}>
                    <Col>
                        <Div align="center" d="flex" justify="center">
                            <Text textColor="#252859" textWeight="500" textSize="heading">
                                <span className="span">What are your</span> objectives for investing?
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
                                <div className="row radio">
                                    <input id="saving" type="radio" name="objective" value="2" checked="checked" />
                                    <label for="saving">Savings</label>
                                </div>

                                <div  className="row radio">
                                    <input id="ret" type="radio" name="objective" value="3" />
                                    <label for="ret">Retirement</label>
                                </div>

                                <div  className="row radio">
                                    <input id="pre" type="radio" name="objective" value="5" />
                                    <label for="pre">Capital preservation</label>
                                </div>
                                
                                <div  className="row radio">
                                    <input id="pr" type="radio" name="objective" value="7" />
                                    <label for="pr">Profit generation</label>
                                </div>
                            </Div>
                        </Div>
                    </Col>
                    <Col>
                        <Div align="center" d="flex" justify="center">
                            <Text textColor="#252859" textWeight="500" textSize="heading">
                                <span className="span">What is your</span>investment time horizon?
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
                                <div class="row radio">
                                    <input id="less" type="radio" name="time" value="1" checked="checked" />
                                    <label for="less">less than 1 year</label>
                                </div>

                                <div class="row radio">
                                    <input id="two" type="radio" name="time" value="2" />
                                    <label for="two">1 - 2 years</label>
                                </div>

                                <div class="row radio">
                                    <input id="five"type="radio" name="time" value="3" />
                                    <label for="five">2- 5years</label>
                                </div>
                                <div class="row radio">
                                    <input id="ten"type="radio" name="time" value="5" />
                                    <label for="ten">Greater than 5years</label>
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



    );
};

export default stepTwo;