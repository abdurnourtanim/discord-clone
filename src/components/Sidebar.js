import AddIcon from "@material-ui/icons/Add";
import CallIcon from "@material-ui/icons/Call";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import React from "react";
import "../styles/Sidebar.css";
import SidebarChannel from "./SidebarChannel";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Discord</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Channels</h4>
          </div>
          <AddIcon className="sidebar__addChannel" />
        </div>

        <div className="sidebar__channels__list">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>

        <div className="sidebar__voice">
          <SignalCellularAltIcon
            className="sidebar__voiceIcon"
            fontSize="large"
          />
          <div className="sidebar__voiceI">
            <h3>Voice Connected</h3>
            <p>Stream</p>
          </div>

          <div className="sidebar__voiceIcons">
            <InfoOutlinedIcon />
            <CallIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
