import React from 'react';
import { Button, Modal, Dialog, Header, Title, Body, Footer, ReactDOM } from 'react-bootstrap';
import FormContent from './form-content'
import FormContentDisplay from './form-content-display';
import EmptyPage from './empty';
import Navbar from './navbar';

const FStyle={
  backgroundColor: '#f9f9f9',
  borderRadius: 7,
};

//  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={FStyle}>
        //<FormContentDisplay user={this.state}  />
    //  </div>


const user = [
  {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password:  '',
    confirmPassword: ''
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user
    };
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateConfirmPassword = this.updateConfirmPassword.bind(this);

  }
  updateFirstName(e) {
     this.setState({firstName: e.target.value});
  }
  updateLastName(e) {
     this.setState({lastName: e.target.value});
  }
  updatePhoneNumber(e) {
     this.setState({phoneNumber: e.target.value});
  }
  updateEmail(e) {
     this.setState({email: e.target.value});
  }
  updatePassword(e) {
     this.setState({password: e.target.value});
  }
  updateConfirmPassword(e) {
     this.setState({confirmPassword: e.target.value});
  }

  render()  {
    return(
      <div>
        <Navbar />
          <br />
          <br />
          <br />
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-md-1 col-lg-1">
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4" style={FStyle}>
              <center><h1 style={{color: '#428bca'}}>Sign Up Form</h1></center>
              <br />
              <FormContent user={this.state.user} updatefname={this.updateFirstName}  updatelname={this.updateLastName} updatephnumber={this.updatePhoneNumber} updateemailID={this.updateEmail} updatepwd={this.updatePassword} updateconfirmpwd={this.updateConfirmPassword}/>
            </div>
            <div className="col-md-2 col-lg-2">
            </div>
            <modalInstance />
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4" style={FStyle}>
              <center><h1 style={{color: '#428bca'}}>Sample Form</h1></center>
              <br />
                <EmptyPage   />
            </div>
            <div className="col-md-1 col-lg-1">
            </div>
          </div>

        </div>

    );
  }
}

export default App
