import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack ,MenuItem,Button} from '@mui/material';
import { useForm } from "react-hook-form";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useTheme } from "@mui/material";
import HeaderTitle from "../HeaderTitle"
function Profile() {
  //snackBar 
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    handleClick()
    console.log(data)
  }

  const rgeEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i ;
  const rgePhone = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i ;
  


  const data = [
    {
      value: 'Admin',
      label: 'Admin',
    },
    {
      value: 'Manger',
      label: 'Manger',
    },
    {
      value: 'User',
      label: 'User',
    },
  ];
  let theme = useTheme()
  return (
    
    <Box
    onSubmit={handleSubmit(onSubmit)}
    component="form"
    sx={{display:"flex",flexDirection:"column",gap:3,mt:3}}
    noValidate
    autoComplete="off"
  >
         
       < HeaderTitle title="Profile Form"/>


    <Stack direction={"row"} sx={{gap:3}} >
    <TextField  label="First Name" variant="filled"  sx={{flex:"1"}} 
    error={errors.firstName}
    helperText={errors.firstName?"Enter Vailed Name":null} 
    {...register("firstName", { required: true, minLength: 2 })} />


    <TextField  label="Last Name" variant="filled" sx={{flex:"1"}}
    helperText={errors.LastName?"Enter Vailed Name":null} 
      error={errors.LastName} 
      {...register("LastName", { required: true, minLength: 2 })} 
    />
    </Stack>
   

    
    <TextField  label="Email" variant="filled" 
    helperText={errors.email?"Enter Vailed Email":null} 
    error={errors.email}  
    {...register("email",  {required: true ,pattern: rgeEmail })}/>
    
    
    <TextField  label="Contact Number" variant="filled" 
    helperText={errors.number?"Enter Vailed Phone":null} 
    error={errors.number}  
    {...register("number", { pattern: rgePhone })} />
    <TextField  label="Address 1" variant="filled" />
    <TextField  label="Address 2" variant="filled" />

    <TextField
          select
          label="Role"
          defaultValue="User"
          variant="filled"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{textAlign:"right"}}>
          <Button type="submit" variant="contained" sx={{textTransform:"capitalize"}} >create new person</Button>
        </Box>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}   anchorOrigin={{ vertical:"top", horizontal:"right" }}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
        Account successfully created!
        </Alert>
      </Snackbar>
  </Box>
  )
}

export default Profile