import React from 'react'
import { Stack , Paper , Box,Typography} from "@mui/material"
import { useTheme } from '@mui/material/styles';
import Poe from "../Poe/Poe"
import Bar from "../Bar/Bar"
import Geo from "../Geography/Geography"
function Row3() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={2} sx={{textAlign:"center"}} >
       <Paper sx={{flexGrow: 1}}>

         <Typography sx={{color:theme.palette.secondary.main , fontSize:"24px",margin:"10px 15px"}}>
           Compaign
         </Typography>
        <Box  width={"400px"} maxHeight={"300px"} sx={{margin:"0 auto"}} >
               <Poe isDashboard={true} />   
        </Box>

       </Paper>
       <Paper sx={{flexGrow:1}}>
         <Typography sx={{color:theme.palette.secondary.main, fontSize:"24px",margin:"10px 15px"}}>
           Sales Quantity 
         </Typography>
         <Box  width={"410px"} maxHeight={"300px"} sx={{margin:"0 auto"}}>
             <Bar isDashboard={true}/>
        </Box>

       </Paper>
       <Paper sx={{flexGrow:1}}>
         <Typography sx={{color:theme.palette.secondary.main,fontSize:"24px",margin:"10px 15px"}}>
           Geography
         </Typography>
         <Box  width={"400px"} maxHeight={"300px"} sx={{margin:"0 auto"}}>
                 <Geo isDashboard={true}/>       
        </Box>
       

       </Paper>

    </Stack>
  )
}

export default Row3