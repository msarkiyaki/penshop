//import { Container } from '@material-ui/core';
import styled from "styled-components";
import React from 'react';

const Container = styled.div`
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Message = () => {
  return (
    <Container>
        AWOOF! BUY ANYTHING UNDER ₦30,000 FOR FREE SHIPPING!
    </Container>
  )
}
export default Message;
