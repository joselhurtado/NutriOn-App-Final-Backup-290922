import React from "react";
import { Link } from "react-router-dom";
import BMRCalculator from "./BMRCalculator";

export const BMRSection = () => {
  return (
    <div className="BMRSection">
      <div className="container mainBMI">
          <div className="card text-center">
            <div className="card-body">
              <div className="row">
                <h1 className="card-title">BMR and Daily Calorie Counter</h1>
                 <BMRCalculator />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BMRSection;
