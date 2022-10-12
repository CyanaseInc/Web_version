import React from 'react';
import ReactDOM from 'react-dom';
import { Text,Div,Row, Col,Button, Icon, Tag,Container,Anchor,Image } from "atomize";
import FadeInSection from "./Fade";



function Invest() {
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

 What investment products are offered by cyanase?<br></br>
<p class="paraghi">Cyanase offer awide range of investments. These include;
<ul>
<li>Company stocks. From both local and international ( USA,Europe and Africa) stock markets </li>
<li> Goverment bonds. From both local and international ( USA,Europe and Africa) stock markets </li>
</ul></p>
<p class="paraghi">The company was initially started to help students invest such that they have a start point after school.</p>

What is the  minimum deposit?
<p  class="paraghi"> Cyanase partners with fintech companies,
 Edutech platfoms and all kinds of technologies that want
to integrate investing features for thier customers</p>


How do i get to work with Cyanase?
<p  class="paraghi"> Cyanase partners with fintech companies,
 Edutech platfoms and all kinds of technologies that want
to integrate investing features for thier customers</p>
</FadeInSection>

</Text>
</section>
  </>
  );
}
export default Invest;