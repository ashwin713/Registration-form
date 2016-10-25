import React from 'react';
import { render } from 'react-dom';
import { Button, Modal, Dialog, Header, Title, Body, Footer, ReactDOM } from 'react-bootstrap';
import FormContentDisplay from './form-content-display';
import ErrorComponent1 from './validation-errors'
import ErrorComponent2 from './validation-errors'
import ErrorComponent3 from './validation-errors'
import ErrorComponent4 from './validation-errors'
import ErrorComponent5 from './validation-errors'
import ErrorComponent6 from './validation-errors'
import FormContentDisplay1 from './form-content-display';



var pwd = '';
const Flags = [{
  fname: false,
  lname: false,
  phNumber: false,
  emailID: false,
  pwdFinal: false,
  ConfirmpwdFinal: false
}

];

const Errors = [
  {
    fnameError: '',
    lnameError: '',
    phNumberError: '',
    emailError: '',
    pwdError: '',
    pwdMatch: ''
  }
];

class FormContent extends React.Component {

   constructor(user) {
      super(user);
      this.state = {
        user
      };

this.updateFirstName = this.updateFirstName.bind(this);
this.updateLastName = this.updateLastName.bind(this);
this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
this.updateEmail = this.updateEmail.bind(this);
this.updatePassword = this.updatePassword.bind(this);
this.updateConfirmPassword = this.updateConfirmPassword.bind(this);
this.onSubmit = this.onSubmit.bind(this);

   };
   componentDidMount(){
     this.refs.fname.focus();
   }
   updateFirstName(e) {
     if(e.target.value){
       if (!(/^[a-zA-Z\s]+$/.test(e.target.value))){
         this.setState({fnameError: "First Name should contain only characters" });
         this.setState({fname: false});
       }
       else {
         this.setState({fnameError: ""});
         this.props.updatefname(e);
         this.setState({fname: true});
       }
     }
     else {
       this.setState({fnameError: "Input field cannot be empty" });
       this.setState({fname: false});
     }


   }
   updateLastName(e) {
     if(e.target.value){
       if (!(/^[a-zA-Z\s]+$/.test(e.target.value))){
         this.setState({lnameError: "Last Name should contain only characters" });
         this.setState({lname: false});
       }
       else {
         this.setState({lnameError: ""});
         this.props.updatelname(e);
         this.setState({lname: true});
       }
     }
     else {
       this.setState({lnameError: "Input field cannot be empty" });
       this.setState({lname: false});
     }
   }
   updatePhoneNumber(e) {
     if(e.target.value){
       if(isNaN(e.target.value)){
         this.setState({phNumberError: "Only digits from 0-9 are to be entered" });
         this.setState({phNumber: false});
       }
       else if(e.target.value.length == 10){
         this.setState({phNumberError: ""});
         this.props.updatephnumber(e);
         this.setState({phNumber: true});
       }
       else {
         this.setState({phNumberError: "Don't forget to enter a 10 digit number"});
         this.setState({phNumber: false});
       }
     }
     else {
       this.setState({phNumberError: "Input field cannot be empty" });
       this.setState({phNumber: false});
     }
   }
   updateEmail(e) {
     if(e.target.value){
       const emailPattern = /^[a-zA-Z](.+)@(.+){2,}\.(.+){2,}/;
       if (emailPattern.test(e.target.value)){
         this.setState({emailError: ""});
         this.props.updateemailID(e);
         this.setState({emailID: true});
       }
       else {
         this.setState({emailError: "Please Enter a valid email-ID" });
         this.setState({emailID: false});
       }
     }
     else {
       this.setState({emailError: "Input field cannot be empty" });
       this.setState({emailID: false});
     }
   }
   updatePassword(e) {
     if(e.target.value){
       if(e.target.value.length >= 6){
         this.setState({pwdError: ""});
         this.props.updatepwd(e);
         pwd=e.target.value;
         this.setState({pwdFinal: true});
       }
       else {
         this.setState({pwdError: "The password length must  be atleast 6" });
         this.setState({pwdFinal: false});
       }
     }
     else {
       this.setState({pwdError: "Input field cannot be empty" });
       this.setState({pwdFinal: false});
     }
   }
   updateConfirmPassword(e) {
     if(e.target.value){
       if(e.target.value === pwd){
         this.setState({pwdMatch: ""});
         this.props.updateconfirmpwd(e);
         this.setState({ConfirmpwdFinal: true});
       }
       else {
         this.setState({pwdMatch: "The passwords do not match" });
         this.setState({ConfirmpwdFinal: false});
       }
     }
     else {
       this.setState({pwdMatch: "Input field cannot be empty" });
       this.setState({ConfirmpwdFinal: false});
     }
   }
   onSubmit(e){
     console.log("@Submit button clicked");
     if(this.state.fname && this.state.lname && this.state.phNumber && this.state.emailID && this.state.pwdFinal && this.state.ConfirmpwdFinal) {
       console.log("@Info entered : " + this.state);
       return true;
     }
     else {
       if(!this.state.fname){
         this.refs.fname.focus();
         console.log("@fname error" );
       }
       else if(!this.state.lname){
         this.refs.lname.focus();
         console.log("@lname error" );
       }
       else if(!this.state.phNumber){
         this.refs.phNumber.focus();
         console.log("@phNumber error" );
       }
       else if(!this.state.emailID){
         this.refs.emailID.focus();
         console.log("@emailID error" );
       }
       else if(!this.state.pwdFinal){
         this.refs.pwdFinal.focus();
         console.log("@pwdFinal error" );
       }
       else if(!this.state.ConfirmpwdFinal){
         this.refs.ConfirmpwdFinal.focus();
         console.log("@ConfirmpwdFinal error" );
       }
       e.preventDefault();
     }
   }
   render() {
      return (
         <div>
           <form >
             <div className="form-group">
            <input autoFocus type = "text" className="form-control" placeholder="First Name" ref="fname" defaultValue = {this.state.firstName}
               onChange = {this.updateFirstName} />
             <ErrorComponent1 errors={this.state.fnameError} />
           </div>

             <div className="form-group">
             <input autoFocus type = "text" className="form-control" placeholder="Last Name" ref="lname" defaultValue = {this.state.lastName}
               onChange = {this.updateLastName} />
             <ErrorComponent2 errors={this.state.lnameError} />
           </div>

               <div className="form-group">
             <input autoFocus type = "text" className="form-control" placeholder="Phone Number" ref="phNumber" defaultValue = {this.state.phoneNumber}
               onChange = {this.updatePhoneNumber} />
             <ErrorComponent3 errors={this.state.phNumberError} />
           </div>

               <div className="form-group">
             <input autoFocus type = "email" className="form-control" placeholder="Email ID" ref="emailID" defaultValue = {this.state.email}
               onChange = {this.updateEmail} />
             <ErrorComponent4 errors={this.state.emailError} />
           </div>

               <div  className="form-group">
             <input autoFocus type = "password" className="form-control" placeholder="Password" ref="pwdFinal" defaultValue = {this.state.password}
               onChange = {this.updatePassword} />
             <ErrorComponent5 errors={this.state.pwdError} />
           </div>
               <div className="form-group">
             <input autoFocus type = "password" className="form-control" placeholder="Confirm Password" ref="ConfirmpwdFinal" defaultValue = {this.state.confirmPassword}
               onChange = {this.updateConfirmPassword} />
             <ErrorComponent6 errors={this.state.pwdMatch} />
           </div>
           <div className="form-group">
          <center><Button type='submit' onClick={this.onSubmit} bsStyle="primary" style={{ borderRadius: 5}}>Submit</Button></center>
          </div>
           </form>
         </div>

      );
   }
}

export default FormContent;
