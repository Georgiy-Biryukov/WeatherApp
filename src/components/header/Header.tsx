import React, { useState } from 'react';
import { useLazyGetCityByNameQuery } from '../../store/weather/Weather-api-slice';

import AppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  StyledToolbar,
  StyledTypography,
} from './Header.styled';

export const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [trigger, { isError }] = useLazyGetCityByNameQuery();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      trigger(inputValue);
      setInputValue('');
    }
  };

  const errorMessage = (message: string) => {
    return <StyledTypography sx={{ color: 'red' }}>{message}</StyledTypography>;
  };

  return (
    <AppBar
      position="relative"
      sx={{ background: 'transparent', paddingBottom: '30px' }}
    >
      <StyledToolbar>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={inputValue}
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
        </Search>
      </StyledToolbar>
      {isError && errorMessage('Сity ​​not found')}
    </AppBar>
  );
};
