import { styled, alpha } from '@mui/material/styles';
import { InputBase, Toolbar, Typography } from '@mui/material';

export const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  color: '#212124',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.7),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.7),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    maxWidth: '300px',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  position: 'absolute',
  right: 0,
  left: 0,
  bottom: '10px',
  textAlign: 'center',
}));
