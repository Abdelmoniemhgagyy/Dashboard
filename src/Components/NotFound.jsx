import React from 'react'
import {Box} from "@mui/material"
import Typography from '@mui/material/Typography'
function NotFound() {
  return (
    <Box sx={{display:"flex",justifyContent:"center", alignItems:"center",minHeight:"80vh"}}>
     <Typography variant="h1" color="red">Not Found</Typography>
         
    </Box>
  )
}

export default NotFound