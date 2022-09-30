import React, { useState } from "react";

const BMICalculator = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const handleBmi = () => {
    let value = ((weight / (height * 12 + 10)) * 10).toFixed(1); //Basic Function to calculate BMI
    setBmi(value);

    if (value < 18.5) {
      setInfo(<div className="alert alert-success">Under Weight</div>); //BMI bottom info Alert
    } else if (value > 18.5 && value <= 24.9) {
      setInfo(<div className="alert alert-info">Healthy</div>);
    } else if (value > 24.9 && value < 30) {
      setInfo(<div className="alert alert-warning">Overweight</div>);
    } else {
      setInfo(<div className="alert alert-danger">Obese</div>);
    }
  };

  return (
    <div className="container">
      <div className="col-sm m-2">
        <label>Set Height in Feet</label>
        <input
          className="BMIinput"
          type="text"
          onChange={(e) => setHeight(e.target.value)}
          placeholder="5.10"
        />
      </div>

      <div className="col-sm">
        <label>Set Weight in Pound</label>
        <input
          className="BMIinput"
          type="text"
          onChange={(e) => setWeight(e.target.value)}
          placeholder="150"
        />
      </div>

      <button className="container btn btn-orange mb-2 mt-2" onClick={handleBmi}>
        Calculate BMI
      </button>

      <div className="align-middle BMIresult">
      <h2>
        <strong>Your BMI is:</strong>
      </h2>{bmi}</div>
      <div>
        
        <div className="alert"><strong>Your Range info:</strong>{info}</div>
      </div>
    </div>
  );
};

export default BMICalculator;
