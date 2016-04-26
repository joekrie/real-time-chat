import React, { Component } from 'react';
import io from 'socket.io-client';
import qwest from 'qwest';
import Messages from './Messages';
import MessageSender from './MessageSender';

export default class ChatClient extends Component {
  constructor(props) {
    super(props);
        
    this.state = {
      messages: []
    };
  }
        
  componentDidMount() {        
    this.socket = io.connect('/');
      
    this.socket.on('new-message', msg => {
      const newMessages = this.state.messages.slice();
      newMessages.push(msg);
      this.setState({messages: newMessages});
    });
        
    qwest.get('/all-messages')
      .then((xhr, resp) => this.setState({messages: resp}));
  }
    
  render() {
    const sendMessage = message => this.socket.emit('new-message', {message});

    return (
      <div>
        <Messages messages={this.state.messages} />
        <MessageSender sendMessage={sendMessage} />
      </div>
    );
  }
}