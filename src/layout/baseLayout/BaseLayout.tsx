import { Container } from '@mui/material';
import { Header } from 'components/header';
import { Outlet } from 'react-router-dom';
import { StyledMain, Wrapper } from './BaseLayout.styled';

export const BaseLayout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <StyledMain>
        <Container>
          <Outlet />
        </Container>
      </StyledMain>
    </Wrapper>
  );
};
