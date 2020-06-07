import React, { Component } from "react"
import { render } from "react-dom";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const axios = require('axios').default;

class RoomForm extends Component {
    constructor(props){
      super(props);
      this.state={
          'room_name': '',
          'capacity': 0
        }
    }
    handleNameChange(e){
      this.setState({room_name: e.target.value});
    }
    handleCapacityChange(e){
      this.setState({capacity: e.target.value});
    }
    handleSubmit(e){
       //call the api here with current state value (this.state.username)
       axios.post('/api/v1/room/', {
           name: this.state.room_name,
           capacity: this.state.capacity
       })
       .then(function(response) {
           let id = response.data.id;
           window.location.href = '/' + id;
       })
    }
    render(){
     return(
        <>
          <h1 className="header">Welcome to CapacityCount</h1>
          <p>
              You can use the form below to create a new room, or use your existing link to visit your room page.
          </p>
          <Form inline>
            <Form.Group controlId="group_name">
              <Form.Control type="text" onChange={this.handleNameChange.bind(this)} placeholder="Group name"></Form.Control>
            </Form.Group>
            <Form.Group controlId="group_capacity">
                <Form.Control as="select" onChange={this.handleCapacityChange.bind(this)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="btn">
            <Button variant="secondary" onClick={this.handleSubmit.bind(this)}>Create room</Button>
            </Form.Group>
          </Form>
        </>
     )
    }
}

export default RoomForm
