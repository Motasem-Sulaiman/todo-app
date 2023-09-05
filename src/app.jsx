import React from "react";
import Settings from "../src/Context/Settings/settings";
import LoginProvider from "../src/Context/Settings/context";
import Auth from "../src/components/auth/auth"
import Login from "../src/components/auth/login"
import ToDo from "./components/todo/todo.jsx";
import SignUp from "./components/auth/signup";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import './style.scss'
import "bootstrap/dist/css/bootstrap.min.css";

import { MantineProvider } from "@mantine/core";
import Form from "./components/Form";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
    
        <Settings>
        <LoginProvider>
        
          <Routes>
            <Route path="/" element={<ToDo />} />
            <Route path="/settings" element={<Form />} />
          </Routes>
         
          {/* <Login /> */}
          {/* <Auth>
          
          </Auth>

          <Auth capability="create">
            <div>Users with create access can see this</div>
          </Auth>

          <Auth capability="update">
            <div>Users with update access can see this</div>
          </Auth>

          <Auth capability="delete">
            <div>Users with delete access can see this</div>
          </Auth> */}
           <SignUp/>
          </LoginProvider>
          
        </Settings>
        
 
    </MantineProvider>
  );
}
