import { Container, Input, Text, Button, Form} from '../authStyles'
import React from 'react'

type Props = {
  
}

export const Registration: React.FC<Props> = (props) => {
 return (
  <>
  <Container>
    <Form method='post'>
      <Text>Name</Text>
      <Input type='name'/>
      <Text>Email</Text>
      <Input type='email'/>
      <Text>Dob</Text>
      <Input type='date'/>
      <Text>Password</Text>
      <Input type='password'/>
      <Button type='submit'>Submit</Button>
    </Form>
  </Container>
   
  
  </>
 );
}