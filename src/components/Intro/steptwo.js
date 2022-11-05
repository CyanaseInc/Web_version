import React, { useState } from "react";
import { Text, Input, Div, Row, Col, Anchor, Icon, Container, Button, Image } from "atomize";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Iconly } from "react-iconly";




// 
const stepTwo = ({ nextStep, prevStep }) => {


    return (

        <>
            <Div m={{ t: "5rem" }}>
                <Div d="flex" justify="center" className="under" p="1rem">
                    <Iconly

                        name="Buy"
                        primaryColor={`#252859`}
                        set='bulk'
                        secondaryColor='orange'
                        stroke='bold'
                    />
                </Div>

                <Div d="flex" justify="center" textSize="heading">
                    <Text
                        textAlign="center"
                        textColor="#252859"
                        textSize="heading"
                        textWeight="500"
                    >
                        Investment products &  API
                    </Text>
                </Div>
                <Text
                    textSize="subheader"
                    textAlign="center"
                    textWeight="500"
                >
                    We provide a wide range of Investment products and
                    API to integrate them into your systems
                </Text>
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