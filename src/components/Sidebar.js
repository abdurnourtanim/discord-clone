import { Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CallIcon from "@material-ui/icons/Call";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HeadsetIcon from "@material-ui/icons/Headset";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import MicIcon from "@material-ui/icons/Mic";
import SettingsIcon from "@material-ui/icons/Settings";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import "../styles/Sidebar.css";
import SidebarChannel from "./SidebarChannel";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  }, []);

  const addChannel = () => {
    const channelName = prompt("Enter new channel name.");
    if (channelName) {
      db.collection("channels").add({
        channelName,
      });
    }
  };

  const logout = () => {
    auth.signOut();
  };

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth < 768) {
        setToggle(false);
      } else {
        setToggle(true);
      }
    });
  }, []);

  return (
    <div className={`sidebar ${toggle ? "sidebar__show" : "sidebar__hide"}`}>
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
          <AddIcon onClick={addChannel} className="sidebar__addChannel" />
        </div>

        <div className="sidebar__channels__list">
          {channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Excellent</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar
          className="sidebar__profile__avatar"
          onClick={logout}
          src={user.photo}
        />
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 6)}</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
