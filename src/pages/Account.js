import React, { useState } from 'react';
import { Container, Text, Button, Div, Col, Modal, Icon } from "atomize";
import "../../docs/app.css";
import Investment from './ResInvestment';
import ResAccount from './ResAccount';
import NoteSetting from './noteSetting';
import { Iconly } from 'react-iconly';

function Account() {

  //Risk profiler/ investment setting
  const [showModal, hideModal] = useState(false);
  // specify which content appears in th e modal dynamically

  const [modalContent, changeContent] = useState("account");

  let myModal = "";
  if (modalContent === "account") {
    // if user clicks account setting, show account setting content
    myModal = <ResAccount />;

  } else if (modalContent === "investment") {

    // if user clicks account investment, show account investment content
    myModal = <Investment />;

  } else if (modalContent === "notification") {

    // if user clicks account notification, show account notification content
    myModal = <NoteSetting/>;

  }

  ///Investment setting modal

  const RiskProfilerMOdal = ({ isOpen, onClose }) => {
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
        {myModal}
      </Modal>
    );
  };

  return (
    <>
      <Container>
        {/**Setings options */}
        <Div m={{ l: "10rem" }}>
          <Text m={{ t: "2rem" }} textWeight="900">Settings</Text>
          <Div 
                 onClick={() => {
                  hideModal(true);
                  changeContent("account");
  
                }
                }
          hoverBg="gray300" 
          rounded="md" 
          p="0.5rem"
           m={{ t: "2rem" }}>

            <Div
       
              p={{ y: "0.25rem" }}
              m={{ t: "1rem", }}
              className="listings">
              <Iconly

                name="User"
                primaryColor={`black`}
                set='broken'
                secondaryColor='orange'
                stroke='bold'
              />
              <Text
              
                textSize={`20px`}
                textColor={`#ff9b00`}
                textWeight="700"
                m={{ l: "0.7rem", }}>
                Account
              </Text>
            </Div>
            <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>
              Next of kin, profile, Security, privacy
            </Text>
          </Div>
          <RiskProfilerMOdal
              isOpen={showModal}
              onClose={() => hideModal(false)
              }
            />
          <Div hoverBg="gray300" rounded="md" p="0.5rem" m={{ t: ".5rem" }}>
            <Div
              p={{ y: "0.25rem" }}
              m={{ t: "1rem", }}
              className="listings"
              onClick={() => {
                hideModal(true);
                changeContent("notification");

              }
              }
            >
              <Iconly

                name="Notification"
                primaryColor={`black`}
                set='broken'
                secondaryColor='orange'
                stroke='bold'
              />
              <Text
                textSize={`20px`}
                textColor={`#ff9b00`}
                textWeight="700"
                m={{ l: "0.7rem", }}>
                Notification
              </Text>
            </Div>
            <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>
              Goals, saving tips, auto invest
            </Text>
          </Div>
          <Div hoverBg="gray300" rounded="md" p="0.5rem" m={{ t: "1rem" }}>
            <Div p={{ y: "0.25rem" }} m={{ t: "0.5rem", }} className="listings">
              <Iconly

                name="Document"
                primaryColor={`black`}
                set='broken'
                secondaryColor='orange'
                stroke='bold'
              />
              <Text
                textSize={`20px`}
                textColor={`#ff9b00`}
                textWeight="700"
                m={{ l: "0.7rem", }}>
                FAQS
              </Text>
            </Div>
            <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>
              Learn more about us
            </Text>
          </Div>
          <Div rounded="md" hoverBg="gray300" p="0.5rem" m={{ t: "1rem" }}>
            <Div p={{ y: "0.25rem" }} m={{ t: "0.5rem", }} className="listings">
              <Iconly

                name="Calling"
                primaryColor={`black`}
                set='broken'
                secondaryColor='orange'
                stroke='bold'
              />
              <Text
                textSize={`20px`}
                textColor={`#ff9b00`}
                textWeight="700"
                m={{ l: "0.7rem", }}>
                Help Center
              </Text>
            </Div>
            <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>
              WhatsApp, Email, Call, Social media
            </Text>
          </Div>

          <Div m={{ t: "0.2rem" }} d="flex" justify="center" align="center">
            <Text textColor={`#252859`} textWeight="500" p="0.5rem">Policies</Text>
            <Text textColor={`#252859`} textWeight="500" p="0.5rem">Terms</Text>
          </Div>
          <Text textAlign="center" textColor={`#252859`} textWeight="500" >&copy;Cyanase LLC</Text>
        </Div>
      </Container>
    </>



  );
}
export default Account;
