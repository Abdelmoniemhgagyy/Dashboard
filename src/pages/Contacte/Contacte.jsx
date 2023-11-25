import React from 'react'
import { DataGrid ,GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { rows ,columns} from "./data"
import HeaderTitle from "../HeaderTitle"

function Contacte() {
 
  return (
    <div>
 <Box sx={{ height: 520, width: '96%' , mx:"auto" }}>
 < HeaderTitle title="Contacte Information"/>
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
        
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>

    </div>
  )
}

export default Contacte