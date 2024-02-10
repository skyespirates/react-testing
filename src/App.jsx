import { useState, useEffect, useRef } from "react";
import { generateRandom, randomColor } from "./helper/helper";
// components
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";

const App = () => {
  const [actualNumber, setActualNumber] = useState(null);
  const [userNumber, setUserNumber] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [text, setText] = useState("");
  const [color, setColor] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    setActualNumber(generateRandom());
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    setColor();
    if (userNumber < actualNumber) {
      setText("too low");
    } else if (userNumber === actualNumber) {
      setText("");
      setIsCorrect(true);
    } else {
      setText("too high");
    }
    setColor(randomColor());
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  const handleReset = () => {
    setActualNumber(generateRandom());
    setUserNumber("");
    setText(null);
    setIsCorrect(false);
    inputRef.current.value = "";
  };

  return (
    <div>
      <Text>Guess a number between 1 and 100</Text>
      <div className="wrapper">
        <Input
          ref={inputRef}
          handleKeyDown={handleKeyDown}
          handleChange={(e) => setUserNumber(parseInt(e.target.value))}
        />
        <Button type="primary" handleClick={handleClick}>
          Guess
        </Button>
        <Button handleClick={handleReset}>Reset</Button>
      </div>
      {text && <Text color={color}>{text}</Text>}
      {isCorrect && (
        <h1>Congratulation, the correct answer is {actualNumber}!!!</h1>
      )}
    </div>
  );
};

export default App;
