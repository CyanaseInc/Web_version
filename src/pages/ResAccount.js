import React, { useState } from 'react';
import { Div, Text, Container, Modal, Icon, Input, Button, Image } from "atomize";
import { Iconly } from 'react-iconly';
import { useForm } from "react-hook-form";
import NoteSetting from './noteSetting';

function ResAccount() {

  const myChange = <Icon color="white" name="Loading2" size="20px" />;
  const myOriginal = 'Change';
  const [buttonText, setButtonText] = useState(myOriginal);

  // handle on change in forms
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const onSubmit = (datal) => {

    // change the status to laoding
    setButtonText(myChange);
    console.log(datal);

    // send data to the API

    const API_PATH = 'http://localhost:3000/handler.php';

    // MAKE AN AJAX REQUEST

    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: datal
    })
      .then(resulta => {

        console.log(resulta.result);
      })
      .catch(error => alert(error));
  }
  /// Show POPUP menue button
  const [showTopUP, setTopUp] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  //change Password
  const ChangePassword = () => {


    return (
      <>
        <form className="myform" onSubmit={handleSubmit(onSubmit)}>
          <Div justify="center">
            <Div d="flex" justify="center" className="toper">

              <Iconly

                name="Lock"
                primaryColor={`#252859`}
                set='bulk'
                secondaryColor='orange'
                stroke='bold'
              />
            </Div>
            <Div>
              <Text m={{ t: "1rem" }} textAlign="center" textColor="#252859" textWeight="500">
                Change password
              </Text>
              <Text textAlign="center" textColor="#808080">
                Add a new secure password to your account
              </Text>
            </Div>

            <Div d="flex" justify="center">

              <Input w={{ xs: '100%', md: '24rem' }}
                {...register("opassword", { required: true, maxLength: 15 })}
                placeholder="Enter old password" name="opassword" type="password"
                m={{ t: "3rem" }}
                p={{ x: "2.5rem" }}
                prefix={

                  <Iconly
                    className="ivn"
                    name="Password"
                    primaryColor={`#252859`}
                    set='bulk'
                    secondaryColor='orange'
                    stroke='bold'
                  />
                }
              />
              {errors.opassword && <p className="text-error">Your old password is required</p>}

            </Div>

            <Div d="flex" justify="center">
              <Input w={{ xs: '100%', md: '24rem' }}
                {...register("email", { required: true, maxLength: 15 })}
                placeholder="Enter new password" name="email" type="password"
                m={{ t: "3rem" }}
                p={{ x: "2.5rem" }}
                prefix={

                  <Iconly
                    className="ivn"
                    name="Password"
                    primaryColor={`#252859`}
                    set='bulk'
                    secondaryColor='orange'
                    stroke='bold'
                  />
                }
              />
              {errors.email && <p className="text-error">Your first name is required</p>}
            </Div>
          </Div>
          <Div d="flex" justify="center">

            <Input w={{ xs: '100%', md: '24rem' }}
              {...register("Phone_number", { required: true, maxLength: 15 })}
              placeholder="Enter confirm password" name="Phone_number" type="password"
              m={{ t: "3rem" }}
              p={{ x: "2.5rem" }}
              prefix={

                <Iconly
                  className="ivn"
                  name="Password"
                  primaryColor={`#252859`}
                  set='bulk'
                  secondaryColor='orange'
                  stroke='bold'
                />
              }
            />
            {errors.Phone_number && <p className="text-error">Confirm password to continue</p>}
          </Div>
          <Div d="flex" justify="center">
            <Button type='submit'
              align="center"
              shadow="3"
              hoverShadow="4"
              bg={`#252859`}
              m={{ t: "1rem" }}
              w={{ xs: '100%', md: '24rem' }}
            >
              {buttonText}
            </Button>
          </Div>

        </form>



      </>
    )



  }
  //Change Next of kin
  const NextOfKin = () => {
    return (
      <>
        <form className="myform" onSubmit={handleSubmit(onSubmit)}>
          <Div justify="center">
            <Div d="flex" justify="center" className="toper">

              <Iconly

                name="People"
                primaryColor={`#252859`}
                set='bulk'
                secondaryColor='orange'
                stroke='bold'
              />
            </Div>
            <Div>
              <Text m={{ t: "1rem" }} textAlign="center" textColor="#252859" textWeight="500">
                Add Next Of kin
              </Text>
              <Text textAlign="center" textColor="#808080">
                Who should handle yur account incase your not here
              </Text>
            </Div>

            <Div d="flex" justify="center">

              <Input w={{ xs: '100%', md: '24rem' }}
                {...register("name", { required: true, maxLength: 15 })}
                placeholder="Enter full name" name="name" type="text"
                m={{ t: "2rem" }}
                p={{ x: "2.5rem" }}
                prefix={

                  <Iconly
                    className="ivn"
                    name="User"
                    primaryColor={`#252859`}
                    set='bulk'
                    secondaryColor='orange'
                    stroke='bold'
                  />
                }
              />
              {errors.name && <p className="text-error">Full name is required</p>}

            </Div>

            <Div d="flex" justify="center">
              <Input w={{ xs: '100%', md: '24rem' }}
                {...register("email", { required: true, maxLength: 15 })}
                placeholder="Enter their email address" name="email" type="text"
                m={{ t: "2rem" }}
                p={{ x: "2.5rem" }}
                prefix={

                  <Iconly
                    className="ivn"
                    name="Message"
                    primaryColor={`#252859`}
                    set='bulk'
                    secondaryColor='orange'
                    stroke='bold'
                  />
                }
              />
              {errors.email && <p className="text-error">Email address is required</p>}

            </Div>
            <Div d="flex" justify="center">
              <Input w={{ xs: '100%', md: '24rem' }}
                {...register("Phone_number", { required: true, maxLength: 15 })}
                placeholder="Enter Phone number" name="Phone_number" type="text"
                m={{ t: "2rem" }}
                p={{ x: "2.5rem" }}
                prefix={

                  <Iconly
                    className="ivn"
                    name="Password"
                    primaryColor={`#252859`}
                    set='bulk'
                    secondaryColor='orange'
                    stroke='bold'
                  />
                }
              />
              {errors.Phone_number && <p className="text-error">Phone number is required</p>}
            </Div>
            <Div d="flex" justify="center">
              <Button type='submit'
                align="center"
                shadow="3"
                hoverShadow="4"
                bg={`#252859`}
                m={{ t: "1rem" }}
                w={{ xs: '100%', md: '24rem' }}
              >
                {buttonText}
              </Button>
            </Div>

          </Div>
        </form>


      </>
    )
  }

  //Change account details
  const AccountDetails = () => {
    return (
      <>
        <Div>
          <Text textWeight="700">
            Account Details
          </Text>
          <Div m="2rem" d="flex" justify="center">
            <Image className="imagz" w="150px" h="150px" src="image/dp.jpg" rounded="circle" />
          </Div>
          <Div className="Zindex">
            <Iconly
              name="Camera"
              primaryColor={`black`}
              set='broken'
              secondaryColor='orange'
              stroke='bold'

            />
          </Div>
          <Div
            hoverBg="gray300"
            rounded="md"
            p="0.5rem"
            m={{ t: "0.5rem" }}>
            <Div p={{ y: "0.25rem" }} m={{ t: "1rem", }} className="listings">
              <Iconly

                name="User"
                primaryColor={`black`}
                set='broken'
                secondaryColor='orange'
                stroke='bold'
              />
              <Text
                textSize={`20px`}

                textWeight="700"
                m={{ l: "0.7rem", }}>
                Name
              </Text>
            </Div>
            <Text textColor={`#ff9b00`} textWeight="500" m={{ l: "0.7rem", }}>
              John Viannie Wasswa
            </Text>
          </Div>
          <Div
            hoverBg="gray300"
            rounded="md"
            p="0.5rem"
            m={{ t: "0.5rem" }}>
            <Div p={{ y: "0.25rem" }} className="listings">
              <Iconly

                name="Calling"
                primaryColor={`black`}
                set='broken'
                secondaryColor='orange'
                stroke='bold'
              />
              <Text
                textSize={`20px`}

                textWeight="700"
                m={{ l: "0.7rem", }}>
                Phone number
              </Text>
            </Div>
            <Text textColor={`#ff9b00`} textWeight="500" m={{ l: "0.7rem", }}>
              +256705640852
            </Text>
          </Div>
          <Div

            rounded="md"
            p="0.5rem"
            m={{ t: "0.5rem" }}>
            <Div p={{ y: "0.25rem" }} className="listings">
              <Iconly

                name="Message"
                primaryColor={`black`}
                set='broken'
                secondaryColor='orange'
                stroke='bold'
              />
              <Text
                textSize={`20px`}

                textWeight="700"
                m={{ l: "0.7rem", }}>
                Email
              </Text>
            </Div>
            <Text textColor={`#ff9b00`} textWeight="500" m={{ l: "0.7rem", }}>
              wjv@cyanase.com
            </Text>
            <Div rounded="md" m={{ t: "0.5rem" }} p="1rem" bg="gray300" d="flex" justify="center">
              <Text m={{ t: "0.8rem" }} textWeight="500" textSize="subheader">
                Account status
              </Text>
              <Div m={{l:"2rem"}}>
                <Button
                  bg="#252859"
                rounded="ci"

                >
                  Complete
                </Button>
              </Div>

            </Div>
          </Div>
        </Div>
      </>
    )


  }
  ///Account details settings


  ////SET THE TYPE OF MODAL TO DISPLAY WHEN USER CLICKS CHOOSES A SETINGS OPTIONS
  const [myModal, ChangeModal] = useState("password");

  let DisplayPopup = "";

  if (myModal == "password") {

    DisplayPopup = <ChangePassword />;

  } else if (myModal === "account") {


    DisplayPopup = <AccountDetails />;

  } else if (myModal == "kin") {

    DisplayPopup = <NextOfKin />;

  }
  ///pop up modals

  const ShowPopup = ({ isOpen, onClose }) => {

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        rounded="0"
        maxW={{ xs: 'auto', md: '40vw' }}
        m={{ t: "2rem" }}
        h="auto"
      >
        <Icon
          name="Cross"
          pos="absolute"
          top="1rem"
          right="1rem"
          size="16px"
          onClick={onClose}
          cursor="pointer"
        />

        {DisplayPopup}

      </Modal>
    );
  };

  return (
    <>
      <Container>
        <ShowPopup
          isOpen={showTopUP}
          onClose={() => setTopUp(false)}
        />
        <Div>
          <Text textSize="heading"
          m={{ t: "1rem" }} 
          textWeight="500"
          > Account Settings</Text>
          <Div
            onClick={() => {
              ChangeModal("password");
              setTopUp(true);
            }
            }>
            <Div

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

        </Div>
        <Div>

          <Div
            onClick={() => {

              ChangeModal("kin");
              setTopUp(true);
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

              ChangeModal("account");
              setTopUp(true);
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
    </>
  );
}

export default ResAccount;
