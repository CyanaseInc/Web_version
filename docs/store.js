<Div className="cont">

<Row w="100%" flexDir={{ xs: "row", md: "col" }}>
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
      <Div bg="#f1f1f1" className='get_started'
        shadow="3" m={{ t: "2rem" }} p={{ y: "6.5rem", x: "1.25rem" }}>
        <Row flexDir={{ xs: 'column', lg: 'row' }} >
          <Col>
            <Text
              textWeight="500"
              textSize="heading"
              textColor="#252859"
              textAlign="center"
            >
              <b>Welcome to Cyanase</b>
            </Text>
            <Text
              textColor="#808080"
              textSize="subheader"
              textAlign="center"
            >
              Investments products, loans, Sacco groups,Investment Clubs all in one package.
            </Text>
          </Col>
          <Col>
            <Button
              shadow="5"
              bg="#252859"
              rounded="circle"
              onClick={() => {
                hide("hide");
                setTopUp(true);
              }} className="button">
              Learn more
            </Button>
            <TopupModal
              isOpen={showTopUP}
              onClose={() => setTopUp(false)}
            />
          </Col>
        </Row>
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

        <Row flexDir={{ xs: 'column', lg: 'row' }} >
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