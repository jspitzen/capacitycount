import React, { Component } from "react"
import { render } from "react-dom";

class RoomDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            'id': props.match.params.room,
            'capacity': 0,
            'name': '',
            'initialized': false
        }
    }
    render() {
        return(
                <h1>ROOM: {this.state.id}</h1>
        )
    }
}
export default RoomDetail