import React, { Component } from "react";
import "../../styles/bmr.css";
class bmr extends Component {
  constructor() {
    super();
    this.state = {
      gender: "",
      weight: "",
      age: "",
      heightFeet: "",
      heightInches: "",
      activity: "",
      bmr: "",
      sugggestion: "",
      pal: "",
      weightType: ""
    };
  }
  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  };

  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  };

  handleheightFeetChange = (event) => {
    this.setState({ heightFeet: event.target.value });
  };

  handleheightInchesChange = (event) => {
    this.setState({ heightInches: event.target.value });
  };

  handlegenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  handleactivityChange = (event) => {
    this.setState({ activity: event.target.value });
  };

  handleweightTypeChange = (event) => {
    this.setState({ weightType: event.target.value });
  };

  calculateBMR() {
    let age = this.state.age;
    let gender = this.state.gender;
    let heightFeet = this.state.heightFeet;
    let heightInches = this.state.heightInches;
    let weight = this.state.weight;
    let weightType = this.state.weightType;

    if (
      age == "" ||
      gender == "" ||
      heightFeet == "" ||
      heightInches == "" ||
      weight == ""
    ) {
      this.setState({ error: "All Fields are Required" });
      return;
    }

    let bmrCalc = "";
    let height = heightFeet * 30.48 + heightInches * 2.54;
    if (weightType == 1) {
      if (gender == 2) {
        bmrCalc = 66 + 6.2 * weight + 12.7 * height - 6.76 * age;
      } else if (gender == 1) {
        bmrCalc = 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age;
      }
    } else if (weightType == 2) {
      if (gender == 2) {
        bmrCalc = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
      } else if (gender == 1) {
        bmrCalc = 655 + 9.563 * weight + 1.85 * height - 4.676 * age;
      }
    }
    this.setState({ bmr: bmrCalc });

    let activitySug = ";";
    if (bmrCalc <= 1926) {
      activitySug = "little or no exercise.";
    } else if (bmrCalc > 1926 && bmrCalc <= 2207) {
      activitySug = "Exercise 1-3 times/week.";
    } else if (bmrCalc > 2207 && bmrCalc <= 2351) {
      activitySug = "Exercise 4-5 times/week.";
    } else if (bmrCalc > 2351 && bmrCalc <= 2488) {
      activitySug =
        "Daily exercise or intense exercise 3-4 times/week.";
    } else if (bmrCalc > 2488 && bmrCalc <= 2796) {
      activitySug = "Intense exercise 6-7 times/week.";
    } else if (bmrCalc > 2796) {
      activitySug = "Very intense exercise daily, or physical job.";
    }
    this.setState({ sugggestion: "Suggestion: " + activitySug });

    this.setState({ error: "" });
    console.log(this.state.weight);
  }

  calculateKCalories() {
    let resultPAL;
    if (this.state.activity) {
      resultPAL = (
        <div>
        <p>Recommended Daily Calories</p>
        <h2 className="resultPAL"><strong>{this.state.bmr * this.state.activity}</strong></h2>
        </div>
      );
    }
    this.setState({ pal: resultPAL });
  }

  render() {
    let error;
    if (this.state.error) {
      error = <div className="error">{this.state.error}</div>;
    }

    let resultBMR;
    if (this.state.bmr) {
      resultBMR = <div className="resultBMR">{this.state.bmr}</div>;
    }

    let resultSug;
    if (this.state.sugggestion) {
      resultSug = <div className="resultSug">{this.state.sugggestion}</div>;
    }

    let resultPAL;
    if (this.state.pal) {
      resultPAL = <div className="resultSug">{this.state.pal}</div>;
    }

    return (
      <div className="container">
          {error}
          <div className="container m-1">
            <label className="m-2"><strong>Gender</strong></label>

            <label className="m-2">
              <input className="radioInput m-1" 
                type="radio"
                checked={this.state.gender == "1"}
                onChange={this.handlegenderChange}
                name="gender"
                value="1"
              />
              Female
            </label>
            
            <label className="m-1">
              <input className="radioInput m-1"
                type="radio"
                checked={this.state.gender == "2"}
                onChange={this.handlegenderChange}
                name="gender"
                value="2"
              />
              Male
            </label>
          </div>
          <hr/>
          <div className="container m-1">
            <label className="m-2"><strong>Weight</strong></label>
            <label>
              <input className="radioInput m-1"
                type="radio"
                checked={this.state.weightType == "1"}
                onChange={this.handleweightTypeChange}
                name="wrightT"
                value="1"
              />
              Imperial (in lbs)
            </label>
            <label className="m-1">
              <input className="radioInput m-1"
                type="radio"
                checked={this.state.weightType == "2"}
                onChange={this.handleweightTypeChange}
                name="wrightT"
                value="2"
              />
              Metric (in KG)
            </label>
            <input className="m-1"
              type="text"
              value={this.state.weight}
              onChange={this.handleWeightChange}
              name="weight"
              min="0"
              max="999"
              placeholder="pounds"
            />
          </div>
          <hr/>
          <div className="m-1">
            <label className="label -m1"><strong>Height in feet and inches</strong></label>
            <input 
              type="text"
              value={this.state.heightFeet}
              onChange={this.handleheightFeetChange}
              name="heightFeet"
              className="heightFeet m-1"
              min="0"
              max="8"
              placeholder="feet"
            />
            <input
              type="text"
              value={this.state.heightInches}
              onChange={this.handleheightInchesChange}
              name="heightInches"
              className="heightInches m-1"
              min="0"
              max="11"
              placeholder="inches"
            />
          </div>
          <hr/>
          <div className="inputwrap m-1">
            <label className="label m-1"><strong>Age in years</strong></label>
            <input
              type="text"
              value={this.state.age}
              onChange={this.handleAgeChange}
              className="age"
              name="age"
              min="0"
              max="120"
              placeholder="years"
            />
          </div>
          <hr/>
          <button className="btn btn-orange m-1" type="button" onClick={() => this.calculateBMR()}>
            Calculate BMR
          </button>
          {resultBMR}
          {resultSug}
          <hr/>
          <div className="container m-1">
            <div className="inputwrap m-1">
              <label className="label m-1"><strong>Workout in a Week</strong></label>
              <select
                className="activity"
                value={this.state.activity}
                onChange={this.handleactivityChange}
                name="activity"
              >
                <option value="">Select your Activity</option>
                <option value="1.2">
                  Sedentary (Very little or no exercise, and desk job)
                </option>
                <option value="1.375">
                  Lightly Active (Light exercise 1 to 3 days per week)
                </option>
                <option value="1.55">
                  Moderately Active (Moderate exercise 3 to 5 days per week)
                </option>
                <option value="1.725">
                  Very Active (Heavy exercise 6 to 7 days per week)
                </option>
                <option value="1.9">
                  Extremely Active (Very intense exercise, and physical job,
                  exercise multiple times per day)
                </option>
              </select>
            </div>
            <hr/>
            <button className="btn btn-orange m-1" type="button" onClick={() => this.calculateKCalories().toFixed(1)}>
              Calculate Calories
            </button>
            {resultPAL}
          </div>
        </div>
    );
  }
}

export default bmr;