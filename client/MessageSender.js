import React from 'react';

const MessageSender = ({sendMessage}) => {        
  const submitForm = evt => {
    evt.preventDefault();
    sendMessage(evt.target.elements.message.value);
    evt.target.elements.message.value = '';
  };
  
  return (
    <form onSubmit={submitForm}>
      <input type='text' name='message' />
      <button type='submit'>Send</button>
    </form>
  );
};

export default MessageSender;