import React, { useState } from 'react';
import { Div, Button, SideDrawer, Icon, Row, Text, Col, Image, Container, DIv } from "atomize";
import Mainbar from './Mainbar';
import Topbar from './Topbar';
import Resbar from './Resbar';
import './Navbar.css';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Iconly } from 'react-iconly';
import { Fragment } from "react/cjs/react.production.min";

const Navbar = () => {


  const [isactive, setactive] = useState('personal');



  return (
    <>
      <Fragment><div className='navbar'>
        <Container>

          <Div d="flex" align="center" justify="center" textAlign="center" className="handler">

            <Div p={{ y: "0.25rem", x: "10%" }}>
              <Link to="/ResHome">
                <div className={` ${isactive === "home" ? 'icons' : 'viannie'}`} onClick={() => {

                  setactive("home");


                }}>
                  <Iconly

                    name="Home"

                    set='broken'

                    stroke='bold'

                  /></div>
              </Link>
            </Div>


            <Div p={{ y: "0.25rem", x: "10%" }}>

              <Link to="/ResDeposit">
                <div className={` ${isactive === "wallet" ? 'icons' : 'viannie'}`} onClick={() => {

                  setactive("wallet");


                }}>
                  <Iconly

                    name="Wallet"
                    set='broken'
                    stroke='bold'
                  /> </div>
              </Link>
            </Div>

            <Div p={{ y: "0.25rem", x: "10%" }}>

              <Link to="/ResNotification">
                <div className={` ${isactive === "note" ? 'icons' : 'viannie'}`} onClick={() => {

                  setactive("note");


                }}>
                  <Iconly

                    name="Notification"
                    set='broken'
                    stroke='bold'
                  /></div><Div className="notes" rounded="circle" textColor="white" bg="blue">1</Div>
              </Link>
            </Div>


            <Div p={{ y: "0.25rem", x: "10%" }}>
              <Link to="/ResSetting"> <div className={` ${isactive === "set" ? 'icons' : 'viannie'}`} onClick={() => {

                setactive("set");


              }}>
                <Iconly

                  name="Setting"
                  set='broken'
                  stroke='bold'
                /></div>
              </Link>

            </Div>
          </Div>
        </Container>

      </div>

        <Div>

          {/* Navigation content*/}
          <Mainbar />


        </Div>
      </Fragment>

    </>
  );
}


export default Navbar;