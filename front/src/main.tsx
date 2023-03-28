import React from 'react';
import ReactDOM from 'react-dom/client';
import { MessageSquare, User, UserPlus } from 'react-feather';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Navbar } from './components/Navbar';
import Button from './components/Buttons/Button';
import InviteButton from './components/Buttons/InviteButton';
import ButtonComponent from './components/Buttons/IconButton';
import IconBUtton from './components/Buttons/IconButton';
import Input from './components/Inputs/Input';
import TweetBox from './components/TweetBox';
import Register from './page/register';
import Publication from './components/Publication';
import AvatarPicModif from './components/Register/avatarPicModif';
import Index from './page/Index';
import { LogIn } from './components/LogIn/LogIn';
import Avatar from './page/Avatar';
import Congrats from './page/congrats';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/AvatarPicModif" element={<AvatarPicModif />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Button" element={<Button variant="primary">continue</Button>} />
        <Route
          path="/InviteButton"
          element={<InviteButton onClick={() => console.log('yes')}></InviteButton>}
        />
        <Route path="/Heart" element={<IconBUtton type="heart"></IconBUtton>} />
        <Route
          path="/input"
          element={<Input variant="password" placeholder="Username" />}
        />
        <Route path="/TweetBox" element={<TweetBox />} />
        <Route path="/LogIn" element={<LogIn />} />

        <Route path="/Index" element={<Index />} />

        <Route path="/Publication" element={<Publication />} />
        <Route path="/register" element={<Register />} />
        <Route path="/avatar" element={<Congrats />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
