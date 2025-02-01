import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet, useLocation } from 'react-router-dom';
import { PermanentDrawerRight } from './app/Modules/layout/MasterLayout';
import "./app/Modules/layout/Layout.css";

const drawerWidth = 300;

export default function MiniDrawer() {
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {isLoginPage ? (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Outlet />
        </div>
      ) : (
        <>
          <PermanentDrawerRight />
          <div style={{ height: '100vh' }}>
            <Box sx={{ display: 'flex' }}>
              <CssBaseline />
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  p: 4,
                  marginTop: '1%',
                  marginRight: `${drawerWidth}px`,
                }}
              >
                <Outlet />
              </Box>
            </Box>
          </div>
        </>
      )
      }
    </>
  );
}
