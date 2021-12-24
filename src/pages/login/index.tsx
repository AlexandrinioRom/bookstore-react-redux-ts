import { Container, Input, Text, Button, Form} from '../authStyles'
import React from 'react'

type Props = {
  
}

export const Login: React.FC<Props> = (props) => {
 return (
   <>
   <Container>
    <Form method='post'>
      <Text>Email</Text>
      <Input type='email'/>
      <Text>Password</Text>
      <Input type='password'/>
      <Button type='submit'>Submit</Button>
    </Form>
  </Container>
  </>
 );
}