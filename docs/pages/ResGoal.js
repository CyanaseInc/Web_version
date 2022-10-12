import React, { useState, useEffect } from "react";
import { Text, Button, Div, Col, Row, Icon, Modal, Input } from "atomize";
import "../app.css";
import { Iconly } from 'react-iconly';
import ProgressBar from "../components/progressbar";
import { useForm } from "react-hook-form";

function ResGoal() {


    ///DEPOSIT FOR GOAL MODAL
    const [showTopUP, setTopUp] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    ///MY POPUP  MODAL
    const MyModal = () => {

        return (

            <>

                <Div m={{ t: "2rem" }} justify="center">
                    <Div d="flex" justify="center">
                        <Text m={{ t: "1rem" }}
                            textSize="heading"
                            textColor="#252859"
                            textWeight="500">
                            Achieve your goals
                        </Text>
                    </Div>
                    <Div d="flex" justify="center">

                        <Text
                            textAlign="center"
                            textSize="subheader"
                            textColor="#898989">
                            Deposit money to achieve your financial goal
                        </Text>
                    </Div>
                    <Div justify="center">
                        <Div d="flex" align="center" justify="center">
                            <Input w={{ xs: '18.5rem', md: '24rem' }}
                                {...register("amount", { required: true, maxLength: 15 })}
                                placeholder="Enter amount" name="amount" type="text"
                                m={{ t: "3rem" }}
                                p={{ x: "2.5rem" }}
                                prefix={

                                    <Iconly
                                        className="ivn"
                                        name="Wallet"
                                        primaryColor={`#252859`}
                                        set='bulk'
                                        secondaryColor='orange'
                                        stroke='bold'
                                    />
                                }
                            />
                        </Div>

                        <Div d="flex" justify="center">
                            <Button w="24rem"
                                m={{ t: "2rem" }}
                                onClick={() =>
                                    setTopUp(true)
                                }
                                bg="#252859"
                                shadow="3"
                                hoverShadow="4"
                            >
                                Deposit
                            </Button>
                        </Div>

                    </Div>


                    {errors.fname && <p className="text-error">Your first name is required</p>}

                </Div>




            </>
        )

    }
    //MY modal handler
    const DepositModal = ({ isOpen, onClose }) => {

        return (
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                rounded="0"
                maxW={{ xs: 'auto', md: '40vw' }}
                m={{ t: "2rem" }}
                h="auto"
            >
                <Icon
                    name="Cross"
                    pos="absolute"
                    top="1rem"
                    right="1rem"
                    size="20px"
                    onClick={onClose}
                    cursor="pointer"
                />

                <MyModal />
            </Modal>
        );

    }
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    }, []);

    return (
        <>
        <Div d="flex" align="center">
        <Text
                textSize="heading"
                textColor="#252859"
                textWeight="500">
                Your Goals
            </Text>
            <Div p="0.5rem">
            <Button
            rounded="circle"
            shadow="5"
            bg="gray100"
            border="1px solid"
            border="#252859"
            >
                Add new goal
            </Button>
            </Div>
        
        </Div>
          

            <DepositModal
                isOpen={showTopUP}
                onClose={() => setTopUp(false)}
            />
            <Div shadow="4" rounded="md" p={{ y: "1rem", x: "1.25rem" }} bg="white">
                <Div d="flex">
                    <Div
                        className="goal-Svg"
                        h="30px" w="30px"
                        m={{ t: "0.5rem" }}
                        rounded="circle" bg="#F6ECDF"
                        p={{ x: "0.5rem", y: "0.5rem" }}>
                        <Iconly
                            primaryColor='#ff9b00'
                            name="AddUser"
                            set='broken'
                            stroke='bold'

                        />
                    </Div>
                    <Div w="100%" p={{ x: "0.5rem", y: "0.5rem" }}>
                        <Text textSize="subheader" textColor="#252859"><b>Build a house</b></Text>
                        <Text textColor="#CDCCCC"><b>Created 3, Aug 1924 </b></Text>
                    </Div>
                    <Div p="0.5rem">
                        <Button
                            onClick={() => setTopUp(true)}
                            bg="#ff9b00"
                            rounded="circle"
                            sgadow="5"
                        >
                            Deposit
                        </Button>
                    </Div>
                </Div>

                <Div p={{ x: "0.5rem", y: "0.5rem" }}>
                    <Row>
                        <Col>
                            <Text textColor="#252859" textWeight="500">Week 1</Text>
                        </Col>
                        <Col>
                            <Text textColor="#252859" textWeight="500">UGX 200,000</Text>
                        </Col>
                    </Row>
                    {/***************************** Progress bar *************************/}
                    <Div>
                        <ProgressBar bgcolor={"#252859"} completed={completed} />
                    </Div>

                </Div>

            </Div>
            <Div shadow="4" m={{ t: "1rem" }} rounded="md" p={{ y: "2rem", x: "1.25rem" }} bg="white">
                <Div d="flex">
                    <Div
                        className="goal-Svg"
                        h="30px" w="30px"
                        m={{ t: "0.5rem" }}
                        rounded="circle" bg="#F6ECDF"
                        p={{ x: "0.5rem", y: "0.5rem" }}>
                        <Iconly
                            primaryColor='#ff9b00'
                            name="AddUser"
                            set='broken'
                            stroke='bold'

                        />
                    </Div>
                    <Div w="100%" p={{ x: "0.5rem", y: "0.5rem" }}>
                        <Text textSize="subheader" textColor="#252859"><b>Build a house</b></Text>
                        <Text textColor="#CDCCCC"><b>Created 3, Aug 1924 </b></Text>
                    </Div>
                    <Div p="0.5rem">
                        <Button
                            onClick={() => setTopUp(true)}
                            bg="#ff9b00"
                            rounded="circle"
                            sgadow="5"
                        >
                            Deposit
                        </Button>
                    </Div>
                </Div>

                <Div p={{ x: "0.5rem", y: "0.5rem" }}>
                    <Row>
                        <Col>
                            <Text textColor="#252859" textWeight="500">Week 1</Text>
                        </Col>
                        <Col>
                            <Text textColor="#252859" textWeight="500">UGX 200,000</Text>
                        </Col>
                    </Row>
                    {/***************************** Progress bar *************************/}
                    <Div>
                        <ProgressBar bgcolor={"#252859"} completed={completed} />
                    </Div>

                </Div>

            </Div>
            <Div shadow="4" m={{ t: "1rem" }} rounded="md" p={{ y: "2rem", x: "1.25rem" }} bg="white">
                <Div d="flex">
                    <Div
                        className="goal-Svg"
                        h="30px" w="30px"
                        m={{ t: "0.5rem" }}
                        rounded="circle" bg="#F6ECDF"
                        p={{ x: "0.5rem", y: "0.5rem" }}>
                        <Iconly
                            primaryColor='#ff9b00'
                            name="AddUser"
                            set='broken'
                            stroke='bold'

                        />
                    </Div>
                    <Div w="100%" p={{ x: "0.5rem", y: "0.5rem" }}>
                        <Text textSize="subheader" textColor="#252859"><b>Build a house</b></Text>
                        <Text textColor="#CDCCCC"><b>Created 3, Aug 1924 </b></Text>
                    </Div>
                    <Div p="0.5rem">
                        <Button
                            onClick={() => setTopUp(true)}
                            bg="#ff9b00"
                            rounded="circle"
                            sgadow="5"
                        >
                            Deposit
                        </Button>
                    </Div>
                </Div>

                <Div p={{ x: "0.5rem", y: "0.5rem" }}>
                    <Row>
                        <Col>
                            <Text textColor="#252859" textWeight="500">Week 1</Text>
                        </Col>
                        <Col>
                            <Text textColor="#252859" textWeight="500">UGX 200,000</Text>
                        </Col>
                    </Row>
                    {/***************************** Progress bar *************************/}
                    <Div>
                        <ProgressBar bgcolor={"#252859"} completed={completed} />
                    </Div>

                </Div>

            </Div>
        </>
    );

}
export default ResGoal