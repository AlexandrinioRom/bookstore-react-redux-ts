import { LeftContainer, RightContainer, Wrapper} from './styles'
import React from 'react'

type Props = {
  
}

export const Main: React.FC<Props> = (props) => {
 return (
  <Wrapper>
     <LeftContainer></LeftContainer>
     <RightContainer></RightContainer>
   </Wrapper>
 );
}

