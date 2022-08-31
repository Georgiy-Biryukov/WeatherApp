import { useParams } from 'react-router-dom';
import { useGetCityByIdQuery } from 'store/weather/Weather-api-slice';

import CardMedia from '@mui/material/CardMedia';
import WindPowerIcon from '@mui/icons-material/WindPower';
import DropIcon from '@mui/icons-material/Opacity';
import Typography from '@mui/material/Typography';
import {
  ContentHolder,
  StyledBox,
  StyledCard,
  StyledCardContent,
} from './WeatherDetail.styled';
import moment from 'moment';

export const WeatherDetail = () => {
  const { id } = useParams();
  const transformId = Number(id?.slice(1));
  const { data, isSuccess } = useGetCityByIdQuery(transformId, {
    refetchOnMountOrArgChange: true,
  });

  console.log(transformId);

  return (
    <StyledCard>
      <ContentHolder>
        <Typography variant="h2">{isSuccess && data.name}</Typography>
        <Typography variant="h4" color="text.secondary">
          {isSuccess && moment(data.dt).format('dddd')}
        </Typography>
        <StyledBox
          sx={{
            flexDirection: 'column',
          }}
        >
          <CardMedia
            sx={{ width: '20%' }}
            component="img"
            image={`http://openweathermap.org/img/wn/${
              data && data.weather[0].icon
            }@2x.png`}
          />
          <Typography variant="h5">
            {isSuccess && data.weather[0].main}
          </Typography>
        </StyledBox>

        <StyledCardContent>
          <Typography variant="h2" color="text.secondary">
            {isSuccess && Math.round(data.main.temp)}°C
          </Typography>
          <Typography variant="h5">
            Feels like {isSuccess && Math.round(data.main.feels_like)}°C
          </Typography>
        </StyledCardContent>
        <StyledBox
          sx={{
            justifyContent: 'space-around',
          }}
        >
          <StyledBox>
            <WindPowerIcon sx={{ marginRight: '10px' }} />
            <Typography variant="h5">
              {isSuccess && data.wind.speed} m/s
            </Typography>
          </StyledBox>
          <StyledBox>
            <DropIcon sx={{ marginRight: '10px' }} />
            <Typography variant="h5">
              {isSuccess && data.main.humidity}%
            </Typography>
          </StyledBox>
        </StyledBox>
      </ContentHolder>
    </StyledCard>
  );
};
