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