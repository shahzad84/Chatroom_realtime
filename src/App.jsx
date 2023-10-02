import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import { ChannelContainer,ChannelListContainer,Auth } from './components';
import "./App.css";
import Cookies from 'universal-cookie';
const apiKey = '68avshree48h';
const client = StreamChat.getInstance(apiKey);
const authToken=false;
const App = () => {
  if(!authToken) return <Auth/>
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme="team light" >
        <ChannelListContainer/>
        {/* <ChannelContainer/> */}
        </Chat>
    </div>
  )
}

export default App
