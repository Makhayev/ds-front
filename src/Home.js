import React from 'react'
import './home.css'
import {Container} from 'react-bootstrap'
import {useState, useEffect} from 'react'


const Home = (props) => {


    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    console.log(props.isAuth)
    let a = props.isAuth
    const [auth, setauth] = useState(a)
    return (
        <Container>
            <img id = 'logo' src = "./icon.png"></img>
            <div id = 'textunderlogo'>
                "Data is a precious thing and will last longer than the systems themselves."
            </div>
            <div id = 'tim'>
                Tim Berners-Lee
            </div>
            <hr></hr>


        </Container>
    )
}

export default Home

