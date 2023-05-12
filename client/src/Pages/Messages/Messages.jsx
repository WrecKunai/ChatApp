import React from 'react'
import "./messages.css"
const Messages = ({prop,chk}) => {
  
  return (
  //   <div className={chk?"right ty":"left ty"}> 
  // <div className="div23">
  // <h1 className='h1-msg'>{prop.message}</h1>
  //   <h2>{chk}</h2>
  // </div>
  //   </div>
  chk
  ? (
    <div className="messageContainer justifyEnd">
      {/* <p className="sentText pr-10">{trimmedName}</p> */}
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{prop.message}</p>
      </div>
    </div>
    )
    : (
      <div className="messageContainer justifyStart">
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{prop.message}</p>
        </div>
        {/* <p className="sentText pl-10 ">{user}</p> */}
      </div>
    )


  )
}

export default Messages