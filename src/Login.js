import React from 'react'
import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {Container, Form, Button} from 'react-bootstrap'
import './login.css'
const Login = (props) => {
    var hist = useHistory()
    useEffect(() => {
        
    
        if (props.isAuth == 0) {
            hist.push('/error')
        }
        
    }, [])
    

    let submit = () => {

        var data = {
            guestName: document.getElementById('guestName').value,
            eventName: document.getElementById('eventName').value,
            guestInfo: document.getElementById('guestInfo').value,
            eventInfo: document.getElementById('eventInfo').value
        }
        var options = {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {
                'Content-Type':'application/json'
            }
        }
        fetch('http://localhost/commitpost', options)
        .then(res => res.json())
        .then(res => console.log(res))
    }
    let a = props.isAuth
    return (
        <Container>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label class = 'text'>Name Surname of the guest</Form.Label>
                    <Form.Control id = 'guestName' type= "text" placeholder="NameSurname of the guest" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label class = 'text'>The name of the event</Form.Label>
                    <Form.Control id = 'eventName' type="text" placeholder="EventName" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label class = 'text'>About the guest</Form.Label>
                    <Form.Control  id = 'guestInfo' as="textarea" rows = {2} placeholder="Degrees, Jobs, Etc" />
                </Form.Group>
                
                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label class = 'text'>About the event</Form.Label>
                    <Form.Control id = 'eventInfo' as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <Button className = 'mt-3' onClick = {submit}>Submit</Button>
        </Container>
    )
}

export default Login
