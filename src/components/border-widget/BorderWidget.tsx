import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styles } from './BorderWidget.style';
import { Border } from '../../types/main.types';

interface BorderWidgetProps {
  borders: Border[] | null;
}

export const BorderWidget: React.FC<BorderWidgetProps> = ({ borders }) => {
  const navigate = useNavigate();

  const handleBorderCountryClick = (countryCode: string) => {
    navigate(`/country/${countryCode}`);
  };

  if (!borders || borders.length === 0)
    return <Typography>No border countries available.</Typography>;

  return (
    <Box>
      <Typography variant="h6">Border Countries</Typography>
      {borders.map((borderCountry) => (
        <Button
          sx={styles.btn}
          key={borderCountry.countryCode}
          onClick={() => handleBorderCountryClick(borderCountry.countryCode)}
        >
          {borderCountry.commonName}
        </Button>
      ))}
    </Box>
  );
};
