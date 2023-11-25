import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useTheme} from '@mui/material';
import { rows} from "./data"
import HeaderTitle from "../HeaderTitle"
//icons
import LockPersonIcon from '@mui/icons-material/LockPerson';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

function Manage() {
  const theme =useTheme();
const columns = [
    { field: 'id', headerName: 'ID', align:"center",headerAlign:"center"},
    {
      field: 'name',
      headerName: 'Name',
      editable: true,
      align:"center",
      headerAlign:"center"
    },
    {
      field: 'Email',
      headerName: 'Email',
      editable: true,
      flex:1,
      align:"center",
      headerAlign:"center"
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      editable: true,  
      align:"center",
      headerAlign:"center" 
    },
    
    {
      field: 'Phone',
      headerName: 'Phone',
      align:"center",
      flex:1,
      headerAlign:"center"
      
    },
    {
      field: 'Access',
      headerName: 'Access',
      align:"center",
      headerAlign:"center",
      renderCell : ({row:{Access}})=> {
        return (
          <Box sx={{
            p:"4px",
            width:"100px",
            borderRadius:"3px",
            color:"#fff",
            display:"flex",
            justifyContent:"space-evenly",
            alignItems:"center",
            cursor:"pointer",
            backgroundColor:localStorage.getItem("currentMode")==="light" ? 
            
            Access==="Admin" ?theme.palette.primary.light
            :Access==="Manger"?"#f06292":"#1de9b6"

            :Access==="Admin" ?theme.palette.primary.dark
            :Access==="Manger"?"#f44336":"#ab47bc",
            }}>
              {Access==="Admin"?<AdminPanelSettingsOutlinedIcon/>: Access==="User"?<LockPersonIcon fontSize='small'/> 
              :<SecurityOutlinedIcon fontSize='small'/>}
              
           <Typography sx={{fontSize:"14px"}}> {Access}</Typography> 
            </Box>
        )
      }
    }
  ];
  return (
    <div>
       < HeaderTitle title="Manage Team"/>
    <Box sx={{ height: 500, width: '96%' , mx:"auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[7]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  


    </div>
  )
}

export default Manage