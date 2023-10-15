import React, {useEffect,useState} from 'react';
import {NavLink, Outlet} from 'react-router-dom';

import {
   GitHubIcon,
   GmailIcon,
   HamburgerIcon,
   LinkedInIcon
} from '../icons';

export default function Root() {

   const [googleProfileImgUrl, setGoogleProfileImgUrl] = useState("https://lh3.googleusercontent.com/a/AAcHTtejDcSed1sXBD-ZH4EBeClnfuiOrGWlseYMzNr-ws_p=s96-c");
   const [googleProfileImgError, setGoogleProfileImgError] = useState(false);

   useEffect(() => {
      if (googleProfileImgError) {
         console.log("fetching more recent profile photo");
         (async function getGoogleProfilePhoto() {
            const response = await fetch("https://people.googleapis.com/v1/people/108377669288459992131?personFields=photos&key=AIzaSyDnPHA1cB9SRg5qwFsKBW4boyZq-PEQgrk");
            const data = await response.json();
            if (data?.photos?.length>0 && data.photos[0]?.url?.length>0)
               setGoogleProfileImgUrl(data.photos[0].url);
         })();
      }
   },[googleProfileImgError]);

   const setDocHeight = () => document.documentElement.style.setProperty('--doc-height',`${window.innerHeight}px`);
   useEffect(() => {
      window.addEventListener('resize',setDocHeight);
      setDocHeight();
   },[]);

   const setClassByNavLinkStatus:(_:{isActive:boolean, isPending:boolean}) => string =
      ({isActive, isPending}) =>  isActive ? "active" : isPending ? "pending" : "";

   return <div id="app">
      <header>
         <div id="works-section">
            <NavLink to="works" id="works-link" className={setClassByNavLinkStatus}><button id="works-button" className="no-style-button" tabIndex={-1}><HamburgerIcon/></button></NavLink>
            <span id="works-label">works</span>
         </div>
         <div id="profile-section">
            <nav>
               <NavLink to="" className={setClassByNavLinkStatus}>home</NavLink>
               <NavLink to="about" className={setClassByNavLinkStatus}>about</NavLink>
               <NavLink to="resume" className={setClassByNavLinkStatus}>resume</NavLink>
               <NavLink to="transcript" className={setClassByNavLinkStatus}>transcript</NavLink>
            </nav>
            <div id="photo-container">
               <img id="google-photo" src={googleProfileImgUrl} onError={() => setGoogleProfileImgError(true)}/>
               <img id="github-photo" src="https://github.com/PTLux1517.png"/>
               <div><span id="birth-name">Cory Tomlinson</span> <span id="github-username">PTLux1517</span></div>
            </div>
         </div>
      </header>

      <aside>
         <a href="https://www.linkedin.com/in/corytomlinson32/"><LinkedInIcon/></a>
         <a href="https://github.com/PTLux1517"><GitHubIcon/></a>
         <a href="mailto:cory@ptlux1517.mozmail.com"><GmailIcon/></a>
      </aside>


      <Outlet/>


      <footer>
         <div id="copyright-text">&copy; {new Date().getFullYear()} Cory Tomlinson. All rights reserved.</div>
      </footer>
   </div>;
}
