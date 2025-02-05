import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BorderWidget } from '../../components/border-widget/BorderWidget';
import { PopulationChart } from '../../components/population-chart/PopulationChart';
import './CountryDetails.style.scss';
import type { CountryDetailedInfo } from '../../types/main.types.ts';
import { Loader } from '../../components/loader/Loader';
import { styles } from './CountryDetails.style';
export const CountryDetails = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const [country, setCountry] = useState<CountryDetailedInfo>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `http://localhost:3000/countries/${countryCode}`,
        );
        setCountry(response.data);
      } catch (err) {
        navigate('/404')
        setError(err instanceof Error ? err.message : 'Not found')
      } finally {
        setLoading(false);
      }
    };

    if (countryCode) {
      fetchCountry();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode]);

  if (loading) return <Loader />;
  if (error) return <Typography>{error}</Typography>;
  if (!country) return <Typography>No country data found</Typography>;

  const handleBack = () => {
    navigate('/');
  };
  return (
    <Box className="country-container">
      <Box className="country-details">
        <Box className="country-header">
          <Box className="flag-container">
            {country.flagData && (
              <img src={country.flagData} alt={`Flag of ${country.country.name}`} />
            )}
          </Box>

          <Box className="country-info">
            <Typography variant="h3">{country.country.name}</Typography>
            <Typography>Country Code: {country.country.countryCode}</Typography>
            <BorderWidget borders={country.countryInfo} />
          </Box>
        </Box>

        <Box className="population-chart">
          <PopulationChart populationData={country.populationData} />
        </Box>

        <Box className="back-button">
          <Button sx={styles.btn} variant='contained' onClick={handleBack}>Go Back To All Countries</Button>
        </Box>
      </Box>
    </Box>
  );
};
