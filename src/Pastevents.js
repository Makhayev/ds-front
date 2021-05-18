import React from 'react'
import {useEffect} from 'react'
import { NavItem } from 'react-bootstrap'
import ReactDOM from 'react-dom'
// import './pastevents.css'
import PostList from './PostList'
const Pastevents = () => {

    useEffect(() => {
        // var temp = []
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'Application/json'
            },
            mode: 'cors'
        }
        fetch('http://localhost/allposts', options)
        .then(response => response.json())
        .then(res => {
            var temp = res.map((item) => {
                
                return <li><PostList key = {item.toString()} guest = {item.guest} eventName = {item.eventName} info = {item.info} text = {item.text} /></li>
            })
        ReactDOM.render(<ul>{temp}</ul>, document.getElementById('whereto'))
        })
        
    }, [])
    return (
        <div id = 'whereto'>
            
        </div>
    )
}

export default Pastevents
