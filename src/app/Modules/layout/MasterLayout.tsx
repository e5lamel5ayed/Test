import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header';
import SideBar from './SideBar';
import './Layout.css'

export const PermanentDrawerRight = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <SideBar />
    </Box>
  );
}
