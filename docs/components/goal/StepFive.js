import React, { useState } from "react";
import { Text, Div, Row, Col, Button } from "atomize";
import Days from "./days";


const StepFive = ({ nextStep, prevStep }) => {


    return (
        <>
            <Div>
                <Text
                    textSize="heading"
                    textWeight="500"
                    textAlign="center"
                    textColor="#252859"
                >
                    Reminder
                </Text>
                <Text
                    textAlign="center"
                    textColor="#828282"
                    textWeight="500"
                    textSize="subheader">
                    Let us remind you when you forget to deposit
                </Text>
                <Days />
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
                                {nextStep();}
                            }>

                            Next
                        </Button>
                    </Col>
                </Row>
            </Div>
            </Div>
        </>
    )


}
export default StepFive;