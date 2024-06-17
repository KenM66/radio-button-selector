const RadioButton = (props) => {
    
  const changeButton = (valueClicked) => {
    props.sendValue(valueClicked);
    console.log(valueClicked);
  };

  return (
    <div>
      <div style={{ color: "purple", fontWeight: "bold" }}>
        <input
          type="radio"
          name={props.name}
          value={props.value}
          onChange={() => changeButton(props.value)}
        />
        <label>{props.value}</label>
      </div>
    </div>
  );
};

export default RadioButton;
