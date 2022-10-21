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

                        name="Heart2"
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
                        Students
                    </Text>
                </Div>
                <Text
                    textSize="subheader"
                    textAlign="center"
                    textWeight="500"
                >
                    Our platform is simplified to support students investments
                </Text>
            </Div>
            <Div m={{t:"2rem"}} d="flex" justify="center">
                
                        <NavLink to="/Deposit">
                            <Button variant="primary"
                                align="center"
                                shadow="3"
                                hoverShadow="4"
                                bg={`#252859`}
                                rounded="circle"
                               
                            >

                                Get started
                            </Button>
                        </NavLink>

               
            </Div>

        </>



    );
};

export default stepTwo;