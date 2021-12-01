import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import GifIcon from "@material-ui/icons/Gif";
import React from "react";
import "../styles/Chat.css";
import ChatHeader from "./ChatHeader";
import Massage from "./Massage";

const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />

      <div className="chat__massages">
        <Massage />
        <Massage />
        <Massage />
        <Massage />
      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input placeholder="Massages #test channels" />
          <button className="chat__inputButton" type="submit">
            Send Massage
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
