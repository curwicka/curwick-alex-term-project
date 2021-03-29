import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

/* Common page components */
class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <header>
          <h1>Milk Crate</h1>
          <h3>Buy, Sell, and Share Your Record Collection <LoginForm /></h3>
        </header>
        <Carousel />
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

/* Login/Register Components */
/*
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
*/
/*class LoginButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login_button">
        <input type='button' value='Login/Register' />
      </div>
    )
  }
}*/

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = { showLogin: false, };

    this.showLogin = this.showLogin.bind(this);
  }

  showLogin(event) {
    event.preventDefault();

    this.setState({ showLogin: true, });
  }

  render() {
    return (
      <div className="login_button">
        <button onClick={this.showLogin}>
          Login/Register
        </button>

        {this.state.showLogin ? (
          <div className="loginForm" ref={(element) => {
            this.dropdownMenu = element;
          }}>
            <h2>Login</h2>
            <form>
              <input type='text' id='uname' name='uname' placeholder='Username' /><br />
              <input type='password' id='password' name='password' placeholder='Password' /><br />
              <input type='button' value='Login' />
            </form>
          </div>
        ) : (null)}
      </div>
    );
  }
}

/*const LoginButton = ({ clickFunction }) => (
	<div className={ login_button } onClick={ clickFunction }>
		<input type='button' value='Login/Register' />
	</div>
);*/

/* Image Carousel Components */
class Carousel extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			currentImageIndex: 0
		};

		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}

	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

		this.setState({
			currentImageIndex: index
		});
	}

	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}

	render () {
		return (
			<div className="carousel">
        <h2>Recently Posted</h2>
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
		);
	}
}

const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};

	return (
		<div className="image-slide" style={styles}></div>
	);
}

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div
		className={ `slide-arrow ${direction}` }
		onClick={ clickFunction }>
		{ glyph }
	</div>
);

const imgUrls = [
	process.env.PUBLIC_URL + '/lp01c.png',
	process.env.PUBLIC_URL + '/lp02c.png',
	process.env.PUBLIC_URL + '/lp03c.png',
	process.env.PUBLIC_URL + '/lp04c.png',
	process.env.PUBLIC_URL + '/lp05c.png'
];

// ========================================

ReactDOM.render(<Page />, document.getElementById('root'));
