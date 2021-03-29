'use strict';

const e = React.createElement;

class LoginMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };
  }

  expandLogin () {

  }

  render() {
    <div className="registrationForm">
      <h2>Login</h2>
      <form>
        <input type='text' id='uname' name='uname' placeholder='Username' /><br />
        <input type='password' id='password' name='password' placeholder='Password' /><br />
        <input type='button' value='Login' />
      </form>
    </div>

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#login');
ReactDOM.render(e(LoginMenu), domContainer);
