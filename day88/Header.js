import React from "react";
import "../Styles/header.css";
import Modal from 'react-modal';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'antiquewhite',
    border: 'solid 2px brown'
  },
};

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "",
      display: "none",
      loginModalIsOpen: false,
      signupModalIsOpen: false,
      isLoggedIn: false,
      loggedInUser: undefined
      // componentClicked: false
    };
  }


  componentDidMount() {
    const path = this.props.history.location.pathname;
    this.setAttributes(path);
  }
  setAttributes = (path) => {
    let bg, display;
    if (path === "/") {
      bg = "#000000";
      display = "none";
    } else {
      bg = "#ff0000";
      display = "inline-block";
    }
    this.setState({ backgroundColor: bg, display: display });
  };

  handlelogin = () => {
    this.setState({ loginModalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ loginModalIsOpen: false })
  }

  handlesignup = () => {
    this.setState({ signupModalIsOpen: true })
  }

  handleLogout = () => {
    this.setState({ loginModalIsOpen: false, loggedInUser: undefined })
  }

  responseGoogle = (response) => {
    console.log(response);
    this.setState = ({ isLoggedIn: true, loggedInUser: response.profileobj.email, loginModalIsOpen: false });
  }

  responseFacebook = (response) => {
    console.log(response);
  }
  render() {
    const { backgroundColor, display, loginModalIsOpen, isLoggedIn, loggedInUser } = this.state; //destructuring the background color
    const { signupModalIsOpen } = this.state;
    return (
      <div>
        <div className="redbox" style={{ backgroundColor: backgroundColor }}>
          <div className="icon" style={{ display: display }}>
            e!
          </div>
          {!isLoggedIn ?
            <div className="button1">
              <button className="login" onClick={this.handlelogin}>Log In</button>
              <button className="account" onClick={this.handlesignup}> Create an account</button>
            </div>
            : <div className="button1">
              <button className="login" >{loggedInUser}</button>
              <button className="account" onClick={this.handleLogout}>Logout</button>
            </div>}
        </div>
        <Modal
          isOpen={loginModalIsOpen}
          style={customStyles}
        >
          <div>
            <GoogleLogin
              clientId="568670890160-82sf2d5qi6i45jhnniqbh1srframgi4k.apps.googleusercontent.com"
              buttonText="Continue With Google"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
          <br />
          <div>
            <FacebookLogin
              appId="1088597931155576"
              textButton="continue with Facebook"
              autoLoad={true}
              fields="name,email,picture"
              icon="fa-facebook"
              callback={this.responseFacebook} />
          </div>
          <div>
            <h2>Login</h2>
            <input type="text" placeholder="Email" />
            <br />
            <input type="password" placeholder="password" />
            <br />
            <div>
              <button>Login</button>
              <button onClick={this.closeModal}>Cancel</button>
              <a href="#" aria-label="if you don't have account please sign-up"></a>
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={signupModalIsOpen}
          style={customStyles}
        >
          <div>
            <h2>Sign-Up</h2>
            <input type="text" placeholder="First name" />
            <br />
            <input type="text" placeholder="Last name" />
            <br />
            <input type="text" placeholder="Email" />
            <br />
            <input type="password" placeholder="password" />
            <br />
            <input type="password" placeholder="Re-Enter Password" />
            <div>
              <button>Sign-up</button>
              <button onClick={this.signupmodalclose}>cancel</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Header;
