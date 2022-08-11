import { styled } from '@mui/material/styles';
import { Box, Card, CardContent } from '@mui/material';

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const ContentHolder = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  padding: '50px',
  width: '100%',
}));

export const StyledCard = styled(Card)(() => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'rgba(194, 192, 192, 0.5)',
  boxShadow: '4px 5px 5px 1px rgb(0 0 0 / 30%)',
}));

export const StyledCardContent = styled(CardContent)(() => ({
  borderBottom: '2px solid black',
  marginBottom: '25px',
  paddingBottom: '25px',
}));
