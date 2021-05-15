import React from 'react'
import {useEffect} from 'react'
import ReactDOM from 'react-dom'
// import './pastevents.css'

const Pastevents = () => {

    useEffect(() => {
        var temp = []
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
            temp = res.map((item) => {
                return React.createElement('b', {}, item.guest)
            })
        ReactDOM.render(temp, document.getElementById('whereto'))
        })
        
    }, [])
    return (
        <div id = 'whereto'>
            
        </div>
    )
}

export default Pastevents
