import React, { useState, useEffect } from "react";
import { Container, Text, Button, Div, Col, Row, Icon, Modal } from "atomize";
import "../app.css";
import ResHome from "./ResHome";
import Graph from "../components/Graph";


function Home() {

  ///Get started button state
  const [show, hide] = useState("show");

  const [showTopUP, setTopUp] = useState(false);

  const TopupModal = ({ isOpen, onClose }) => {

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        rounded="0"
        maxW="40vw"
        m={{ t: "2rem" }}
        h="80vh"
      >
        <Icon
          name="Cross"
          pos="absolute"
          top="1rem"
          right="1rem"
          size="16px"
          onClick={onClose}
          cursor="pointer"
        />

        <Text
          p={{ l: "0.5rem", t: "0.25rem" }}
          m={{ b: "2rem" }}
          h="calc(100vh - 10rem)"
        >
          This is an introduction to Cyanase MOdal
        </Text>

      </Modal>
    );
  };

  return (
    <>
      <Container className="menu">

        <Div className="cont">
          <Div>
            <Text textSize="subheader" textColor={`#252859`}><b>YOUR STATISTICS</b></Text>
          </Div>
          <Row w="100%" flexDir="row">
            <Col size="9">
              <Row d="flex" align="center" flexDir="row">
                <Col>
                  <Div rounded="sm" className="my_card" justify="center" align="center" p={{ y: "2rem", x: "1.25rem" }} bg={`#FDE5C3`}>
                    <Text textSize="subheader">Deposit</Text>
                    <Text textSize="heading">UGX<b>23,900,848</b></Text>
                  </Div>
                </Col>
                <Col >
                  <Div rounded="sm" className="my_card" p={{ y: "2rem", x: "1.25rem" }} bg={`#252859`}>
                    <Text textSize="subheader" textColor="white">Networth</Text>
                    <Text textSize="heading" textColor="white">UGX <b>70,004,848</b></Text>
                  </Div>
                </Col>

              </Row>
              {/********************************************GET STARTED*************************************************/}
              <Div className={` ${show === "show" ? 'display_yes' : 'display_none'}`}>
                <Div className='get_started'
                  shadow="3" m={{ t: "2rem" }} p={{ y: "6.5rem", x: "1.25rem" }}>
                  <Row>
                    <Col><Text><b>Welcome Investor</b></Text>
                      <Text>Make more deposits today</Text>
                    </Col>
                    <Col>
                      <button
                        onClick={() => {
                          hide("hide");
                          setTopUp(true);
                        }} className="button">Get started</button>
                      <TopupModal
                        isOpen={showTopUP}
                        onClose={() => setTopUp(false)}
                      />
                    </Col>
                  </Row>
                </Div>
                <Div className='overlap' d="flex" justify="center">
                  <img width="350" src="../image/bg.png" />
                </Div>
              </Div>
              <TopupModal
                isOpen={showTopUP}
                onClose={() => setTopUp(false)}
              />
             {/*** * <Graph />*/}
            </Col>
            <Col size="3">
              <Div className="sacco_stat" justify="center" rounded="md" p={{ y: "1rem", x: "0.25rem" }} bg={`#252859`}>

                <Text textColor="white" ><b> Your statistics.</b></Text>
                <Text textColor="white" >Total Sacco Activity</Text>
                <Div p={{ y: "1rem", x: "0.25rem" }} >

                  <Row flex="row">
                    <Col>
                      <Text textColor="white" >35%</Text>
                      <Text textColor="white" >Loans</Text>
                    </Col>
                    <Col>
                      <Text textColor="white" >5%</Text>
                      <Text textColor="white" >Deposits</Text>
                    </Col>
                    <Col>
                      <Text textColor="white" >25%</Text>
                      <Text textColor="white" >Withdraw</Text>
                    </Col>
                  </Row>
                  <Graph />
                  <Text m={{ t: "1rem" }} textColor="white" >Total Sacco Activity</Text>
                  <Text textSize="subheader" textColor="white">UGX <b>23,004,848</b></Text>
                </Div>

              </Div>

            </Col>
          </Row>
        </Div>

      </Container>
      {/* Resposive home butto0n design */}
      <Div className="ResHome">
        <ResHome></ResHome>
      </Div>

    </>



  );
}

export default Home;
