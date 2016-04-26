import React from 'react';

const Messages = ({messages}) => {    
  const messageItems = messages.map(msg => 
    <li key={msg._id}>{msg.message}</li>);
    
  return (
    <ul>
      {messageItems}
    </ul>
  );
};

export default Messages;