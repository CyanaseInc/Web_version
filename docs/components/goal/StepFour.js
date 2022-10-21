import React, { useState } from "react";
import { Text, Input, Div, Row, Col, Anchor, Icon, Container, Button, Image } from "atomize";




const StepFour = ({ nextStep, prevStep }) => {

    const [select, selected] = useState("home");


    return (

        <>

            <Text
                textSize="heading"
                textWeight="500"
                textAlign="center"
                textColor="#252859"
            >
                Deposit Time
            </Text>
            <Text
                textAlign="center"
                textColor="#828282"
                textWeight="500"
                textSize="subheader">
          When do you want to deposit for this goal
            </Text>

            {/*************************SACCO GROUPS***************************** */}
            <Div className={` ${select === "sacco" ? 'selected' : 'not_selected'}`}
                m={{ t: "2rem" }} p="0.5rem"
                border="1px solid"
                borderColor="#ff9b00;"
                rounded="md"
                shadow="3"
                onClick={() =>
                    selected("sacco")
                }>


                <Div d="flex" justify="center" align="center">
                    <Text textSize="subheader" textWeight="500">
                        Weekly
                    </Text>
                </Div>

                <Div d="flex" justify="center" align="center">
                    <Text
                     textAlign="center"
                     textColor="#828282"
                     textWeight="500"
                    >
                 Make weekly deposits to achieve this goal

                    </Text>
                </Div>

            </Div>


            <Div className={` ${select === "one" ? 'selected' : 'not_selected'}`}
                m={{ t: "1rem" }} p="0.5rem"
                border="1px solid"
                borderColor="#ff9b00;"
                rounded="md"
                shadow="3"
                onClick={() =>
                    selected("one")
                }>


                <Div d="flex" justify="center" align="center">
                    <Text textSize="subheader" textWeight="500">
                       Monthly
                    </Text>
                </Div>

                <Div d="flex" justify="center" align="center">
                    <Text
                      textAlign="center"
                      textColor="#828282"
                      textWeight="500"
                    >
                 Make monthly deposits to achieve this goal.

                    </Text>
                </Div>

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
    )

};
export default StepFour;