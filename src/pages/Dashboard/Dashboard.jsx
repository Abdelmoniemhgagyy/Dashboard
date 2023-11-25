import React from 'react'
import Row1 from "./Row1"
import Row2 from "./Row2"
import Row3 from "./Row3"
import {Button,Box,Stack} from "@mui/material"
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import HeaderTitle from "../HeaderTitle"
function Dashboard() {
  return (
    <div>
         <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
             < HeaderTitle title="Dashboard"/>

             <Box sx={{  mb: 2 }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <GetAppOutlinedIcon/>
            Download Reports
          </Button>
        </Box>
          </Stack>
     
  
    <Row1/>
    <Row2/>
    <Row3/>

    </div>
  )
}

export default Dashboard