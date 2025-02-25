import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  background-color: #2ac1bc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const LogoContainer = styled(Link)`
  font-size: 3.2rem;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 900;

  & > *:not(:last-child) {
    margin-right: 10px;
  }

  @media screen and (max-width: 376px) {
    font-size: 1.6rem;
  }
`;

const ButtonContainer = styled.div`
  & > *:not(:last-child) {
    margin-right: 3.2rem;
  }

  & > a {
    cursor: pointer;
    color: white;
  }
`;

export { Container, LogoContainer, ButtonContainer };
