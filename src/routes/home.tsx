import React from 'react';
import {Link} from 'react-router-dom';

import {SpeechBubbleIcon} from '../icons'

export default function Home() {

   return <main id="home">
      <div id="center-content">
         <SpeechBubbleIcon/>
         <h1>Hey, I'm Cory,</h1>
         <div>a full stack web develeper with an interest in scalable, cloud-based solutions</div>
         <button id="projects-button" className="no-style-button" disabled>
            <Link className="link" to="works" target="_self">Projects</Link>
         </button>
      </div>
   </main>;
}
