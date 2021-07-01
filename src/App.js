import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <form className="registration">
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

      <div className="kin">
        <label> Phone number of next of kin</label>
        <p>Phone number of someone we can reach out to in case your phone is off or not reachable. Eg, your parent, guardian or sibling, or spouse</p>
        <br/>
        <input type="text" name="kin" placeholder="Your answer"/>
      </div>

      <div className="fee">
        <p>Can you pay 60% or more of the full Codetrain fees (GHS6000 for Ghanaian applicants or $1,200 for international applicants) <span>*</span> </p>
        
        <input type="checkbox" name="No" value="No"/>
        <label>No</label>
        <br/>
        
        <input type="checkbox" name="Yes" value="Yes"/>
        <label>Yes</label> 
      </div>

      <div className="fees">
        <p>Can you pay 60% or more of the full Codetrain fees (GHS6000 for Ghanaian applicants or $1,200 for international applicants) <span>*</span></p>
        <input type="checkbox" name="yourself" value="Yourself"/>
        <label>Yourself</label>
        <br/>
        <input type="checkbox" name="parentSponsor" value="Parent / Sponsor"/>
        <label>Parent / Sponser</label>
        <br/>
        <input type="checkbox" name="organization" value="Organization"/>
        <label>Organization</label>
      </div>

      <div className="location">
        <label>Location <span>*</span></label>
        <br/>
        <input type="text" name="location" placeholder="Your answer"/>
      </div>

      <div className="school">
        <label> Current or previous school <span>*</span></label>
        <br/>
        <input type="text" name="school" placeholder="Your answer"/>
      </div><br/>

      <div className="join">
        <label>Why do you want to join Codetrain <span>*</span></label>
        <br/>
        <input type="text" name="join" placeholder="Your answer"/>
      </div><br/>

      <div className="about">
        <label>How did you hear about Codetrain ?<span>*</span></label>
        <br/>
        <input type="text" name="about" placeholder="Your answer"/>
      </div>
      <br/><br/>

      <section id="footer">
          <h5 style={{color: "grey"}}>A copy of your repones will be emailed to the adree you provided</h5>
          <input type="submit" name="submit"/>
        <div className="page">
          <ul>
          <li>
            <label> Page 1 of 1</label>
          </li>
          <li>
          <label for="file"></label>
          <progress  id="file" value="100" max="100">100% </progress> 
          </li>
        </ul><br/>
        <p>Never submit passwords through Google Forms.</p>
        </div>
      </section>
      </form>
    );
  }
}

export default App;
