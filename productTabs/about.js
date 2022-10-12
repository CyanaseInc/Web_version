import React from 'react';
import ReactDOM from 'react-dom';
import { Text,Div,Row, Col,Button, Icon, Tag,Container,Anchor,Image } from "atomize";
import FadeInSection from "./Fade";

function About() {
  return (
    <>
<section class="about">
          <Tag
            bg= "black"
            textColor="white"
            p={{ x: "0.75rem", y: "0.25rem" }}
            m={{ r: "0.5rem", b: "0.5rem" }}
            textSize="body"
          >
          Key Questions
          </Tag>
    <Text className="paragi"textSize="heading">
<FadeInSection>

 What is Cyanase?<br></br>
<p class="paraghi">Cyanase is a techology company that partners with liecenced financial firms including banks,
investment companies and money lenders to offer investment services, business loans and saving groups to world’s internet users.</p>
<p class="paraghi">The company was initially started to help students invest such that they have a start point after school.</p>

Is Cyanase regulated?<br></br>
<p  class="paraghi">Cyanase provides an integrated investment platform to third party companies
 who seek to offer a digital investment advice product to their users.
  Cyanase is not registered with the Uganda or U.S. Securities and Exchange Commission (“SEC”) and
   therefore does not provide any investment advice. All investment advisory
    services are provided by an SEC-registered investment adviser. 
    The content on this website is provided for informational purposes only and is not a solicitation 
of any investment strategy or a recommendation of to buy or sell any security.</p>

Which type of people use Cyanase?
<p  class="paraghi">Cyanase is an investment infrastructure built for the following;
<ul>
<li>Fintech companies: That want to add a wide range of investing features for thier customers</li>
<li>Edutech Platforms: That want to introduce investing to students using such that they have a start point after school</li>
<li>Students: That have dreams and resiliently want to achieve them</li>
<li>Proffesional investors: That want create thier own investment firms and want LPs to join them</li>
</ul> partners with fintech companies,
 Edutech platfoms and all kinds of technologies that want
to integrate investing features for thier customers. You can contact us at support@cyanase.com</p>
</FadeInSection>

</Text>
</section>
  </>
  );
}
export default About;