import React from 'react';
import { Input, Icon, Row, Col, Div, Button, Text, Container } from "atomize";
import { Iconly } from 'react-iconly';
import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom';
const Topbar = () => {
  return (

    <>

      <Div className="mytop"  m={{ t: "2rem" }} >
        <Div d="flex" justify="center" flex="row">
          
            <Input w={{ xs: '100%', md: '24rem' }} className="input"
              placeholder="Search here ..."
              name="phone" type="text"
              p={{ x: "2.5rem" }}
              prefix={

                <Iconly
                  className="ivn"
                  name="Search"
                  primaryColor={`#252859`}
                  set='bulk'
                  secondaryColor='orange'
                  stroke='bold'
                />
              }
            />
          
          
          <Link to="/Notification">
            <Div  d="flex"m={{l:"25rem"}}  className="top_svg" p={{ y: "0.25rem", x: "2rem" }} >
            
                  <Iconly
                primaryColor='#ff9b00'
                name="Notification"
                set='broken'
                stroke='bold'

              />
            </Div>
           
            </Link>
          
          
            <Div p={{ y: "0.25rem", x: "2rem" }} >
              <img className="dp" src="../image/dp.jpg" />
            </Div>
          
        </Div>






      </Div>


    </>
  );
}
export default Topbar;