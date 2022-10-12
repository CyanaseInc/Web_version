<Modal
isOpen={isOpen}
onClose={onClose}
rounded="0"
maxW="40vw"
m={{ t: "2rem" }}
h="80vh"
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
<Div m={{ t: "2rem" }} justify="center">
    <Div d="flex" justify="center" className="toper">

        <Iconly

            name="Wallet"
            primaryColor={`#252859`}
            set='bulk'
            secondaryColor='orange'
            stroke='bold'
        />
    </Div>
    <Div d="flex" justify="center">
        <Text m={{ t: "1rem" }} textSize="subheader" textColor="#252859" textWeight="500">
            Make a deposit to continue
        </Text>
    </Div>
    <Div d="flex" justify="center">
        
        <Text textColor="#898989">
            Make it easy to choose your investment type by depositing to your wallet
        </Text>
    </Div>
    <Div justify="center">
        <Input w={{ xs: '100%', md: '24rem' }}
            {...register("amount", { required: true, maxLength: 15 })}
            placeholder="Enter amount" name="amount" type="text"
            m={{ l: "5rem", t: "3rem" }}
            p={{ x: "2.5rem" }}
            prefix={

                <Iconly
                    className="ivn"
                    name="Wallet"
                    primaryColor={`#252859`}
                    set='bulk'
                    secondaryColor='orange'
                    stroke='bold'
                />
            }
        />
        <Button w="24rem"
            m={{ t: "2rem", l: "5rem" }} className="button2"
            onClick={() =>
                setTopUp(true)
            }
            bg="warning700"
            shadow="3"
            hoverShadow="4"
        >
            Deposit
        </Button>
    </Div>


    {errors.fname && <p className="text-error">Your first name is required</p>}

</Div>


</Modal>