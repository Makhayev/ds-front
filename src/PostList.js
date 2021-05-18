import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import {useRef, useEffect} from 'react'
import ReactDOM from 'react-dom'
const PostList = (props) => {
    var imgstring = props.guest.trim()
    const listref = useRef()
    useEffect(() => {
       

   var infoArr = props.info
   let finalArr = infoArr.map((elem) => {
       return <li>{elem}</li>
   })
   ReactDOM.render(<li>{finalArr} </li>, document.getElementById('wrotever'))
    

   
    imgstring = imgstring.replaceAll(' ', '')
    })


    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgstring} />
            <Card.Body>
                <Card.Title>{props.guest}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            <ul ref = {listref} className="list-group-flush" id = 'wrotever'>
                
            </ul>
            <Card.Body>
                <Card.Link href="#">Youtube Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default PostList
