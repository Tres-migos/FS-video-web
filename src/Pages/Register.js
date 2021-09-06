import React, {useState} from 'react'
import axios from 'axios'
import { Button, Form, Header, Grid, } from 'semantic-ui-react'



const instance = axios.create({
  baseURL: 'http://localhost:8080/account',
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
  },
});

export default function Register () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  function validateForm(){
    return username.length > 0 && password.length > 0;
  }

  function onSubmit (event)  {
    console.log(this.state)
  }
  
  


  return(
    <Grid justified>
        <Grid.Column style={{maxWidth:700, marginTop: 20 }}>
            <Header>Register</Header>

    <Form >
    <Form.Field>
      <label>Username</label>
      <input 
      value={username}
      name = 'username' 
      type='username'
      placeholder="Username" 
      onChange={(e) => setUsername(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input 
      value={password}
      name= 'password' 
      type='Password'
      placeholder="Password" 
      onChange={(e) => setPassword(e.target.value)}/>
    </Form.Field>
  
    <Button fluid primary type='submit' disabled={!validateForm()}>Submit</Button>
  </Form>
        </Grid.Column>
        
    </Grid>
  );
  
}