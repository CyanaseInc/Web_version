import React, { useState } from 'react';
import { Container, Text, Button, Div, Col, Row, Icon } from "atomize";
import "../app.css";
import { Iconly } from 'react-iconly';


function Notification (){
    
    return (

      <Div className="notification">
       <Div p={{ x: "0.5rem", y: "0.5rem" }} m={{ t: "1rem", l: "0.5rem" }}>
       <Text textSize="heading" m={{ t: "1rem" }}
          textWeight="500">
          Notification Settings
        </Text>
       <Div d="flex" bg="gray300" rounded="md">
          <Div p="1rem">
            <Iconly

              name="Wallet"
              primaryColor={`#252859`}
              set='broken'
              secondaryColor='orange'
              stroke='bold'
            />
          </Div>
          <Div p="1rem">
            <Text
              textSize={`20px`}
              textColor={`#ff9b00`}
              textWeight="700"

            >
              Deposit
            </Text>
            <Text>
              You have successfully deposited USD 500 to your account.
              your account balance is USD6000
            </Text>
          </Div>
        </Div>


        <Div m={{t:"1rem"}} d="flex" bg="gray300" rounded="md">
          <Div p="1rem">
            <Iconly

              name="Logout"
              primaryColor={`#252859`}
              set='broken'
              secondaryColor='orange'
              stroke='bold'
            />
          </Div>
          <Div p="1rem">
            <Text
              textSize={`20px`}
              textColor={`#ff9b00`}
              textWeight="700"

            >
              Withdraw
            </Text>
            <Text>
              You have successfully withdrawn USD 500 to your account.
              your account balance is USD6000
            </Text>
          </Div>
        </Div>
        <Div m={{t:"1rem"}} d="flex" bg="gray300" rounded="md">
          <Div p="1rem">
            <Iconly

              name="People"
              primaryColor={`#252859`}
              set='broken'
              secondaryColor='orange'
              stroke='bold'
            />
          </Div>
          <Div p="1rem">
            <Text
              textSize={`20px`}
              textColor={`#ff9b00`}
              textWeight="700"

            >
              Sacco
            </Text>
            <Text>
             Yout invited to join this Abana bakintu Sacco group
            </Text>
          </Div>
        </Div>
        <Div m={{t:"1rem"}} d="flex" bg="gray300" rounded="md">
          <Div p="1rem">
            <Iconly

              name="Logout"
              primaryColor={`#252859`}
              set='Wallet'
              secondaryColor='orange'
              stroke='bold'
            />
          </Div>
          <Div p="1rem">
            <Text
              textSize={`20px`}
              textColor={`#ff9b00`}
              textWeight="700"

            >
              Investment club
            </Text>
            <Text>
              You have successfully deposited USD200 to your Lawyers hub Investment club
            </Text>
          </Div>
        </Div>
    </Div> 
      </Div>
     
            
      );
}
export default Notification