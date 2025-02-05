import { Box, CircularProgress } from '@mui/material'

export const Loader = () => {
  return (
    <Box className='loader'>
      <CircularProgress size={50} />
    </Box>
  )
}
