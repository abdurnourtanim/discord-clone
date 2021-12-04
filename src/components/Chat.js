import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import GifIcon from "@material-ui/icons/Gif";
import firebase from "firebase/compat/app";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "../features/appSlice";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import "../styles/Chat.css";
import ChatHeader from "./ChatHeader";
import Massage from "./Massage";

const Chat = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [massages, setMassages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("massages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMassages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMassage = (e) => {
    e.preventDefault();
    db.collection("channels").doc(channelId).collection("massages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      massage: input,
      user,
    });
    setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__massages">
        {massages.map((massage) => (
          <Massage
            timestamp={massage.timestamp}
            massage={massage.massage}
            user={massage.user}
          />
        ))}
      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input
            disabled={!channelId}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Massages ${channelName}`}
          />
          <button
            className="chat__inputButton"
            type="submit"
            onClick={sendMassage}
          >
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
