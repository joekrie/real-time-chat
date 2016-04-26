import React from 'react';

const SenderName = ({messages}) => {    
  const messageItems = messages.map(msg => 
    <li key={msg._id}>{msg.message}</li>);
    
  return (
    <input  />
  );
};

export default SenderName;