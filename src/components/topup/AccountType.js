import React, { useState } from "react";
import { Text, Input, Div, Row, Col, Anchor, Icon, Container, Button, Image } from "atomize";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Iconly } from "react-iconly";




// creating functional component ans getting props from app.js and destucturing them
const AccountType = ({ nextStepOnline, prevStepOnline }) => {
    const [select, selected] = useState("home");

    return (

        <>


            <Text
                textAlign="center"
                textColor="#252859"
                textWeight="500"
                textSize="heading">
                Account type
            </Text>
            <Text
                textAlign="center"
                textColor="#828282"
                textWeight="500"
                textSize="subheader">
                Choose the currency in which you would like to invest your money
            </Text>


            {/*************************Card section***************************** */}

            <Div m={{t:"2rem"}}>

                <Row>
                    <Col>
                        <Div
                            className={` ${select === "pe" ? 'selected' : 'not_selected'}`}
                            m={{ t: "1rem" }} p="0.5rem" d="flex"
                            align="center"
                            rounded="md"
                            shadow="3"
                            h="10rem"
                            border="1px solid"
                            borderColor="#ff9b00;"
                            onClick={() =>
                                selected("pe")
                            }>
                            <Div p="0.5rem">
                              
                                <Text textAlign="center" textSize="heading" textWeight="500">
                                  Dollar account (USD)
                                </Text>
                                <Text textAlign="center" textColor="#808080"  textWeight="500">
                                    Deposit in your local currency and we shall change it to USD
                                    (Standard charges apply)
                                </Text>
                            </Div>
                        </Div>
                    </Col>
                    <Col h="10rem">
                        <Div
                            className={` ${select === "vc" ? 'selected' : 'not_selected'}`}
                            m={{ t: "1rem" }} p="0.5rem" d="flex"
                            align="center"
                            rounded="md"
                            shadow="3"
                            h="10rem"
                            border="1px solid"
                            borderColor="#ff9b00;"
                            onClick={() =>
                                selected("vc")
                            }>
                            <Div p="0.5rem">
                              
                              <Text textAlign="center" textSize="heading" textWeight="500">
                                  Basic account (UGX)
                              </Text>
                              <Text textAlign="center" textColor="#808080"  textWeight="500">
                                Deposit in your local currency.
                              </Text>
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
                                prevStepOnline()
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
                                nextStepOnline()
                            }>

                            Next
                        </Button>
                    </Col>
                </Row>
            </Div>

        </>



    );
};

export default AccountType;