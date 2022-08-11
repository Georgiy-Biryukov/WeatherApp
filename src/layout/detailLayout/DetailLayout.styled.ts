import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import background from 'assets/img/background.jpg';

export const Wrapper = styled(Box)(() => ({
  position: 'relative',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `url(${background})`,
}));

export const StyledMain = styled('main')(() => ({
  position: 'relative',
  padding: '50px 0',
  minHeight: 'calc(100vh)',
}));
