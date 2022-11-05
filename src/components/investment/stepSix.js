import React, { useState } from "react";
import { Text, Input, Div, Row, Col, Anchor, Icon, Container, Button, Image } from "atomize";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Iconly } from "react-iconly";


const StepSix = ({ nextStep, prevStep }) => {
    const [select, selected] = useState("home");

    return (

        <>



            <Div>
                <Div align="center" d="flex" justify="center">
                    <Text textColor="#828282" textWeight="500" textSize={{ t:{xs: 'subhead', md: 'heading'}}}>
                        Answer questions to continue
                    </Text>

                </Div>
                <Row m={{ t:{xs: '1rem', md: '3rem'}}}>
                    <Col>
                        <Div align="center" d="flex" justify="center">
                            <Text textColor="#252859" textWeight="500" textSize="heading">
                                <span className="span">  The table below shows the highest one-year gain and one year </span>
                                loss on five different hypothetical
                                investments of $10,000. Given the potential profit/ loss, where would you invest your money??
                            </Text>
                           
                        </Div>
                        <Row>
                                <Col>
                                    <Text textWeight="600">
                                        Portfolio
                                    </Text>
                                    <Text textWeight="600">
                                        Highest Gain
                                    </Text>
                                    <Text textWeight="600">
                                        Highest loss
                                    </Text>
                                </Col>

                                <Col>
                                    <Text textWeight="600">
                                        A
                                    </Text>
                                    <Text>
                                        $1000
                                    </Text>
                                    <Text>
                                        $200
                                    </Text>
                                </Col>
                                <Col>
                                    <Text textWeight="600">
                                        B
                                    </Text>
                                    <Text>
                                        $1500
                                    </Text>
                                    <Text>
                                        $450
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        C
                                    </Text>
                                    <Text>
                                        $2500
                                    </Text>
                                    <Text>
                                        $1200
                                    </Text>
                                </Col>
                                <Col>
                                    <Text textWeight="600">
                                        D
                                    </Text>
                                    <Text>
                                        $4000
                                    </Text>
                                    <Text>
                                        $2200
                                    </Text>
                                </Col>
                            </Row>
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
                                    <label for="saving">A</label>
                                </div>

                                <div  className="row radio">
                                    <input id="ret" type="radio" name="objective" value="3" />
                                    <label for="ret">B</label>
                                </div>

                                <div  className="row radio">
                                    <input id="pre" type="radio" name="objective" value="5" />
                                    <label for="pre">C</label>
                                </div>

                                <div  className="row radio">
                                    <input id="pr" type="radio" name="objective" value="7" />
                                    <label for="pr">D</label>
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
export default StepSix;