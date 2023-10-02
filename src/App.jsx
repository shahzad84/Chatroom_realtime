import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import { ChannelContainer,ChannelListContainer } from './components';
import Cookies from 'universal-cookie';
const apiKey = '68avshree48h';
const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme="team light" >
        <ChannelListContainer/>
        <ChannelContainer/>
        </Chat>
    </div>
  )
}

export default App
