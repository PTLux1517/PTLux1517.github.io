import React from 'react';
import {Link} from 'react-router-dom';

import {SpeechBubbleIcon} from '../icons'

export default function Home() {

   return <main id="home">
      <div id="center-content">
         <SpeechBubbleIcon/>
         <h1>Hey, I'm Cory,</h1>
         <div>a full stack web develeper with an interest in scalable, cloud-based solutions</div>
         <Link className="link" to="works"><button id="projects-button" className="no-style-button" tabIndex={-1}>Projects</button></Link>
      </div>
   </main>;
}
