import React from 'react'
import {Paper, Stack ,Typography,IconButton } from '@mui/material'
import Box from '@mui/material/Box';
import Line from "../Line/Line"
import { useTheme } from '@mui/material/styles';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import {Transactions} from "./data"
function Row2() {
  const theme = useTheme();
  return (
    <Stack direction={'row'} flexWrap={"wrap"} gap={1} sx={{margin:"20px 0"}}>
       
       <Paper sx={{height:"350px",maxWidth:"900px", flexGrow:1} }>
          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Box sx={{padding:"5px 10px"}}>
            <Typography sx={{color:theme.palette.secondary.main,margin:"5px auto",fontSize:"24px", }}>
             Revenue Generated
            </Typography>
         <Typography sx={{fontSize:"20px"}}>
          $65,656,45
         </Typography>
            </Box>
            <Box marginRight={"10px"}>
              <IconButton  sx={{borderRedius:"50%"}}>
              <GetAppOutlinedIcon sx={{margin:"5px",fontSize:"26px",borderRedius:"50%"}} />
              </IconButton>
             
            </Box>
          </Stack>
     
         <Line isDashboard={true}/>

       </Paper>
      
       <Paper sx={{maxHeight:"350px",overflow:"auto",flexGrow:1} }>
        <Paper sx={{ padding:"5px",textAlign:"center",minWidth:"300px"}}>
        <Typography sx={{color:theme.palette.secondary.main, padding:"5px",margin:"5px auto",fontSize:"24px", }}>
             Recent Transation 
         </Typography>
         {Transactions.map((item)=>
          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{padding:"5px"}}>
          <Box>
          <Typography sx={{fontWeight:"600"}}>{item.txId}</Typography>
          <Typography>{item.user} </Typography>
          </Box>
          <Typography textAlign={"center"}>{item.date}</Typography>

          <Typography sx={{backgroundColor:"red" , borderRadius:"5px", padding:"5px"}}>${item.cost}</Typography>

        </Stack>
         )}
       
        </Paper>
       
        

        </Paper>

    </Stack>
  )
}

export default Row2