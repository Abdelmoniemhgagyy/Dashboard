import {  Stack } from '@mui/material'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import TrafficIcon from "@mui/icons-material/Traffic";
import {data1,data2,data3,data4} from "./data"

import { useTheme } from '@mui/material/styles';
import React from 'react'
import Card from "./card"
function Row1() {
  const theme = useTheme();

  console.log(theme.palette.divider.dark)

  return (
    <Stack direction={"row"} sx={{display:"flex",justifyContent:{xs:"center",sm:"space-between"},flexWrap:"wrap",gap:1,margin:"30px 0 0 0"}}  >
       <Card data={data1} scheme={"nivo"} increase="+!4" icon={<MailOutlineOutlinedIcon  sx={{ color: theme.palette.secondary.main }}/>} count={"12,645"} title={"Emails Sent"}/>
       <Card data={data2} scheme={"category10"} increase="+20" icon={<PersonAddOutlinedIcon sx={{ color: theme.palette.secondary.main }}/>} count={"32,645"} title={"New Clients"}/>
       <Card data={data3} scheme={"accent"} increase="+15" icon={<PointOfSaleIcon sx={{ color: theme.palette.secondary.main }} />} count={"431,225"} title={"Sales obtained"}/>
       <Card data={data4} scheme={"dark2"} increase="+17" icon={<TrafficIcon sx={{ color: theme.palette.secondary.main }} />}  count={"1,611,225"} title={"Traffic Received"}/>
    </Stack>
  )
}

export default Row1