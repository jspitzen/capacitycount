import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron';

import RoomForm from "./RoomForm";
import RoomDetail from "./RoomDetail";
import UserDetail from "./UserDetail";


const container = document.getElementById("app");
export default function App() {
  return (
    <Container className="p-3">
      <Jumbotron>
        <Router>
          <div>
            <Switch>

              <Route path="/:room/:user" component={UserDetail}>
              </Route>
              <Route path="/:room" component={RoomDetail}>
              </Route>
              <Route path="/">
                <RoomForm />
              </Route>
            </Switch>
          </div>
        </Router>
      </Jumbotron>
    </Container>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
render(<App />, container);