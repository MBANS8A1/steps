import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    // setStep((s) => s + 1);//if I wanted to go up more than one step
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handlePrevious}
              text="Previous"
            />
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handleNext}
              text="Next"
            />
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, text }) {
  <button
    style={{ backgroundColor: bgColor, color: textColor }}
    onClick={onClick}
  >
    {text}
  </button>;
}
