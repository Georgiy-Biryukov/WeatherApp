import * as React from 'react';
import { useAppSelector } from 'store/hooks';
import { CardCity } from 'components/cardCity/CardCity';
import { StyledCardList, StyledListItem } from './CardCityList.styled';

export const CardCityList: React.FC = () => {
  const selector = useAppSelector((state) => state.weatherReducer.cities);

  return (
    <StyledCardList>
      {selector.length > 0 &&
        selector.map((city, index: number) => {
          return (
            <StyledListItem key={city.id}>
              <CardCity cityId={city.id} index={index} />
            </StyledListItem>
          );
        })}
    </StyledCardList>
  );
};
