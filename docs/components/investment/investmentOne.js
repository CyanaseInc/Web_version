import React, { useState } from "react";
import { Text, Input, Div, Row, Col, Anchor, Icon, Container, Button, Image } from "atomize";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Iconly } from "react-iconly";




// creating functional component ans getting props from app.js and destucturing them
const InvestmentOne = ({ nextStep }) => {
    const [select, selected] = useState("home");

    return (

        <>
            <Div>
                <Text
                    textWeight="600"
                    textAlign="center"
                    textColor="#828282"
                    textSize={{ xs: "subheader", md: "heading" }}
                >
                    Risk profile
                </Text>
                <Div
                    rounded="md"
                    border="1px Solid"
                    borderColor="orange"
                    p="0.5rem"
                >
                    <Text textWeight="600" textAlign="center" textColor="orange">
                        Investor risk profiler
                    </Text>
                    <Div d="flex" align="center" justify="center" className="toper">
                        <Iconly

                            name="PaperPlus"
                            primaryColor={`#252859`}
                            set='bulk'
                            secondaryColor='orange'
                            stroke='bold'
                        />
                    </Div>
                    <Text p="0.5rem" textColor="#252859" textAlign="center" textSize={`20px`}>
                        The risk profiler is intended to grade and check how
                        much you can accommodate an investment risk. The information you provide here
                        is strictly for grading purposes. Thus we don not share it with any third parties
                        or use it for any other activities.

                    </Text>
                    <Div d="flex" justify="center">
                        <Button variant="primary"
                            align="center"
                            shadow="3"
                            hoverShadow="4"
                            bg={`#252859`}
                            p="0.5rem"
                            m={{ t: "1rem" }}
                            rounded="circle"
                            w="50%"
                            onClick={() =>
                                nextStep()
                            }>

                            Proceed
                        </Button>
                    </Div>
                </Div>

            </Div>

        </>



    );
};

export default InvestmentOne;