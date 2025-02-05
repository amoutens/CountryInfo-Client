import { Box, Typography } from '@mui/material';
import { CountryList } from '../../containers/country-list/CountryList';
import { styles } from './MainPage.style';

export const MainPage = () => {
  return (
    <Box>
      <Typography sx={styles.typography} variant="h2">Choose the country</Typography>
      <CountryList />
    </Box>
  );
};
