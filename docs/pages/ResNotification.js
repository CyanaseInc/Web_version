import React, { useState } from 'react';
import { Container, Text, Button, Div, Col, Row, Icon } from "atomize";
import "../app.css";
import { Iconly } from 'react-iconly';
import { Link } from 'react-router-dom';
function ResNotification() {

    return (
        <Div p={{ x: "0.5rem", y: "0.5rem" }} m={{ t: "1rem", l: "0.5rem" }}>
            <Div d=" flex">
                <Link to="/">
                    
                </Link>
<Text textSize="subheader"textWeight="700"textColor="#252859">Notifications</Text>
            </Div>
            <Text className="text_fst"><b>My Notifications</b></Text>
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

    );
}
export default ResNotification