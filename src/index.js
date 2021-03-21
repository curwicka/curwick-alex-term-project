import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <header>
          <h1>Milk Crate</h1>
          <h3>Buy, Sell, and Share Your Record Collection</h3>
        </header>
        <RegistrationForm />
        <footer>
          <p>
            &copy; 2021, MilkCrate:
            <br />
            Web Master: <a href="mailto:curwicka@csp.edu">Alexander Curwick</a>
          </p>
        </footer>
      </React.Fragment>
    );
  }
}

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="registrationForm">
        <h2>New User Registration</h2>
        <form>
          <input type='text' id='uname' name='uname' placeholder='Username' /><br />
          <input type='text' id='fname' name='fname' placeholder='First Name' /><br />
          <input type='text' id='lname' name='lname' placeholder='Last Name' /><br />
          <input type='email' id='email' name='email' placeholder='E-Mail' /><br />
          <input type='password' id='password' name='password' placeholder='Password' /><br />
          <input type='password' id='confirm' name='confirm' placeholder='Confirm Password' /><br />
          <input type='button' value='Register' />
        </form>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Page />, document.getElementById('root'));
