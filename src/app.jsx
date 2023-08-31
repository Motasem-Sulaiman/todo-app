import React from 'react';
import Settings from "../src/Context/Settings/index";
import ToDo from "./components/todo/todo.jsx";
import { Route,BrowserRouter,Routes } from 'react-router-dom';
// import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'


import { MantineProvider } from "@mantine/core";
import Form from './components/Form';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Settings>

        <Routes>
          <Route path='/' element={<ToDo />}/>
          <Route path='/settings' element={<Form />}/>
        

        </Routes>
    
      
      </Settings>
    </MantineProvider>
  );
}
