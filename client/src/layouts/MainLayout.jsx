import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import { Container } from '../styles/Styled';

const StyledHeader = styled.header`
  background: #fff;
  box-shadow: 1px 1px 2px #f5f5f5;
  margin-bottom: 60px;
  width: 100%;
`;

const MainLayout = ({ children }) => (
  <Container>
    <StyledHeader>
      <Nav />
    </StyledHeader>
    <Container>{children}</Container>
  </Container>
);

export default MainLayout;
