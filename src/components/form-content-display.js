import React from 'react';

const FStyle={
  backgroundColor: '#A9A9A9',
};


class FormContentDisplay extends React.Component {

   render() {
     if(this.props.user) {
       return (
            <div>
            <h3>{this.props.user.firstName} </h3>
            <h3>{this.props.user.lastName}</h3>
            <h3>{this.props.user.phoneNumber}</h3>
            <h3>{this.props.user.email}</h3>
            <h3>{this.props.user.password} </h3>
            <h3>{this.props.user.confirmPassword} </h3>
          </div>
       );
     }
     return null;

   }
}

export default FormContentDisplay;
