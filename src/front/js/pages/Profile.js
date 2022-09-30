import React, { useState, useEffect, useContext } from "react";
import "../../styles/dashboard.css";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import RecipeCardPopular from "/src/front/js/component/RecipeCardPopular";
import { BMRSection } from "/src/front/js/component/BMRSection";

export default function Profile({
  firstName = "",
  LastName = "",
  Email = "",
  UserName = "",
}) {
  const { store, actions } = useContext(Context); //Const to call store data from Flux (Actions is not used yet)
  const [userdata, setuserData] = useState({})
  const [userdatatwo, setuserDatatwo] = useState({})
  useEffect(
    () => {
      setuserData(store.usersignupstats);
      setuserDatatwo(store.usersignupstatstwo)
    },
    [store] // In Here we call out again to keep stored the data on re-load the page
  );
	console.log(store.usersignupstats)

  return (
    <div id="dashboardProfile" className="container">
      <div className="container-flex">
        <div className="row">
          <div className="col-sm card text-center" style={{background:"none"}}>
            <img id="profilePicture"
              src="https://images.theconversation.com/files/478225/original/file-20220809-24-orxjcu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h1 className="card-text">{userdata.firstName}</h1>
              <h4>Nutrition Goals</h4>
              <p>{userdata.weightgoal}</p>
            </div>
          </div>
          <div className="col-sm">
            <h1 className="card-title text-left mt-1">My Information</h1>
            <div>
              <label
                for="exampleFormControlInput1"
                className="form-label fullName text-dark text-left"
              >
                First LastName{userdata.firstName + " " + userdata.lastName}
              </label>
              <hr/>
              <h1 className="card-title text-left">Account Information</h1>
              <ul className="list-group list-group-flush text-left">
                    <li className="card-text list-group-item"><strong>First Name:</strong> <em>{userdata.firstName}</em></li>
                    <li className="card-text list-group-item"><strong>Last Name:</strong> <em>{userdata.lastName}</em></li>
                    <li className="card-text list-group-item"><strong>Username:</strong> <em>{userdata.userName}</em></li>
                    <li className="card-text list-group-item"><strong>Email:</strong> <em>{userdata.emailsignup}</em></li>
                  </ul>
                  <hr/>
              <h1 className="card-title text-left">My Weight Gain Journey</h1>
              <ul className="list-group list-group-flush text-left">
                    <li className="card-text list-group-item"><strong>Age:</strong> <em>{userdatatwo.age}</em></li>
                    <li className="card-text list-group-item"><strong>Weight:</strong> <em>{userdatatwo.weight}</em></li>
                    <li className="card-text list-group-item"><strong>Height:</strong>
                    <em>{userdatatwo.feet} - {userdatatwo.inches}</em></li>
                    <li className="card-text list-group-item"><strong>Type of Diet:</strong> <em>{userdatatwo.diet}</em></li>
                    <li className="card-text list-group-item"><strong>Nutrition Goal:</strong> <em>{userdata.weightgoal}</em></li>
                  </ul>
                  <hr/>
            </div>
          </div>
        </div>

        {/* Diet and Calculator Section */}

        <div className="row bmiDiet">
          <div className="col-sm">
            <div className="card p personalDietCircle">
              <div className="card-body innerCircle">
                <h1 className="card-title text-center dietCircleTitle">
                  {userdatatwo.diet} Diet
                </h1>
                <p className="card-text text-center">My Weight Gain Journey</p>
                <div className="card-text-diet">
                  <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item">{userdatatwo.age}</li>
                    <li className="list-group-item">{userdatatwo.weight}</li>
                    <li className="list-group-item">
                      {userdatatwo.feet + "'" + userdatatwo.inches}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
				<BMRSection />
			</div>
      <div>
        <RecipeCardPopular />
      </div>
    </div>
  );
}