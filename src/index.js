import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './view/NavBar';
import SignUpForm from './view/SignUpForm'
import LogInForm from './view/LogInForm'
import SymptomForm from './view/SymptomForm'
import Chat from './view/Chat'
import EditProfileForm from './view/Edit';
import ProfilePage from './view/Profile';
import ChatActivity from './view/ChatActivity';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/login" element={<LogInForm />} />
      <Route path="/symptoms" element={<SymptomForm />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/edit" element={<EditProfileForm />} />
      <Route path="/:id" element={<ProfilePage />} />
      <Route path="/chat-activity/:chatId" element={<ChatActivity/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
