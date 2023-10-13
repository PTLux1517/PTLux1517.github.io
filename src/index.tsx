import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';

import Root from './routes/root';
import Works from './routes/works';
import Home from './routes/home';
import About from "./routes/about";
import Resume from './routes/resume';
import Transcript from './routes/transcript';

import './index.scss';


ReactDOM.createRoot(document.body.appendChild(Object.assign(document.createElement("div"), {id: "root"}))).render(
   <React.StrictMode>
      <RouterProvider router={createBrowserRouter(createRoutesFromElements(
         <Route path="/" element={<Root/>}>
            <Route index element={<Home/>}/>
            <Route path="works" element={<Works/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="resume" element={<Resume/>}/>
            <Route path="transcript" element={<Transcript/>}/>
         </Route>
      ))}/>
   </React.StrictMode>
);