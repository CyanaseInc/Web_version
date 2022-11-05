import React, { useState } from 'react';
import { StyleReset, ThemeProvider, Div, Container, Text, Label, Checkbox } from "atomize";

function NoteSetting() {

  /// States for recieving notifications 

  // states for Auto save
  const [dontAutoSave, AutoSave] = useState(true);
  //States for Goals
  const [dontGoal, Goal] = useState(true);
  //states for updates
  const [dontUpdate, Update] = useState(true);

  return (
    <>

      <Div>
        <Text textSize="heading" m={{ t: "1rem" }}
          textWeight="500">
          Notification Settings
        </Text>
        <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>
          Choose all kinds of notifications you want to receive.
        </Text>
     

      <Div m={{ t: "2rem" }}>
        <Label textSize="subheader"
          align="center"
          textWeight="600"
          m={{ b: "0.5rem" }}>
          <Checkbox
            onChange={e =>
              AutoSave(e.target.checked)
            }
            checked={dontAutoSave}
            inactiveColor="success400"
            activeColor="#ff9b00"
            size="25px"
          />
          Auto save
          <Text>
            
          </Text>
          <Text textColor={`#808080`} textWeight="500" >
            Be reminded about your auto goal savings
          </Text>
        </Label>
      </Div>

      <Div m={{ t: "1rem" }}>
        <Label textSize="subheader"
          align="center"
          textWeight="600"
          m={{ b: "0.5rem" }}>
          <Checkbox
            onChange={e =>
              Goal(e.target.checked)
            }
            checked={dontGoal}
            inactiveColor="success400"
            activeColor="#ff9b00"
            size="25px"
          />
          Goals
          <Text textColor={`#808080`} textWeight="500" >
            Be reminded to invest for your goals
          </Text>
        </Label>
      </Div>

      <Div m={{ t: "1rem" }}>
        <Label textSize="subheader"
          align="center"
          textWeight="600"
          m={{ b: "0.5rem" }}>
          <Checkbox
            onChange={e =>
              Update(e.target.checked)
            }
            checked={dontUpdate}
            inactiveColor="success400"
            activeColor="#ff9b00"
            size="25px"
          />
          Updates
          <Text textColor={`#808080`} textWeight="500" >
            Get product updates and and investment newsletters.
          </Text>
        </Label>
      </Div>
</Div>
    </>
  );
}

export default NoteSetting;
