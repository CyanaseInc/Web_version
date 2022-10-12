import React, { useState } from "react";
import { Text, Input, Div, Row, Col, Anchor, Icon, Container, Button, Image } from "atomize";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Iconly } from "react-iconly";


const StepEight = ({ nextStep, prevStep }) => {
    const [select, selected] = useState("home");

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
                                <span className="span">Considering the negative impact of inflation on your savings </span> albeit taking , growth investing is often used to 
counteract its effect, while exposing you to short term volatility. Which of the following options best 
resonates with you
                            </Text>
                        </Div>
                        <Div

                            m={{ t: "1rem" }} p="0.5rem" d="flex"
                            align="center"
                            rounded="md"
                            shadow="3"
                            h="1auto"
                            border="1px solid"
                            borderColor="#ff9b00;"
                        >
                            <Div p="0.5rem">
                                <div  className="row radio">
                                    <input id="saving" type="radio" name="objective" value="2" checked="checked" />
                                    <label for="saving">I am comfortable with the arrangement to beat inflation</label>
                                </div>

                                <div  className="row radio">
                                    <input id="ret" type="radio" name="objective" value="3" />
                                    <label for="ret">I know the risks associated with inflation, but I would prefer middle ground</label>
                                </div>

                                <div  className="row radio">
                                    <input id="pre" type="radio" name="objective" value="5" />
                                    <label for="pre">It could reduce my savings but I have no tolerance for loss</label>
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
export default StepEight;