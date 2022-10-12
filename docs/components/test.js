<Container>
<Modal
              isOpen={showTopUP}
              onClose={() => setTopUp(false)}
            />
  <Div>
    <Text m={{ t: "1rem" }} textWeight="900"> Account Settings</Text>
    <Div
     onClick={() =>
      ChangeModal("password")
    }
      p={{ y: "0.25rem" }}
      m={{ t: "1rem", }}
      className="listings">
      <Iconly

        name="Password"
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
        Password
      </Text>
    </Div>
    <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>
      Change user password
    </Text>
  </Div>
  <Div>
   
    <Div
      onClick={() => {
       
        ChangeModal("account");

      }
      }
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
        Next of Kin
      </Text>
    </Div>
    <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>
      Who should be in charge incase your not here.
    </Text>
  </Div>
  <Div>
    
    <Div
      onClick={() => {
        
        changeContent("account");

      }
      }
      p={{ y: "0.25rem" }}
      m={{ t: "1rem", }}
      className="listings">
      <Iconly

        name="People"
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
        Account Details
      </Text>
    </Div>
    <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>
      Check your user bio
    </Text>
  </Div>

</Container>