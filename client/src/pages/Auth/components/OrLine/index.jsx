import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default () => {
  return (
    <Box
          sx={{
            padding: '10px 0',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
    >
      <Box sx={{
        border: '1px solid #DDDFE2',
        width: '45%'
      }}></Box>
      <Box>or</Box>
      <Box sx={{
        border: '1px solid #DDDFE2',
        width: '45%'
      }}></Box>
    </Box>
  )
}
