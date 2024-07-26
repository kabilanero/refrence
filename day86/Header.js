import React from "react";
import "../Styles/header.css";
import Modal from 'react-modal';

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
      signupModalIsOpen: false
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

  render() {
    const { backgroundColor, display, loginModalIsOpen } = this.state; //destructuring the background color
    const { signupModalIsOpen } = this.state;
    return (
      <div>
        <div className="redbox" style={{ backgroundColor: backgroundColor }}>
          <div className="icon" style={{ display: display }}>
            e!
          </div>
          <div className="button1">
            <button className="login" onClick={this.handlelogin}>Log In </button>
            <button className="account" onClick={this.handlesignup}> Create an account</button>
          </div>
        </div>
        <Modal
          isOpen={loginModalIsOpen}
          style={customStyles}
        >
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

            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Header;
