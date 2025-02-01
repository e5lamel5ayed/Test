import { useNavigate, useLocation } from "react-router-dom";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import { Drawer } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Layout.css";

const drawerWidth = 300;

export default function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    { text: "الطالب", link: "/student", icon: <SchoolOutlinedIcon /> },
    { text: "الرساله", link: "/message", icon: <DescriptionOutlinedIcon /> },
    { text: "المشرفون", link: "/supervisors", icon: <PeopleOutlineOutlinedIcon /> },
    { text: "المحكمين", link: "/judges", icon: <ShieldOutlinedIcon /> },
    { text: "التقارير", link: "/reports", icon: <BarChartOutlinedIcon /> },
    { text: "المناقشه والحكم", link: "/discussion", icon: <GavelOutlinedIcon /> },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <div className="container text-white d-flex justify-content-end my-3">
        <div className="d-flex align-items-center gap-3">
          <h1 className="fs-4 font-bold">الدراسات العليا</h1>
          <img
            src="/Ellipse 5.png"
            alt="Logo"
            className="h-12 w-12 rounded-full"
          />
        </div>
      </div>
      <Divider sx={{ backgroundColor: "#fff" }} />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.link)}
              sx={{
                minHeight: 60,
                px: 2.5,
                textAlign: "end",
              }}
              className={`menu-item ${
                location.pathname === item.link ? "active-item" : ""
              }`}
            >
              <ListItemText
                primary={item.text}
                sx={{
                  marginRight: "10px",
                }}
                className="menu-text" 
              />
              <ListItemIcon 
              className="menu-icon"
              >
                {item.icon}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "#fff" }} />

      <ListItem>
        <ListItemButton
          onClick={() => navigate("")}
          sx={{
            minHeight: 70,
            px: 2.5,
            textAlign: "end",
            backgroundColor: location.pathname === "" ? "#fdfdfe" : "transparent",
            color: location.pathname === "" ? "#0F1016" : "inherit",
            borderRadius: location.pathname === "" ? "48px" : "0",
            transition: "all 0.3s ease",
          }} 

        >
          <ListItemText
            primary="الاعدادات"
            sx={{
              marginRight: "10px",
              fontWeight: location.pathname === "" ? "bold" : "normal",
            }}
          />
          <ListItemIcon
            sx={{
              color: location.pathname === "" ? "#0F1016" : "inherit",
            }}
          >
            <SettingsIcon />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </Drawer>
  );
}
