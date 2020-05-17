import React from 'react';
import doctors from '../../img/doctors.svg';
import alert from '../../img/notify.svg';
import people from '../../img/people.svg';
import './home.css';
const HomePage = () => {
  return (
    <div className="landing-body">
      <div className="landing-inner-body">
        <h1 className="h1">ALert</h1>
        <div className="flex">
          <div>
            <img src={alert} alt="alert" className="icon1" />
            <h3 className="detail">A click away from emergency reponse. Connecting victims to responders.</h3>
          </div>
          <div className="signbox">
            <div>
              <img src={people} alt="people" className="icon2" />
              <a href="#" className="signup">
                Login / Sign up as a Regular User
              </a>
            </div>
            <div>
              <img src={doctors} alt="reponders" className="icon3 emerg" />
              <a href="#" className="signup2">
                Login / Sign up as an Emergency Responder
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
