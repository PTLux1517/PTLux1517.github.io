import React from 'react';
import ReactDOM from 'react-dom/client';
import {
   createHashRouter,
   createRoutesFromElements,
   Navigate,
   Route,
   RouterProvider
} from 'react-router-dom';

import Root from './routes/root';
import Works from './routes/works';
import Home from './routes/home';
import About from "./routes/about";
import Skills from "./routes/skills";
import Resume from './routes/resume';
import Transcript from './routes/transcript';

import './index.scss';


ReactDOM.createRoot(document.body.appendChild(Object.assign(document.createElement("div"), {id: "root"})))
   .render(
      <React.StrictMode>
         <RouterProvider router={createHashRouter(createRoutesFromElements(
            <Route path="/" element={<Root/>}>
               <Route index element={<Home/>}/>
               <Route path="works" element={<Works/>}/>
               <Route path="about" element={<About/>}/>
               <Route path="skills" element={<Skills/>}/>
               <Route path="resume" element={<Resume/>}/>
               <Route path="transcript" element={<Transcript/>}/>
               <Route path="*" element={<Navigate replace to="/"/>}/>
            </Route>
         ))}/>
      </React.StrictMode>
   );