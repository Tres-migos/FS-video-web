import React from 'react'
import axios from 'axios'
import { Button, Form, Header, Grid, Segment } from 'semantic-ui-react'



const instance = axios.create({
  baseURL: 'http://localhost:8080/account',
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
  },
});

const Login = () => (

  
    <Grid justified>
        <Grid.Column style={{maxWidth:700, marginTop: 20 }}>
            <Header>Sign in</Header>

    <Form >
    <Form.Field>
      <label>Username</label>
      <input 
      name = 'username' 
      placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input 
      name= 'password' 
      type='Password'
      placeholder="Password" />
    </Form.Field>
  
    <Button  fluid primary type='submit'>Submit</Button>
  </Form>
        </Grid.Column>
        
    </Grid>
    
  
)
export default Login 