import React, { useState } from "react";
import { Text, Input, Div, Row, Col, Anchor, Icon, Container, Button, Image } from "atomize";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Iconly } from "react-iconly";


const StepTwo = ({ nextStep, prevStep }) => {


    return (

        <>
            <Text
                textSize="heading"
                textWeight="500"
                textAlign="center"
                textColor="#252859"
            >
                Add your goal
            </Text>

            <Text
                textColor="#828282"
                textWeight="500"
                textAlign="center"
                textSize="subheader">
                What do you want to achieve
            </Text>

            <Div m={{ t: "2rem" }} p="0.5rem" bg="#f1f0f0" rounded="md">
                <Div >
                    <Div d="flex" align="center">
                        <Div p="0.5rem">
                            <Iconly
                                primaryColor='black'
                                name="TimeCircle"
                                set='broken'
                                stroke='bold'

                            />
                        </Div>
                        <Text  textColor="black" m={{ t: "-0.6rem" }} textWeight="500">
                            What do you want to achieve?
                        </Text>
                    </Div>
                    <input placeholder="Build a mansion" type="text" name="goal" className="myInput" />
                </Div>
                <Div m={{ t: "2rem" }} >

                    <Div d="flex" align="center">
                        <Div p="0.5rem">
                            <Iconly
                                primaryColor='black'
                                name="TimeCircle"
                                set='broken'
                                stroke='bold'

                            />
                        </Div>
                        <Text  textColor="black" m={{ t: "-0.6rem" }} textWeight="500">
                            How long tdo you wish to accomplish your goal?
                        </Text>
                    </Div>

                    <input placeholder="5 years" type="text" name="goal" className="myInput" />

                </Div>
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
export default StepTwo;