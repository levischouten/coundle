import React, { useState } from "react";
import styled from "styled-components";
import countries from "../data/countries";

const Wrapper = styled.main`
  width: 35em;
  max-width: 90%;
  flex: 1;
  margin: 0 auto;
`;

const TextWrapper = styled.div`
  display: block;
  text-align: center;
  padding-bottom: 0.5em;
`;

const Title = styled.h1``;

const SubTitle = styled.h2``;

const GuessWrapper = styled.div`
  height: 21em;
`;

enum GuessState {
  Success = "#48c78e",
  Failed = "#f14668",
  Skipped = "#363636",
  Empty = "#fff",
}

interface GuessProps {
  state?: GuessState;
}

const Guess = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 2.5em;
  text-align: center;
  margin: 5px 0;
  background-color: ${(props: GuessProps) => props.state};
  border: 1px solid black;
`;

const Fact = styled.p`
  padding: 0.1em 0;
`;

type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

interface ButtonWrapperProps {
  justifyContent?: JustifyContent;
  margin?: string;
}

const ButtonWrapper = styled.div`
  display: flex;
  margin: ${(props: ButtonWrapperProps) => props.margin || "0"};
  justify-content: ${(props: ButtonWrapperProps) =>
    props.justifyContent || "flex-start"};
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid black;
  background-color: inherit;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const Form = styled.form``;

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 0.5em 0;
`;

interface DropdownProps {
  show?: boolean;
}

const Dropdown = styled.div`
  position: relative;
  display: ${(props: DropdownProps) => (props.show ? "block" : "none")};
`;

const DropdownContent = styled.div`
  display: block;
  position: absolute;
  border: 1px solid black;
  background-color: white;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
`;

const DropdownContentItem = styled.div`
  padding: 1em;

  &:hover {
    background-color: blue;
    cursor: pointer;
  }
`;

interface ModalProps {
  show?: boolean;
}

const Modal = styled.div`
  display: ${(props: ModalProps) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  box-sizing: border-box;
  margin: 2em auto;
  padding: 2em 4em;
  border: 1px solid #888;
  width: 90%;
  height: 90%;
`;

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [countryList, setCountryList] = useState(
    countries.map((country) => country.name)
  );
  const [correctCountry, setCorrectCountry] = useState(
    countries[Math.floor(Math.random() * countries.length)]
  );
  const [facts, setFacts] = useState<Array<string>>([correctCountry.facts[0]]);
  const [guesses, setGuesses] = useState<Array<string>>([]);
  const [gameIsActive, setGameIsActive] = useState(true);

  const checkEndGame = (newGuesses: Array<string>) => {
    if (newGuesses.includes(correctCountry.name) || newGuesses.length > 5) {
      setGameIsActive(false);
    }
  };

  const makeGuess = (event: React.MouseEvent) => {
    event.preventDefault();

    if (!countryList.includes(inputValue)) return;
    const newGuesses = [...guesses, inputValue];

    setGuesses(newGuesses);
    setInputValue("");

    checkEndGame(newGuesses);
  };

  const nextFact = (event: React.MouseEvent) => {
    event.preventDefault();

    const newGuesses = [...guesses, "Skipped"];
    setGuesses(newGuesses);

    if (facts.length < correctCountry.facts.length) {
      setFacts([...facts, correctCountry.facts[facts.length]]);
    }
    setInputValue("");

    checkEndGame(newGuesses);
  };

  const getGuessState = (guess: string) => {
    if (guess === "Skipped") return GuessState.Skipped;
    if (correctCountry.name === guess) return GuessState.Success;
    if (countryList.includes(guess)) return GuessState.Failed;
    return GuessState.Empty;
  };

  const renderedGuesses = [
    ...guesses,
    ...Array(6 - guesses.length).fill(""),
  ].map((guess, index) => (
    <Guess key={index} state={getGuessState(guess)}>
      {guess}
    </Guess>
  ));

  const renderedFacts = facts.map((fact, index) => (
    <Fact key={index}>{fact}</Fact>
  ));

  const renderedDropdownItems = countryList
    .filter((country) =>
      country.toLowerCase().includes(inputValue.toLowerCase())
    )
    .slice(0, 5)
    .map((dropdownItem) => (
      <DropdownContentItem
        key={dropdownItem}
        onClick={() => {
          setShowDropdown(false);
          setInputValue(dropdownItem);
        }}
      >
        {dropdownItem}
      </DropdownContentItem>
    ));

  return (
    <Wrapper>
      <GuessWrapper>
        {renderedGuesses}
        <TextWrapper>
          {!gameIsActive ? (
            <SubTitle>
              {!gameIsActive && !guesses.includes(correctCountry.name)
                ? `The correct answer was ${correctCountry.name}`
                : "Well done!"}
            </SubTitle>
          ) : (
            ""
          )}
        </TextWrapper>
      </GuessWrapper>

      <ButtonWrapper justifyContent="center" margin="1em 0">
        <Button onClick={() => setShowModal(true)}>View Facts</Button>
      </ButtonWrapper>

      <Form>
        <Input
          disabled={!gameIsActive}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 300)}
        ></Input>

        <Dropdown show={showDropdown}>
          <DropdownContent>{renderedDropdownItems}</DropdownContent>
        </Dropdown>

        <ButtonWrapper justifyContent="space-between" margin="0.5em 0">
          <Button onClick={(e) => nextFact(e)} disabled={!gameIsActive}>
            {guesses.length < 5 ? "Next Fact" : "Finish"}
          </Button>
          <Button
            onClick={(e) => makeGuess(e)}
            disabled={inputValue.length === 0}
          >
            Guess
          </Button>
        </ButtonWrapper>
      </Form>

      <Modal show={showModal}>
        <ModalContent>
          <ButtonWrapper justifyContent="flex-end">
            <Button onClick={() => setShowModal(false)}>Close</Button>
          </ButtonWrapper>
          <Title>Facts</Title>
          {renderedFacts}
        </ModalContent>
      </Modal>
    </Wrapper>
  );
};

export default Main;
