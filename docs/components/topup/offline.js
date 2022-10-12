import React, { useState } from "react";
import { Text, Input, Div, Row, Col, Anchor, Icon, Container, Button, Image } from "atomize";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Iconly } from "react-iconly";


const Offline = ({ nextStepOnline, prevStepOnline }) => {
    const [select, selected] = useState("home");
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <>

            <Div justify="center">
                <Div d="flex" align="center" justify="center">
                    <Text textAlign="center" m={{ t: "1rem" }} textSize="heading" textColor="#252859" textWeight="500">
                        Make an offline deposit
                    </Text>
                </Div>
                <Div d="flex" justify="center">

                <Text textAlign="center" textColor="#898989" textSize="subheader">
                        Deposit money to our  bank account and proceed to send us your deposit receipt
                    </Text>
                </Div>
                <Div m={{t:"2rem"}} d="flex" align="center" justify="center" className="toper">
                    <Iconly

                        name="PaperPlus"
                        primaryColor={`#252859`}
                        set='bulk'
                        secondaryColor='orange'
                        stroke='bold'
                    />
                </Div>
                <Div  >
                    <Div d="flex" justify="center">
                        <Button w="24rem"
                            m={{ t: "2rem" }}
                            onClick={() =>
                                setTopUp(true)
                            }
                            bg="warning700"
                            shadow="3"
                            hoverShadow="4"
                        >
                            Upload your receipt
                        </Button>
                    </Div>

                    <Div m={{ t: "2rem", }} d="flex" align="center" justify="center">

                        <Button variant="primary"
                            align="center"
                            hoverShadow="4"
                            bg={`#252859`}
                            rounded="circle"
                            w="24rem"
                            onClick={() =>
                                prevStepOnline()
                            }>

                            Previous
                        </Button>
                    </Div>

                </Div>


                {errors.fname && <p className="text-error">Your first name is required</p>}

            </Div>

        </>
    )

};
export default Offline;