import React, { useState } from 'react';
import { Container, Text, Tag, Div, Col, Row, Switch, Button } from "atomize";
import { Iconly } from 'react-iconly';


function BtnSlider({ direction, moveSlide, text }) {

    return(
        <>

            <Div p="0.5rem" d="flex" align="center" justify="center" >
                <Button
                
                className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
                    onClick={moveSlide}
                    shadow="5"
                    w="6rem" m={{ t: "0.5rem" }}
                    rounded="md" bg="#252859">
                    {text}
                </Button>
            </Div>
        </>
    )



}
export default BtnSlider;