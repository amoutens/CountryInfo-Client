import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { styles } from './NotFound.style';

const NotFound = () => {
  return (
    <Box
      sx={styles.mainWrapper}
    >
      <Box>
        <Typography variant="h2" sx={{ marginBottom: '20px' }}>
          404 - Page Not Found
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: '20px' }}>
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Link
          to="/"
          style={{
            color: 'rgba(75, 192, 192, 1)',
            textDecoration: 'underline',
            fontSize: '1.2em',
          }}
        >
          Go Back to Home
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
