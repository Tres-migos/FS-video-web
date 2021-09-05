import React from 'react'

import { Button, Form, Header, Grid, Segment } from 'semantic-ui-react'


const Login = () => (
    <Grid justified>
        <Grid.Column style={{maxWidth:700, marginTop: 20 }}>
            <Header>Sign in</Header>

    <Form >
    <Form.Field>
      <label>Username</label>
      <input name = 'username' placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input name= 'password' type='Password' />
    </Form.Field>
    <Form.Field>

    </Form.Field>
    <Button  fluid primary type='submit'>Submit</Button>
  </Form>
        </Grid.Column>
        
    </Grid>
    
  
)
export default Login 