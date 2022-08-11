import { styled } from '@mui/material/styles';
import { List, ListItem } from '@mui/material';

export const StyledCardList = styled(List)(({ theme }) => ({
  padding: 0,
  backgroundColor: 'transparent',
  width: '100%',
  maxWidth: '100% ',
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '25px',
  flexWrap: 'wrap',

  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: 0,
  backgroundColor: 'transparent',
  width: '100%',
  maxWidth: '23%',

  [theme.breakpoints.down('lg')]: {
    maxWidth: '30%',
  },

  [theme.breakpoints.down('md')]: {
    maxWidth: '40%',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    justifyContent: 'center',
  },
}));
