import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import React, { createContext, useState } from "react";
import "../styles/ChatHeader.css";

export const testContext = createContext("this is context api value");

const ChatHeader = ({ channelName }) => {
  const [toggle, setToggle] = useState(true);
  const toggleSidebar = (e) => {
    setToggle(!toggle);
  };

  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <MenuIcon onClick={toggleSidebar} />
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>

      <div className="chatHeader__right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />

        <div className="chatHeader__search">
          <input type="text" placeholder="search" />
          <SearchRoundedIcon />
        </div>

        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
