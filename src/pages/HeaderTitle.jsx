import React from 'react'
import { useTheme } from "@mui/material";
import { Box, Typography } from '@mui/material';
function HeaderTitle({title}) {
    let theme = useTheme()
  return (
    <Box margin={{left:"10px"}} mb="20px" p="10px">
       <Typography variant="h4" color={theme.palette.info.light}>{title}</Typography>
     </Box>
  )
}

export default HeaderTitle