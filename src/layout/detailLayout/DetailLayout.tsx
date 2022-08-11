import { Container } from '@mui/material';

import { Outlet } from 'react-router-dom';
import { StyledMain, Wrapper } from './DetailLayout.styled';

export const DetailLayout: React.FC = () => {
  return (
    <Wrapper>
      <StyledMain>
        <Container>
          <Outlet />
        </Container>
      </StyledMain>
    </Wrapper>
  );
};
