import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from 'react'
// import './main.css'

export default function Main(props) {
   
    


    return (
        <div>
            this is main {props.isAuth}
            <div className = "logged">
                Welcome
            </div>
        </div>
    )
}
