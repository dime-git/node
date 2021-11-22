import React from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter,Routes,Navigate} from "react-router-dom";
import { Login } from './components/Login';
import {Register} from './components/Register';
import {Nav} from './components/Nav';
ReactDOM.render(
<BrowserRouter>
<Nav/>
<Routes>
  <Route path="/" element={<Navigate to= "/login"/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
</Routes>
</BrowserRouter>,
  document.getElementById('root')
);