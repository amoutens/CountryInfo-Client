import { Box, Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CountryList.style.scss';
import { Loader } from '../../components/loader/Loader';
import { styles } from './CountryList.style';
export const CountryList = () => {
  const [countries, setCountries] = useState<
    { countryCode: string; name: string }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleClick = (countryCode: string) => {
    navigate(`/country/${countryCode}`);
  };
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('http://localhost:3000/countries');
        setCountries(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Not found')
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  return (
    <Box className="btn-wrapper">
      {countries.map((country) => (
        <Button
          sx={styles.btn}
          color="primary"
          variant="outlined"
          key={country.countryCode}
          onClick={() => handleClick(country.countryCode)}
        >
          {country.name} ({country.countryCode})
        </Button>
      ))}
    </Box>
  );
};
