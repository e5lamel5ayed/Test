import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom"; // ✅ استيراد useNavigate
import "./Layout.css";

const drawerWidth = 300;

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate(); // ✅ استخدام useNavigate

  const user = {
    name: "John Doe",
    avatar: "/public/Ellipse 3.png",
  };

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    navigate("/login"); // ✅ التوجيه إلى صفحة تسجيل الدخول
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        mr: `${drawerWidth}px`,
        backgroundColor: "#FEFEFE",
        boxShadow: "none",
        borderBottom: "1px solid #E0E0E0",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton onClick={handleAvatarClick}>
          <Avatar alt={user.name} src={user.avatar} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              borderRadius: "10px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              width: "250px",
              padding: "8px 0",
            },
          }}
        >
          {/* User Info */}
          <Stack direction="row" alignItems="center" spacing={2} px={2} py={1.5}>
            <Avatar alt={user.name} src={user.avatar} sx={{ width: 40, height: 40 }} />
            <Stack>
              <Typography variant="body1" sx={{ fontWeight: "600" }}>
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                john.doe@example.com
              </Typography>
            </Stack>
          </Stack>

          <Divider sx={{ my: 1 }} />

          {/* Logout Option */}
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="body1" sx={{ fontWeight: "500" }}>
              تسجيل الخروج
            </Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
