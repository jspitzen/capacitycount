import React, { Component } from "react"
import { render } from "react-dom";

const axios = require('axios').default;

class RoomDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            'id': props.match.params.room,
            'capacity': 0,
            'name': '',
            'initialized': false
        }
        let self = this
        axios.get('/api/v1/room/'+this.state.id+'/')
        .then(function(response) {
            self.setState({
                capacity: response.data.capacity,
                name: response.data.name,
                initialized: true
            })
        }
        )
    }
    render() {
        return(
                <h1>ROOM: {this.state.name}</h1>
        )
    }
}
export default RoomDetail