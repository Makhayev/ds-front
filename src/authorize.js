import auth from "registry-auth-token"

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
        setauth(val => !val)
        console.log({auth})
      }
    })
    .catch((err) => {
      console.log(err)
    })

  }

  export default authorize