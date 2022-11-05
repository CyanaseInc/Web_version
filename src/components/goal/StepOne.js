import React, { useState } from "react";
import { Text, Input, Div, Row, Col, Modal, Icon, Container, Button, Image } from "atomize";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Iconly } from "react-iconly";


const StepOne = ({ nextStep, setValue, links }) => {



    return (

        <>
            <Div m={{ t: "5rem" }}>
                <Text
                    textColor="black"
                    textAlign="center"
                    textSize="heading"
                    textWeight="500">
                    Hello, Viannie
                </Text>
                <Text
                    textAlign="center"
                    textSize="subheader"
                    textColor="gray700"
                    textWeight="500"
                >Let your dreams come true by investing for them
                </Text>
            </Div>

            <Div d="flex" align="center" justify="center" className="toper">
                <Iconly

                    name="TimeCircle"
                    primaryColor={`#252859`}
                    set='bulk'
                    secondaryColor='orange'
                    stroke='bold'
                />
            </Div>

            <Div>
                <Text
                    textAlign="center"
                    textColor="#252859"
                    textWeight="500"
                    textSize={`35px`}
                >
                    Goal Investing
                </Text>
                <Button

                    variant="primary"
                    align="center"
                    shadow="3"
                    hoverShadow="4"
                    bg={`#252859`}
                    p="0.5rem"
                    m={{ t: "1rem" }}
                    rounded="circle"
                    w="100%"
                    onClick={() =>
                        nextStep()
                    }>

                    Get started
                </Button>
            </Div>
        </>

    )


}
export default StepOne;