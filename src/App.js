import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {useNavigate, Outlet , useLocation} from 'react-router-dom';




import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import { Avatar,Tooltip } from '@mui/material';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TopNavbar from "./Components/Navbar/TopNavbar.jsx"

import * as styles from '@mui/material/styles';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import getDesignTokens from "./Theme.jsx"

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import TonalityOutlinedIcon from '@mui/icons-material/TonalityOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import Person from "./photo1688900727.jpeg"

import { grey,blue } from '@mui/material/colors';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {

 
  const location = useLocation()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);



  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState(localStorage.getItem("currentMode") ??'dark');
  const them= React.useMemo(() => styles.createTheme(getDesignTokens(mode)), [mode]);
 

  const Array1 = [
    {text:"Dashboard",icon:<HomeOutlinedIcon/>,path:"/"},
    {text:"Manage Team",icon:<PeopleOutlineOutlinedIcon/>,path:"/manage"},
    {text:"Contacte Information",icon:<PersonPinOutlinedIcon/>,path:"/contacte"},
    {text:"Invoices Balances",icon:<EventNoteOutlinedIcon/>,path:"/invoices"},
  ]

  const Array2 = [
    {text:"Profile Form",icon:<PersonOutlinedIcon/>,path:"/profile"},
    {text:"Calendar",icon:<CalendarTodayOutlinedIcon/>,path:"/calendar"},
    {text:"FAQ Pagw",icon:<HelpOutlineOutlinedIcon/>,path:"/faq"},
  ]

  const Array3 = [
    {text:"Bar Chart",icon:<BarChartOutlinedIcon/>,path:"/bar"},
    {text:"Poe Chart",icon:<TonalityOutlinedIcon/>,path:"/poe"},
    {text:"Line Chart",icon:<TimelineOutlinedIcon/>,path:"/line"},
    {text:"Geography",icon:<MapOutlinedIcon/>,path:"/geography"},
  ]
  const navigate = useNavigate()

  return (
   
    <styles.ThemeProvider theme={them}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
     <TopNavbar open={open} setOpen={setOpen} mode={mode} setMode={setMode} />
      <Drawer variant="permanent" open={open}>
        
      {/* DrawerHeader */}
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Avatar alt="Abdelmoniem Hgagy" sx={{mx:"auto", my:open?2:0 , width:open?88:38,height:open?88:38,border:"1px solid gray"}}
              src={Person }          />
                <Typography sx={{fontSize:open? 18 : 0}} align='center'>Abdelmoniem Hgagy</Typography>
                <Typography sx={{fontSize:open? 16 : 0}} align='center' color={theme.palette.info.main}>Admin</Typography>
        <List>
          {Array1.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
               <Tooltip title={open?"":item.text} placement="right">
               <ListItemButton onClick={()=> navigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor : location.pathname === item.path ? (localStorage.getItem("currentMode") === "light" ? blue[300] : grey[700]) : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
          </Tooltip>
             
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Array2.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                 <Tooltip title={open?"":item.text} placement="right">
              <ListItemButton onClick={()=> navigate(item.path)} 
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor : location.pathname === item.path ? (localStorage.getItem("currentMode") === "light" ? blue[300] : grey[700]) : null,

                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Array3.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>

             <Tooltip title={open?"":item.text} placement="right">
                <ListItemButton onClick={()=> navigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor : location.pathname === item.path ? (localStorage.getItem("currentMode") === "light" ? blue[300] : grey[700]) : null,

                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Tooltip>
            
            </ListItem>
          ))}
        </List>
      </Drawer>



      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      <Outlet/>
        
      </Box>


    </Box>
    </styles.ThemeProvider>
  );
}