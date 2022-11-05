import React, { useState } from "react";
import { Text, Input, Div, Row, Col, Anchor, Icon, Container, Button, Image } from "atomize";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Iconly } from "react-iconly";


const Final = ({ prevStep }) => {
    // States to handle errors in the form
    const { register, handleSubmit, formState: { errors } } = useForm();

    //states to hide and show calculation
    const [hideDiv, showDiv] = useState("yes");

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
    return (
        <>

            <Div

                m={{ t: "2rem" }}
                justify="center">



                <Div
                    d="flex"
                    justify="center"
                >
                    <Text
                        textAlign="center"
                        m={{ t: "1rem" }}
                        textSize="heading"
                        textColor="#252859"
                        textWeight="500">
                        Make a deposit to continue
                    </Text>
                </Div>
                <Div d="flex" justify="center">

                    <Text
                        textAlign="center"
                        textColor="#898989">
                        Deposit from Wallet
                    </Text>
                </Div>
                <Div m={{ t: "1rem" }} d="flex" align="center" justify="center">

                    <Text textWeight="500" textAlign="center" textColor="#252859" textSize="subheader">
                       You will be required to invest<span className="span">UGX345,567 </span>
                       Weekly or <span className="span">UGX745,567 </span> Monthly in order to
                       reach your saving goal of buying a house in 7 years from now.
                    </Text>
                </Div>
                <Div justify="center">

                    <form className="myform" onSubmit={handleSubmit(onSubmit)}>
                        <Div d="flex" justify="center">
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
                        {errors.amount && <p className="text-error">Your phone number is required</p>}
                        <Div d="flex" justify="center">
                            <Button w="24rem"
                                m={{ t: "2rem", }} className="button2"
                                onClick={() =>
                                    setTopUp(true)
                                }
                                bg="warning700"
                                shadow="3"
                                hoverShadow="4"
                            >
                               Start depositing now
                            </Button>
                        </Div>
                    </form>

                    <Div m={{ t: "2rem", }} d="flex" align="center" justify="center">

                        <Button variant="primary"
                            align="center"
                            hoverShadow="4"
                            bg={`#252859`}
                            rounded="circle"
                            w="24rem"
                            onClick={() =>
                                prevStep()
                            }>

                            Previous
                        </Button>
                    </Div>

                </Div>
            </Div>

        </>
    )

};
export default Final;