import React from 'react';
import styled from 'styled-components'


const Loginfooter = () => {
  return (
    <Container>
          <h4>Powered by <a href="https://fortunedev.netlify.app"> Fortune</a></h4>
    </Container>  
  )
}

export default Loginfooter

const Container = styled.div`

width:100vw;
bottom: 0;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
letter-spacing: 5px;
  



a {
    
    text-decoration:none;
    color:red;
    cursor:pointer;
}

`


