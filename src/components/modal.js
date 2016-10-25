import React from 'react';
import { Button, Modal, Dialog, Header, Title, Body, Footer, ReactDOM } from 'react-bootstrap';
import { render } from 'react-dom';

const Trigger = React.createClass({
  getInitialState() {
    return { show: false };
  },

  render() {
    let close = () => this.setState({ show: false});

    return (
      <div className="modal-container">
        <Button
          bsStyle="success"
          onClick={() => this.setState({ show: true})}
        >
          Submit
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">This is a sample Registration Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Please fill in the Sign Up form using this as a reference.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default Trigger;
