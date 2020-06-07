import React, { Component } from "react"
import { render } from "react-dom";

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const axios = require('axios').default;

class UserDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            'id': props.match.params.user,
            'name': '',
            'room_id': '',
            'room_name': '',
            'initialized': false,
        }
        let self = this
        axios.get('/api/v1/user/'+this.state.id+'/')
        .then(function(response) {
            document.title = response.data.name + ' | CapacityCount'
            self.setState({
                name: response.data.name,
                room_id: response.data.room
            })
            // Also get room info
            axios.get('/api/v1/room/'+self.state.room_id+'/')
            .then(function(response) {
                self.setState({
                    room_name: response.data.name,
                    initialized: true
                })
            })
        }
        )
    }

    render() {
        return(
            <>
                <h1>User: {this.state.name}</h1>
                <h3>Room: {this.state.room_name}</h3>
            </>
        )
    }
}
export default UserDetail