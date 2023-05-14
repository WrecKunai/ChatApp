import React from "react";
import "./messages.css";
const Messages = ({ prop, chk }) => {
  return chk ? (
    <div className="messageContainer justifyEnd">
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{prop.message}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{prop.message}</p>
      </div>
    </div>
  );
};

export default Messages;
