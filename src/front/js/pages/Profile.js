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
  activity = "",
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
        <div className="d-flex">
          <div className="col-sm-4 card text-center" style={{background:"none"}}>
            <img id="profilePicture"
              src="https://images.theconversation.com/files/478225/original/file-20220809-24-orxjcu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-cente">
              <h1 className="card-text text-center">{userdata.firstName} MELISSA</h1>
              <h4 className="text-center ">Weight Goals:
                <br/>
                {userdata.weightgoal} Lose Weight
              </h4>
            </div>
          </div>
          <div className="col-sm-8 informationDIV">
              <h1 className="card-title text-left">Account Information</h1>
              <ul className="list-group list-group-flush text-left">
                    <li className="card-text list-group-item"><strong>First Name:</strong> <em>{userdata.firstName}</em></li>
                    <li className="card-text list-group-item"><strong>Last Name:</strong> <em>{userdata.lastName}</em></li>
                    <li className="card-text list-group-item"><strong>Genre:</strong> <em>{userdata.sex}</em></li>
                    <li className="card-text list-group-item"><strong>Username:</strong> <em>{userdata.userName}</em></li>
                    <li className="card-text list-group-item"><strong>Email:</strong> <em>{userdata.emailsignup}</em></li>
                    <li className="card-text list-group-item"><strong>Email:</strong> <em>{userdata.passWord}</em></li>
                  </ul>
                  <hr/>
              <h1 className="card-title text-left">Nutrition Journey</h1>
              <ul className="list-group list-group-flush text-left">
                    <li className="card-text list-group-item"><strong>Age:</strong> <em>{userdatatwo.age}</em></li>
                    <li className="card-text list-group-item"><strong>Weight:</strong> <em>{userdatatwo.weight}</em></li>
                    <li className="card-text list-group-item"><strong>Height:</strong> <em>{userdatatwo.feet}.{userdatatwo.inches}</em></li>
                    <li className="card-text list-group-item"><strong>Type of Diet:</strong> <em>{userdatatwo.diet}</em></li>
                    <li className="card-text list-group-item"><strong>Nutrition Goal:</strong> <em>{userdata.weightgoal}</em></li>
                    <li className="card-text list-group-item"><strong>Activity Level:</strong> <em>{userdatatwo.activity}</em></li>
                  </ul>
                  <hr/>
          </div>
        </div>

      </div>
      <div>
				<BMRSection />
			</div>
      <div>
      <h1 className="text-left mt-4">Recommended Recipes</h1>
        <p className="text-left ">Discover recipes for your type of diet.</p>
        <RecipeCardPopular />
      </div>
    </div>
  );
}