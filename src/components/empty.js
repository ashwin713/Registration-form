import React from 'react';
import { Button } from 'react-bootstrap';
import Trigger  from './modal';


class EmptyPage extends React.Component {

   render() {
       return (
         <div>
           <form>
             <div className="form-group">
            <input autoFocus type = "text" className="form-control" placeholder="First Name" defaultValue = "John" disabled />
           </div>

             <div className="form-group">
             <input autoFocus type = "text" className="form-control" placeholder="Last Name" defaultValue = "Snow" disabled />
           </div>

               <div className="form-group">
             <input autoFocus type = "text" className="form-control" placeholder="Phone Number" defaultValue = "9995031452" disabled />
           </div>

               <div className="form-group">
             <input autoFocus type = "email" className="form-control" placeholder="Email ID" defaultValue = "johnSnow@nightsWatch.got" disabled />
           </div>

               <div  className="form-group">
             <input autoFocus type = "password" className="form-control" placeholder="Password" defaultValue = "I Know Nothing" disabled />
           </div>
               <div className="form-group">
             <input autoFocus type = "password" className="form-control" placeholder="Confirm Password" defaultValue = "I Know Nothing" disabled  />
           </div>
           <div className="form-group">
              <center> <Trigger /></center>
          </div>
           </form>
         </div>
       );
}
}

export default EmptyPage;
