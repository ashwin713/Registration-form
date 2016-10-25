import React from 'react';

const EStyle={
  color: '#d9534f',
  fontSize: 13
};


class ErrorComponent extends React.Component {
  constructor(errors) {
     super(errors);
     this.state = {
       errors
     };
   };
   componentWillMount() {
     if(this.props.errors){
       return true;
     }
     else {
       return false;
     }
   }
  render()  {
    return(
      <div>
          <center><h1 style={EStyle}>{this.props.errors}</h1></center>
      </div>
    );
  }
}

export default ErrorComponent;
