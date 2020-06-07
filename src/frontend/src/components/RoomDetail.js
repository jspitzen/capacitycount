import React, { Component } from "react"
import { render } from "react-dom";

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const axios = require('axios').default;

class RoomDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            'id': props.match.params.room,
            'capacity': 0,
            'name': '',
            'initialized': false,
            'user_name': '',
        }
        let self = this
        axios.get('/api/v1/room/'+this.state.id+'/')
        .then(function(response) {
            document.title = response.data.name + ' | CapacityCount'
            self.setState({
                capacity: response.data.capacity,
                name: response.data.name,
                initialized: true
            })
        }
        )
    }
    handleChange(e){
        this.setState({user_name: e.target.value});
    }
    handleSubmit(e){
        //call the api here with current state value (this.state.username)
        axios.post('/api/v1/user/', {
            name: this.state.user_name,
            room: this.state.id
        })
        .then(function(response) {
            let id = response.data.id;
            window.location.href = '/' + id;
        })
     }
    render() {
        return(
            <>
            <h1>ROOM: {this.state.name}</h1>
            <h4>Create a user</h4>
            <Form inline>
                <Form.Group>
                    <Form.Control type="text" onChange={this.handleChange.bind(this)} placeholder="Name"></Form.Control>
                    <Button variant="secondary" onClick={this.handleSubmit.bind(this)}>Create user</Button>
                </Form.Group>
            </Form>
            </>
        )
    }
}
export default RoomDetail