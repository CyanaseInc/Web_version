import React, { useState } from "react";
import { Radiobox, Label, Div, Text } from "atomize";

class Days extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCountValue: 1
        };

        this.toggleSelectedCount = this.toggleSelectedCount.bind(this);
    }

    toggleSelectedCount(value) {
        this.setState({
            selectedCountValue: value,
        })
    }

    render() {
        const { selectedCountValue } = this.state;

        return (
            <>
                <Text textSize="1rem"
                    textWeight="600" textAlign="center"
                    m={{ t: "2rem" }}>Select date</Text>
                <Div textColor="#252859" flexDir={{ xs: 'column', lg: 'row' }}
                    d={{ md: "flex" }} m={{ t: "1rem" }}>
                    <Label
                        align="center"
                        textWeight="600"
                        m={{ b: "0.5rem", r: "2rem" }}
                    >

                        <Radiobox
                            onChange={() => this.toggleSelectedCount(1)}
                            checked={selectedCountValue === 1}
                            name="gender"
                        />
                        Monday
                    </Label>
                    <Label
                        align="center"
                        textWeight="600"
                        m={{ b: "0.5rem", r: "2rem" }}
                    >

                        <Radiobox
                            onChange={() => this.toggleSelectedCount(2)}
                            checked={selectedCountValue === 2}
                            name="gender"
                        />
                        Tuesday
                    </Label>
                    <Label
                        align="center"
                        textWeight="600"
                        m={{ b: "0.5rem", r: "2rem" }}
                    >
                        <Radiobox
                            onChange={() => this.toggleSelectedCount(3)}
                            checked={selectedCountValue === 3}
                            name="gender"
                        />
                        Wednesday
                    </Label>
                    <Label
                        align="center"
                        textWeight="600"
                        m={{ b: "0.5rem", r: "2rem" }}
                    >
                        <Radiobox
                            onChange={() => this.toggleSelectedCount(4)}
                            checked={selectedCountValue === 4}
                            name="gender"
                        />
                        Thursday
                    </Label>
                    <Label
                        align="center"
                        textWeight="600"
                        m={{ b: "0.5rem", r: "2rem" }}
                    >
                        <Radiobox
                            onChange={() => this.toggleSelectedCount(5)}
                            checked={selectedCountValue === 5}
                            name="gender"
                        />
                        Friday
                    </Label>
                    <Label
                        align="center"
                        textWeight="600"
                        m={{ b: "0.5rem", r: "2rem" }}
                    >
                        <Radiobox
                            onChange={() => this.toggleSelectedCount(6)}
                            checked={selectedCountValue === 6}
                            name="gender"
                        />
                        Saturday
                    </Label>
                    <Label
                        align="center"
                        textWeight="600"
                        m={{ b: "0.5rem", r: "2rem" }}
                    >
                        <Radiobox
                            onChange={() => this.toggleSelectedCount(7)}
                            checked={selectedCountValue === 7}
                            name="gender"
                        />
                        Sunday
                    </Label>
                </Div>
            </>

        );
    }
}
export default Days;