import {Link, LeftContainer, MiddleContainer, RightContainer, Wrapper} from './styles'
import React from 'react'

type Props = {
  
}

export const Header: React.FC<Props> = (props) => {
 return (
   <Wrapper>
    <LeftContainer>
      LeftPanel
    </LeftContainer>
    <MiddleContainer>
      MainPanel
    </MiddleContainer>
    <RightContainer>
      <Link href="/login">Login</Link>
      <Link href="/registration">Registration</Link>
    </RightContainer>
   </Wrapper>
 );
}
