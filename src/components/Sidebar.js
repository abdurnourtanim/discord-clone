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
import classes from "../styles/Sidebar.module.css";
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
    <div
      className={`${classes.sidebar} ${
        toggle ? classes.sidebar__show : classes.sidebar__show
      }`}
    >
      <div className={classes.sidebar__top}>
        <h3>Discord</h3>
        <ExpandMoreIcon />
      </div>

      <div className={classes.sidebar__channels}>
        <div className={classes.sidebar__channelsHeader}>
          <div className={classes.sidebar__header}>
            <ExpandMoreIcon />
            <h4>Channels</h4>
          </div>
          <AddIcon
            onClick={addChannel}
            className={classes.sidebar__addChannel}
          />
        </div>

        <div className={classes.sidebar__channels__list}>
          {channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>

      <div className={classes.sidebar__voice}>
        <SignalCellularAltIcon
          className={classes.sidebar__voiceIcon}
          fontSize="large"
        />
        <div className={classes.sidebar__voiceInfo}>
          <h3>Voice Connected</h3>
          <p>Excellent</p>
        </div>

        <div className={classes.sidebar__voiceIcons}>
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className={classes.sidebar__profile}>
        <Avatar
          className={classes.sidebar__profile__avatar}
          onClick={logout}
          src={user.photo}
        />
        <div className={classes.sidebar__profileInfo}>
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 6)}</p>
        </div>
        <div className={classes.sidebar__profileIcons}>
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
