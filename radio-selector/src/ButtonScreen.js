import { useState } from "react";
import RadioButton from "./RadioButton";

const ButtonScreen = () => {
  const options = [{ name: "Word" }, { name: "PDF" }, { name: "Plain Text" }];

  const [displayText, setDisplayText] = useState("");

  const handleValue = (value) => {
    setDisplayText(value);
  };

  return (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {options.length > 0 &&
          options.map((option) => {
            return (
              <div>
                <RadioButton
                  value={option.name}
                  name="fileType"
                  sendValue={handleValue}
                />
              </div>
            );
          })}
      </div>

      {displayText.length >= 1 && (
        <h5 style={{ color: "green" }}>{displayText} has been selected</h5>
      )}
      {displayText == "" && (
        <h5 style={{ color: "red" }}>Please select a download type</h5>
      )}
    </div>
  );
};

export default ButtonScreen;
