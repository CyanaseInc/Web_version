import React, { useState } from 'react';
import { Container, Text, Icon, Div, Col, Row, Button } from "atomize";
import { Iconly } from 'react-iconly';
import Switcher from "../components/Switcher";
import { Link } from 'react-router-dom';


function Wallet() {
    return (
        <>
            <Div className="card">
                {/**************** *************UPPER BLUE SECTION****************************************** */}
                <Div rounded="md" align="center" className="upper-card" bg={`#252859`}>
                    
                    <br></br>
                    <Link to="/">
                        <Div className="back" p="0.5rem">
                            <Icon
                            
                                name="LeftArrow"
                                color="white"
                                size="35px"
                            />
                        </Div>
                    </Link>

                    <Div p="0.5rem">
                        <Text d="flex" align="center" justify="center" textColor="#898989" textSize="heading" textWeight="600">My Wallet</Text>
                        <Div className="wallet_svg" d="flex" justify="center" align="center" rounded="circle" p="0.5rem" >
                            <Iconly
                                primaryColor='#ff9b00'
                                secondaryColor='orange'
                                name="Wallet"
                                set='bulk'
                                stroke='bold'

                            />
                        </Div>
                        <Div bg="#3C426B" rounded="md" m={{ t: "1rem" }} p={{ x: "0.5rem", y: "0.7rem" }}>
                            <Text m={{ t: "0.5rem" }} d="flex" justify="center" align="center"><b>Account balance</b></Text>
                            <Text m={{ t: "0.5rem" }} d="flex" justify="center" align="center" textSize="heading">UGX 303,300</Text>

                            <Button m={{ t: "0.5rem" }} className="button2"
                                bg="warning700"
                                shadow="3"
                                hoverShadow="4"
                            >
                                Top up
                            </Button>
                        </Div>
                    </Div>
                </Div>
                {/**************** *************LOWER WHITE SECTION****************************************** */}
                <Div className="lower_part">

                    {/**************** *************RECENT ACTIVITY SECTION****************************************** */}

                    <Div p={{ x: "0.5rem", y: "0.5rem" }} m={{ t: "1rem", l: "0.5rem" }}>
                        <Text className="text_fst"><b>Recent activity</b></Text>
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
                                        <Text textSize="subheader" textWeight="500">Top up</Text>
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
                                        <Text textSize="subheader" textWeight="500">Top up</Text>
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
                </Div>
            </Div>
        </>

    );

}
export default Wallet;