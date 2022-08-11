import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
  color: 'inherit',
}));

export const StyledCard = styled(Card)(() => ({
  width: '100%',
  maxWidth: '300px',
  backgroundColor: 'rgba(194, 192, 192, 0.5)',
  boxShadow: '4px 5px 5px 1px rgba(0, 0, 0, 0.3)',
  cursor: 'pointer',
  textAlign: 'center',
}));
