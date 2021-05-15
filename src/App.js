import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/nav.css'
import Home from './Home'
import Login from './Login'
import {useState} from 'react'
import { Container, Form, Button, Modal, Alert } from 'react-bootstrap'
import './main.css'
import Error from './Error'
import Pastevents from './Pastevents'
// import Login from './Login'
export const isLoggedIn = React.createContext()



function App() {

 
  const [auth, setauth] = useState(0)

  const [show, setShow] = useState(false);
  const [alert, setalert] = useState(false);
  const [alert2, setalert2] = useState(false);
  let alertStyle = {
    display: alert ? 'block' : 'none'
  }
  let alert2Style = {
    display: alert2 ? 'block' : 'none'
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let authorize = (ev) => {
    ev.preventDefault()
    console.log('authorize called')
    let e = document.getElementById('email').value
    let p = document.getElementById('password').value
    console.log(e)
    console.log(p)
    let toSend = {
      'email': e,
      'password': p
    }
    let options = {
      method: 'POST',
      body: JSON.stringify(toSend),
      mode: 'cors',
      headers: {
        'Content-Type':'application/json'
        
      }

      
    }

    fetch('http://localhost/login', options)
    .then(response => response.json())
    .then(res => {
      console.log(res)
      if (res) {
        setauth(1)
        console.log('AUF')
        setalert(true)
      } else {
        setalert2(true)
      }
    })
    .catch((err) => {
      console.log(err)
      setalert2(true)
    })

  }

  return (
    <BrowserRouter>
       <Navbar bg="dark" variant = "dark" expand="lg">
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link to="/" className = 'ms-2 me-2 link1'>Home</Link>
                {/* <Link to="/login" className = 'ms-2 me-2 link1'>Upcoming Events</Link> */}
                <Link to="/Pastevents" className = 'ms-2 me-2 link1'>Past Events</Link>
                <Link href="#link" className = 'ms-2 me-2 link1'>About us </Link>
                <Link to="/login" className = 'ms-2 me-2 link1'>Edit</Link>
                <Link onClick = {handleShow} className = 'ms-2 me-2 link1'>Log in</Link>
                <NavDropdown title="ENG" id="navbarScrollingDropdown" className = 'ms-2 me-2'>
                    <NavDropdown.Item href="#action3" className = 'ms-2 me-2'>RUS</NavDropdown.Item>
                    
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5"  className = 'ms-2 me-2'>ENG</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        <Alert style = {alertStyle} variant="success" onClose={() => setalert(false)} dismissible>
          <Alert.Heading>Login Successful</Alert.Heading>
         
        </Alert>

        <Alert style = {alert2Style} variant="danger" onClose={() => setalert2(false)} dismissible>
          <Alert.Heading>Login Failed </Alert.Heading>
         
        </Alert>
        <Switch>

          <Route exact path = '/' render = {(props) => <Home {...props} isAuth = {auth} />}>
            
          </Route>
          <Route exact path = '/login' render = {(props) => <Login {...props} isAuth = {auth} />}>
            
          </Route>
          <Route exact path = '/error' render = {(props) => <Error {...props} isAuth = {auth} />}>
            
          </Route>
          <Route exact path = '/pastevents' render = {(props) => <Pastevents {...props} isAuth = {auth} />}>
            
          </Route>



        </Switch>
        

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <Form>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" id = 'email'/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" id = 'password'/>
            </Form.Group>
            <Form.Group >
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick = {authorize}>
              Submit
            </Button>
          </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </BrowserRouter>
    
    



  );
}

export default App;
