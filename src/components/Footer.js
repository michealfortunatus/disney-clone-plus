import React from 'react';
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
          <h4>Powered by <a href="https://fortunedev.netlify.app"> Fortune</a></h4>
    </Container>
  );
};

export default Footer

const Container = styled.div`

width:100vw;
  bottom: 0;
  height: 70px;
  background: #090b13;
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


