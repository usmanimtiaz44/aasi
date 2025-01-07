import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { NavLink, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { buttonStyle, listItemStyle } from "./SideNavStyles";
import { AiOutlineAppstore } from "react-icons/ai";
import { ListItemIcon } from "@mui/material";
import { FaClipboardList } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { GrUserWorker } from "react-icons/gr";
import { MdInventory2 } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

const drawerWidth = 240;

const listItems = [
  {
    label: "Dashboard",
    icon: <AiOutlineAppstore style={{ fontSize: "20px" }} />,
    link: "/dashboard",
    name: "dashboard",
  },
  {
    label: "Employee",
    icon: <GrUserWorker style={{ fontSize: "20px" }} />,
    link: "/employee",
    name: "employee",
  },
  {
    label: "Customer",
    icon: <GrUserWorker style={{ fontSize: "20px" }} />,
    link: "/customer",
    name: "customer",
  },
  {
    label: "Products",
    icon: <MdInventory2 style={{ fontSize: "20px" }} />,
    link: "/product",
    name: "product",
  },
  {
    label: "Shipment",
    icon: <FaClipboardList style={{ fontSize: "20px" }} />,
    link: "/shipment",
    name: "shipment",
  },
  {
    label: "Insight",
    icon: <VscGraph style={{ fontSize: "20px" }} />,
    link: "/insight",
    name: "insight",
  },
];

function SideNav(props) {
  const { window } = props;
  const navigate = useNavigate();

  const drawer = (
    <div className="side-nav-outer-rounded ">
      <div
        className="px-3"
        style={{
          backgroundColor: "#f3f4e6",
          height: "100vh",
          borderRadius: "20px",
        }}
      >
        <div
          className="d-flex flex-column justify-content-between py-3 "
          style={{ height: "100%" }}
        >
          <div className="p-3  mx-auto" style={{ width: "70%" }}>
            <img
              width={"100%"}
              className="cursor_pointer"
              src="/aasi_logo.png"
              alt="Logo here"
            />
          </div>
          <div
            className="vertical-scrollable-box"
            style={{
              overflowY: "auto",
              flexGrow: 1,
            }}
          >
            <List className="">
              {listItems?.map((value, i) => (
                <div key={i} className="py-1">
                  <div style={{ backgroundColor: "white", color: "#5d7285" }}>
                    <RenderItem
                      className=""
                      value={value}
                      i={i}
                      style={{ color: "black", borderRadius: "10px" }}
                    />
                  </div>
                </div>
              ))}
            </List>
          </div>
          <div className="">
            <List
              className=" mx-md-4  mt-3"
              style={{
                bottom: "0px",

                borderRadius: "10px",
                backgroundColor: "#f7f7f7",
                marginTop: "auto",
                border: "1px solid black",
              }}
            >
              <ListItem
                onClick={() => navigate("/")}
                disablePadding
                className=" list_text "
                style={{
                  cursor: "pointer",
                }}
              >
                <ListItemText
                  className="  d-flex  mt-auto gap-3 px-3"
                  primary={
                    <Typography
                      className="fw-bold"
                      variant="body2"
                      style={{
                        fontSize: 14,
                        color: "black",
                        cursor: "pointer",
                      }}
                      title="logout"
                    >
                      <IoLogOutOutline size={22} className="me-2" />
                      Logout
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      className=""
      component="nav"
      sx={{
        width: { md: drawerWidth },
        flexShrink: { md: 0 },
        bgcolor: "black",
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            bgcolor: "#FFFFFF",
            color: "black",
            zIndex: { md: 1000, xs: 1200 },
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            bgcolor: "#f3f4e6",
            border: 0,
            color: "black",
            width: drawerWidth,
            zIndex: { md: 1100, xs: 1200 },
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

SideNav.propTypes = {
  window: PropTypes.func,
};

export default SideNav;

const RenderItem = ({ value, i }) => {
  return value.link ? (
    <ListItem
      key={i}
      component={NavLink}
      to={value?.link || ""}
      disablePadding
      sx={listItemStyle}
      className=""
    >
      <ListItemButton className="list-item list_text" sx={{ ...buttonStyle }}>
        <ListItemIcon
          className="myIconClass"
          sx={{ color: "#5d7285", marginRight: -3 }}
        >
          {" "}
          {value.icon}
        </ListItemIcon>
        <ListItemText
          className=""
          primary={
            <Typography
              variant="body2"
              style={{ fontSize: 14, paddingLeft: 0, whiteSpace: "nowrap" }}
              title={value.label}
            >
              {value.label}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  ) : (
    <ListItemButton
      className="list-item list_text no_link_list_item "
      sx={{ ...buttonStyle, "&:hover": { backgroundColor: "#04BCFA" } }}
    >
      <ListItemText
        className=""
        primary={
          <Typography
            variant="body2"
            style={{ fontSize: 14, color: "red", fontWeight: "bold" }}
            title={value.label}
          >
            {value.label}
          </Typography>
        }
      />
    </ListItemButton>
  );
};
