import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <form>
        <div className="head">
        <h1> Codetrain Registration Form </h1>
        
        <p> This form is the first step to register for Codetrain's program starting on 25th July 2020. Our admissions team will reach out to you after successfully submitting your form.</p>
        <br/>
        <span>* Required</span>
      </div>

      <div className="email">
      <label>Email address*</label>
      <br/><br/>
      <input type="text" name="email" placeholder=" Your email"/>
      </div>

      <div className="name">
        <label> Full Name<span>*</span></label>
        <br/><br/>
        <input type="text" name="fullName" id="Full Name" placeholder="Full Name"/>
      </div>

      <div className="number">
        <label>Phone Number <span>*</span></label>
        <br/>
        <input type="text" name="phoneNumber" placeholder="Your answer"/>
      </div>

      <div class="kin">
        <label> Phone number of next of kin</label>
        <p>Phone number of someone we can reach out to in case your phone is off or not reachable. Eg, your parent, guardian or sibling, or spouse</p>
        <br/>
        <input type="text" name="kin" placeholder="Your answer"/>
      </div>

      
      </form>
    );
  }
}

export default App;
