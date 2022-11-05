import React, { useState, useEffect } from "react";
import { Text, Button, Div, Col, Row, Icon, Modal, Input,Container } from "atomize";
import "../../docs/app.css";
import { Iconly } from 'react-iconly';
import ProgressBar from "../components/progressbar";
import { useForm } from "react-hook-form";
import StepOne from '../components/goal/StepOne';
import StepTwo from '../components/goal/StepTwo';
import StepThree from '../components/goal/StepThree';
import Final from '../components/goal/Final';
import StepFour from "../components/goal/StepFour";
import StepFive from "../components/goal/StepFive";
function ResGoal() {



    // States to handle errors in the form
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (datal) => {

        // change the status to laoding

        console.log(datal);

        // send data to the API

        const API_PATH = 'http://localhost:3000/handler.php';

        // MAKE AN AJAX REQUEST

        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: datal
        })
            .then(resulta => {

                console.log(resulta.result);
            })
            .catch(error => alert(error));
    }
    //states to handle the previous and next buttons
    const [step, setstep] = useState(1);

    //states for form data
    const [formData, setFormData] = useState({


    });


    // State to handle show and hiding goall addition modal
    const [showModal, hideModal] = useState(false);
    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setstep(step + 1);
    };
    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setstep(step - 1);
    };

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
        // input value from the form
        const { value } = e.target;

        //updating for data state taking previous state and then adding new value to create new object
        setFormData(prevStep => ({
            ...prevStep,
            [input]: value
        }));
    }


    const GoalSteps = () => {

        switch (step) {
            // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
            case 1:
                return (


                    <StepOne nextStep={nextStep} values={formData} />

                );
            case 2:
                return (


                    <StepTwo prevStep={prevStep} nextStep={nextStep} handleFormData={handleInputData} values={formData} />

                );
            case 3:
                return (


                    <StepThree prevStep={prevStep} nextStep={nextStep} handleFormData={handleInputData} values={formData} />

                );
            case 4:
                return (


                    <StepFour prevStep={prevStep} nextStep={nextStep} handleFormData={handleInputData} values={formData} />

                );
            case 5:
                return (


                    <StepFive prevStep={prevStep} nextStep={nextStep} handleFormData={handleInputData} values={formData} />

                );
            // O
            // Only formData is passed as prop to show the final value at form submit
            case 6:
                return (
                    <div className="App">
                        <Container>
                            <Row>
                                <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                                    <Final prevStep={prevStep} values={formData} />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                );

            // default case to show nothing
            default:
                return (
                    <div className="App">
                    </div>
                );
        }



    }

    const MyGoals = ({ isOpen, onClose }) => {
        return (
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                rounded="0"
                maxW="100vw"
                m="0"
                h="205vw"
            >
                <Icon onClick={onClose} size="40px" name="LeftArrowSolid" color="gray400" />
                {/******Modal content */}
                <GoalSteps />
            </Modal>
        );
    };
    /// HANDLING SETTING GOALS USING A MODAL




    /// States for change of conetent to display when user clicks a popup modal
    const [content, changeContent] = useState("deposit");

    ///state to show and hide modal MODAL
    const [showTopUP, setTopUp] = useState(false);

    //states to  handle errors in the form


    /// Check the on click event for the modal and change content


  

    ///MY POPUP  MODAL
    const Deposit = () => {

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
    const MyModal = ({ isOpen, onClose }) => {

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

                <Deposit/>
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
                <Div m={{ l: "2rem" }} p="0.5rem">
                    <Button
                        onClick={() => {
                            hideModal(true);


                        }
                        }
                        rounded="circle"
                        shadow="3"
                        bg="gray100"
                        border="1px solid"
                        borderColor="#252859"
                        textColor="#252859"
                    >
                        Add new goal
                    </Button>
                    <MyGoals
                        isOpen={showModal}
                        onClose={() => hideModal(false)
                        }
                    />
                </Div>

            </Div>


            <MyModal
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
                            onClick={() => {
                                changeContent("deposit");
                                setTopUp(true);
                            }}
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
                            onClick={() => {
                                changeContent("deposit");
                                setTopUp(true);
                            }}
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
                            onClick={() => {
                                changeContent("deposit");
                                setTopUp(true);
                            }}
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