import List from "@mui/material/List";
import { FC } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import Link from "next/link";

export const SidebarList: FC = () => {
  return (
    <List component="nav">
      <Link href="/">
        <ListItemButton component="a">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Simple" />
        </ListItemButton>
      </Link>
      <Link href="/mutations">
        <ListItemButton component="a">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Mutations" />
        </ListItemButton>
      </Link>
      <Link href="/pagination">
        <ListItemButton component="a">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Pagination" />
        </ListItemButton>
      </Link>
    </List>
  );
};
