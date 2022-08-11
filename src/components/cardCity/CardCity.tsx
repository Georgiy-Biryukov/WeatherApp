import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { deleteCity } from 'store/weather/WeatherSlice';
import {
  useLazyUpdateCityByNameQuery,
  useGetCityByIdQuery,
} from 'store/weather/Weather-api-slice';
import { StyledCard, StyledLink } from './CardCity.styled';

interface ICardCity {
  cityId: number;
  index: number;
}

export const CardCity: React.FC<ICardCity> = ({ cityId, index }) => {
  const dispatch = useAppDispatch();
  const [trigger] = useLazyUpdateCityByNameQuery();
  const { isSuccess } = useGetCityByIdQuery(cityId, {
    refetchOnMountOrArgChange: true,
  });

  const city = useAppSelector((state) => state.weatherReducer.cities[index]);

  return (
    <StyledCard>
      <StyledLink to={`/detail/:${isSuccess && city.id}`}>
        <CardMedia
          sx={{ width: 'auto', margin: '0 auto' }}
          component="img"
          height="140"
          image={`http://openweathermap.org/img/wn/${
            city && city.weather[0].icon
          }@2x.png`}
        />
        <CardContent sx={{ padding: '0 15px 10pх' }}>
          <Typography gutterBottom variant="h5">
            {isSuccess && city.name}
          </Typography>
          <Typography
            variant="h2"
            color="text.secondary"
            sx={{ fontSize: '30px' }}
          >
            {Math.round(city && city.main.temp)}°C
          </Typography>
        </CardContent>
      </StyledLink>
      <CardActions sx={{ justifyContent: 'space-around' }}>
        <IconButton
          aria-label="delete"
          onClick={() => dispatch(deleteCity(city && city.id))}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => trigger(city && city.name)}
        >
          <RefreshIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
};
