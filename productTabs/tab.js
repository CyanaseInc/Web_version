import React from "react";
import  { useState } from "react";
import { Text,Div,Row, Col,ThemeProvider, Button, Icon, Tag,Container,Image } from "atomize";

import  Loan from "./loans";
import Sacco from "./sacco";
import Invest from "./investments";
import About from "./about"
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
    
  };
 const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    // update the state to tab2
    setActiveTab("tab3");
  };
    const handleTab4 = () => {
    // update the state to tab2
    setActiveTab("tab4");
  };

  
  return (
    <div className="Tab">
      {/* Tab nav */}
       <ul className="navi">
      <Row flexDir={{ xs: 'column', lg: 'row' }}>   
      <Col>
     
      <li  className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}>About us</li>
      </Col> 
      <Col>
       <li    className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}>Investment</li>
       </Col>
          <Col>
       <li    className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}>Loans</li>
       </Col>
          <Col>
       <li    className={activeTab === "tab4" ? "active" : ""}
          onClick={handleTab4}>Group investing</li>
       </Col>
       </Row>
    
      </ul> 
          <div className="outlet">
        {(()=>{if(activeTab === "tab1"){return( <About/> )
        
        }else if(activeTab==="tab2"){return(<Invest/>)
        
        }else if(activeTab==="tab3") {return(<Loan/>)
        
        }else if(activeTab==="tab4") {return(<Sacco/>)
        }
        })()
        
        }
      </div>
    </div>
  );
};
export default Tabs;