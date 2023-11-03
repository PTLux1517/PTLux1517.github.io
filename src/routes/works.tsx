import React,{ReactElement} from 'react';
import Collapsible from "../components/collapsible";
import {
   ASMIcon,
   AWKIcon,
   AWSIcon,
   AWSAPIGatewayIcon,
   AWSAuroraIcon,
   AWSCloudFrontIcon,
   AWSEC2Icon,
   AWSLambdaIcon,
   AWSRoute53Icon,
   AWSS3Icon,
   BlenderIcon,
   BSUIcon,
   CIcon,
   ClinkbaitIcon,
   DockerIcon,
   ExternalLinkIcon,
   GitHubActionsIcon,
   GitHubPagesComboIcon,
   GoIcon,
   ItchIOIcon,
   JavaIcon,
   JavaFXIcon,
   JestIcon,
   JSIcon,
   LeetcodeIcon,
   MySQLIcon,
   PHPIcon,
   PicoCLIIcon,
   PrologIcon,
   ReactIcon,
   RustIcon,
   ScalaIcon,
   SchemeIcon,
   SmalltalkIcon,
   TerraformIcon,
   ThreeJSIcon,
   TypeScriptIcon,
   UnrealIcon,
   VerilogIcon,
   XilinxIcon
} from '../icons';

export default function Works() {

   const toggleActive:React.MouseEventHandler = ({currentTarget}) => currentTarget.classList.toggle("active");
   const addLoaded:React.ReactEventHandler<HTMLDivElement|HTMLImageElement> = ({currentTarget}) => currentTarget.classList.add("loaded");

   const interleaveArray = (arr:any[], x: any) => arr.flatMap(e => [e, x]).slice(0, -1);

   const collapsibleWidth = 1104;

   interface ProjectLink {
      linkText:string,
      url:string
   }

   interface ProjectInfo {
      name:string,
      mainLink?:string,
      gitHubPage:boolean,
      favicon?:ReactElement,
      blurb?:ReactElement,
      iconsDiv?:ReactElement,
      otherLinks?:Array<ProjectLink>,
      images?:Array<{
         frWidth:number,
         url:{
            small:string,
            large:string
         }
      }>
      video?:string
   }

   function render(projectInfo:ProjectInfo):ReactElement {
      return <Collapsible
         buttonContent={<>
            {projectInfo.favicon &&
               projectInfo.favicon
            }
            {projectInfo.mainLink &&
               <a href={projectInfo.mainLink}>{projectInfo.gitHubPage && "/"}{projectInfo.name}<ExternalLinkIcon/></a>
            }
            {projectInfo.blurb &&
               <>
                  {" : "}
                  {projectInfo.blurb}
               </>
            }
         </>}
         innerContent={<>
            {(projectInfo.iconsDiv || projectInfo.otherLinks) &&
               <div className="icons-container">
                  {projectInfo.iconsDiv &&
                     projectInfo.iconsDiv
                  }
                  {projectInfo.otherLinks &&
                     <div>
                        {interleaveArray(
                           projectInfo.otherLinks.map(({linkText,url}) => <a href={url}>{linkText}<ExternalLinkIcon/></a>),
                           <>{" | "}</>
                        )}
                     </div>
                  }
               </div>
            }
            {projectInfo.images && projectInfo.images.map(({frWidth,url:{small,large}}, idx) =>
               <div className="blurred-img"
                    style={{
                       backgroundImage: small ? `url(${small})` : "radial-gradient(circle, gray, whitesmoke)",
                       flexBasis: frWidth*collapsibleWidth - 10
                    }}
                    onLoad={addLoaded}
                    onClick={toggleActive}
               >
                  <img src={large}
                       alt={`${projectInfo.name} ${idx+1}`}
                       loading="lazy"
                       onLoad={addLoaded}
                  />
               </div>
            )}
            {projectInfo.video &&
               <iframe className="demo-video"
                       src={projectInfo.video}
                       title={`${projectInfo.name} Demo`}
                       loading="lazy"
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                       allowFullScreen
               />
            }
         </>}
      />
   }

   //const clinkbaitInfo:ProjectInfo = {
   //   name: "Clinkbait",
   //   mainLink: "https://clinkbait.com",
   //   gitHubPage: false,
   //   favicon: <ClinkbaitIcon/>,
   //   blurb: <>A cocktail recipe app for the home bartender which doubles as a menu for guests</>,
   //   iconsDiv: <div><TypeScriptIcon/><ReactIcon/><JavaIcon/><MySQLIcon/><TerraformIcon/><AWSIcon/>(<AWSCloudFrontIcon/><AWSRoute53Icon/><AWSAPIGatewayIcon/><AWSLambdaIcon/><AWSS3Icon/><AWSAuroraIcon/>)</div>,
   //   images: [
   //      {frWidth: 1/2, url: {small: "https://drive.google.com/uc?export=view&id=11k7y4ZLjou6D4s5vKYvWy2TpwHcF9JUT", large: "https://drive.google.com/uc?export=view&id=1oa8I8mgsPOx2678lyPSNc7giqtDS9B0k"}},
   //      {frWidth: 1/2, url: {small: "https://drive.google.com/uc?export=view&id=1GPuhAXzsIBef7jiOLhSBcY54c7xMQ5Nw", large: "https://drive.google.com/uc?export=view&id=19IJGBciGtOo9bkfhwT2zs7YoFNlCxtj_"}},
   //      {frWidth: 1/3, url: {small: "https://drive.google.com/uc?export=view&id=1E-SOdWAjDAhvQ9EbLNl5v-INRizqo9OR", large: "https://drive.google.com/uc?export=view&id=1wpAF-Ht5i7TMyirU_ZD3QA1hud3bzdzb"}},
   //      {frWidth: 1/3, url: {small: "https://drive.google.com/uc?export=view&id=1Hfxk3ymr_IZBzFXMSNlj7qP7D5g0NyLV", large: "https://drive.google.com/uc?export=view&id=1qOtCk5Jg2_hqLakNRqISfKPXqBlCp2hA"}},
   //      {frWidth: 1/3, url: {small: "https://drive.google.com/uc?export=view&id=1A1p7TBOcLVpuU4PpZ9hP8KccsuALvutF", large: "https://drive.google.com/uc?export=view&id=1DP77vlu0LsVIqcB8oHMGZUkFRSi57cal"}},
   //      {frWidth: 1,   url: {small: "https://drive.google.com/uc?export=view&id=1ZQJxrzpk_iFVVMYrWPZIDeWNkQbFmkeN", large: "https://drive.google.com/uc?export=view&id=1pDajUFTQpc5jxtcw6RDzgdG6nQl4RWtx"}},
   //   ]
   //};

   const clinkbaitInfo:ProjectInfo = {
      name: "Clinkbait",
      mainLink: "https://clinkbait.com",
      gitHubPage: false,
      favicon: <ClinkbaitIcon/>,
      blurb: <>A cocktail recipe app for the home bartender which doubles as a menu for guests</>,
      iconsDiv: <div><TypeScriptIcon/><ReactIcon/><JavaIcon/><MySQLIcon/><TerraformIcon/><AWSIcon/>(<AWSCloudFrontIcon/><AWSRoute53Icon/><AWSAPIGatewayIcon/><AWSLambdaIcon/><AWSS3Icon/><AWSAuroraIcon/>)</div>,
      images: [
         {frWidth: 1/2, url: {small: "", large: "https://drive.google.com/uc?export=view&id=1oa8I8mgsPOx2678lyPSNc7giqtDS9B0k"}},
         {frWidth: 1/2, url: {small: "", large: "https://drive.google.com/uc?export=view&id=19IJGBciGtOo9bkfhwT2zs7YoFNlCxtj_"}},
         {frWidth: 1/3, url: {small: "", large: "https://drive.google.com/uc?export=view&id=1wpAF-Ht5i7TMyirU_ZD3QA1hud3bzdzb"}},
         {frWidth: 1/3, url: {small: "", large: "https://drive.google.com/uc?export=view&id=1qOtCk5Jg2_hqLakNRqISfKPXqBlCp2hA"}},
         {frWidth: 1/3, url: {small: "", large: "https://drive.google.com/uc?export=view&id=1DP77vlu0LsVIqcB8oHMGZUkFRSi57cal"}},
         {frWidth: 1,   url: {small: "", large: "https://drive.google.com/uc?export=view&id=1pDajUFTQpc5jxtcw6RDzgdG6nQl4RWtx"}},
      ]
   };

   const moviloInfo:ProjectInfo = {
      name: "Movilo",
      mainLink: "https://ptlux1517.github.io/Movilo/",
      gitHubPage: true,
      blurb: <>A biomechanics motion capture visualization and analysis tool&emsp;(BSU senior design project)</>,
      iconsDiv: <div><TypeScriptIcon/><ReactIcon/><ThreeJSIcon/><JestIcon/><GitHubActionsIcon/></div>,
      otherLinks: [
         {linkText: "writeup", url: "https://cs481-ekh.github.io/f22-viz-kids/"},
         {linkText: "repo", url: "https://github.com/cs481-ekh/f22-viz-kids"}
      ],
      images: [
         {frWidth: 1/2, url: {small: "", large: "https://drive.google.com/uc?export=view&id=19m_-A74W_B1zWyDcxXbmMVJJLT0x8sFD"}},
         {frWidth: 1/2, url: {small: "", large: "https://drive.google.com/uc?export=view&id=1kjyfqBLoUxYX303JKAFAjzyq7a005GD0"}},
         {frWidth: 1/2, url: {small: "", large: "https://drive.google.com/uc?export=view&id=1jPBvFOVrIarbKkUwLiE6jshbl6JIe9n0"}},
         {frWidth: 1/2, url: {small: "", large: "https://drive.google.com/uc?export=view&id=1RSxZ0iQ2DjIVMu_cO2y1gbCkNLq3ANJw"}},
      ]
   };

   const code128ABarcodeEncoderInfo:ProjectInfo = {
      name: "code-128a-barcode-encoder",
      mainLink: "https://ptlux1517.github.io/code-128a-barcode-encoder/",
      gitHubPage: true,
      blurb: <>A barcode data encoder for the Code 128 A character set</>,
      iconsDiv: <div><JSIcon/></div>,
      otherLinks: [
         {linkText: "repo", url: "https://github.com/PTLux1517/code-128a-barcode-encoder"}
      ],
      images: [
         {frWidth: 1/2, url: {small: "", large: "https://drive.google.com/uc?export=view&id=1PtcxbyiL__HICoJHmExH07_cCWjkpfzp"}},
         {frWidth: 1/2, url: {small: "", large: "https://drive.google.com/uc?export=view&id=1BLiDhfQIOJe1xFvyIoYm27519QIZNaoj"}},
      ]
   };

   const projectHorizonInfo:ProjectInfo = {
      name: "Project Horizon",
      mainLink: "https://ptlux1517.itch.io/project-horizon",
      gitHubPage: false,
      blurb: <>third-person mech combat</>,
      images: [
         {frWidth: 1/2, url: {small: "", large: "https://img.itch.zone/aW1nLzYyNzc2MTgucG5n/original/gWI0R6.png"}},
         {frWidth: 1/2, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NDI5LnBuZw==/original/OtCIYm.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NDEzLnBuZw==/original/KAquB5.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0MzE2LnBuZw==/original/%2BHTqV%2B.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NTU4LnBuZw==/original/o%2B43tF.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NTU0LnBuZw==/original/wXxS60.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NTUwLnBuZw==/original/XEf3ss.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0MjkyLnBuZw==/original/PMHw0U.png"}}
      ],
      video: "https://www.youtube.com/embed/AdHmx18_ZNc"
   };

   const sunsOutGunsOutInfo:ProjectInfo = {
      name: "Sun's Out Guns Out!",
      mainLink: "https://ptlux1517.itch.io/suns-out-guns-out",
      gitHubPage: false,
      blurb: <>low-poly runner</>,
      images: [
         {frWidth: 1/2, url: {small: "", large: "https://img.itch.zone/aW1nLzY0MDgzMzgucG5n/original/4oJUDF.png"}},
         {frWidth: 1/2, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2MzYxLnBuZw==/original/FaK%2BQX.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2MzM4LnBuZw==/original/AD%2FgnL.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2MzY2LnBuZw==/original/B7IGpq.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2Mzc0LnBuZw==/original/rrUhAL.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2NDI3LnBuZw==/original/%2FT7kX8.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2NDMzLnBuZw==/original/ly3ZG5.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2NDA1LnBuZw==/original/bzU%2BLF.png"}},
      ],
      video: "https://www.youtube.com/embed/Z7R8HRskiFw"
   };

   const icarusInfo:ProjectInfo = {
      name: "Icarus",
      mainLink: "https://ptlux1517.itch.io/icarus",
      gitHubPage: false,
      blurb: <>dungeon/maze crawler with flight</>,
      images: [
         {frWidth: 1/2, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3OTY0LnBuZw==/original/BG7%2Bm8.png"}},
         {frWidth: 1/2, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NDk1LnBuZw==/original/KR%2FODw.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NDYwLnBuZw==/original/t845d8.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NTI4LnBuZw==/original/OXG%2BCD.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NDQ5LnBuZw==/original/BlAxW7.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NTE1LnBuZw==/original/GJAhjs.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NTIxLnBuZw==/original/iFPRLd.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NTc5LnBuZw==/original/a%2FC0Ow.png"}},
      ],
      video: "https://www.youtube.com/embed/dzEwrDTMOtI"
   };

   const portalHunterInfo:ProjectInfo = {
      name: "Portal Hunter",
      mainLink: "https://ptlux1517.itch.io/portal-hunter",
      gitHubPage: false,
      blurb: <>dungeon crawler with puzzles</>,
      images: [
         {frWidth: 1/2, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5Njg5LnBuZw==/original/2o0OYt.png"}},
         {frWidth: 1/2, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NjkwLnBuZw==/original/xpCJnd.png"}},
         {frWidth: 1/2, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzU3LnBuZw==/original/oYGR0x.png"}},
         {frWidth: 1/2, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzQ4LnBuZw==/original/xVPl94.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzYyLnBuZw==/original/yo7MZ%2F.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzA3LnBuZw==/original/5IhAVH.png"}},
         {frWidth: 1/3, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzE0LnBuZw==/original/PQgro8.png"}},
      ],
      video: "https://www.youtube.com/embed/qGv7wtGdXeM"
   };

   const asteroidEscapeInfo:ProjectInfo = {
      name: "Asteroid Escape",
      mainLink: "https://ptlux1517.itch.io/asteroid-escape",
      gitHubPage: false,
      blurb: <>space flight survival</>,
      images: [
         {frWidth: 1/2, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA0NjQ5OC81OTgxMzY0LnBuZw==/original/N8DyNS.png"}},
         {frWidth: 1/2, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA0NjQ5OC81OTgxNDE1LnBuZw==/original/ZRp4ZB.png"}},
         {frWidth: 1/2, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA0NjQ5OC81OTgxNDQ3LnBuZw==/original/LOVxb8.png"}},
         {frWidth: 1/2, url: {small: "", large: "https://img.itch.zone/aW1hZ2UvMTA0NjQ5OC81OTgxNDU2LnBuZw==/original/wApqIu.png"}},
      ],
      video: "https://www.youtube.com/embed/TtBE7kOhu-c"
   };

   return <main id="works"><div><div>
      <h1>Public Works</h1>

      <div className="spacer"><span className="h2-bg"><h2>
         Projects
      </h2></span></div>
      {render(clinkbaitInfo)}

      <div className="spacer"><span className="text-icon-span h2-bg"><h2 className="no-underline">
         GitHub Pages
      </h2><GitHubPagesComboIcon/></span></div>
      {render(moviloInfo)}
      {render(code128ABarcodeEncoderInfo)}

      <div className="spacer"><span className="text-icon-span h2-bg"><h2 className="no-underline">
         Games
      </h2><ItchIOIcon/><UnrealIcon/><BlenderIcon/></span></div>
      <div><a href="https://ptlux1517.itch.io/">itch.io creator homepage<ExternalLinkIcon/></a></div><br/>
      {render(projectHorizonInfo)}
      {render(sunsOutGunsOutInfo)}
      {render(icarusInfo)}
      {render(portalHunterInfo)}
      {render(asteroidEscapeInfo)}

      <div className="spacer"><span className="text-icon-span h2-bg"><h2 className="no-underline">
         Leetcode
      </h2><LeetcodeIcon/></span></div>
      <span className="text-icon-span"><ScalaIcon/><a href="https://github.com/PTLux1517/leetcode/tree/main/src/main/scala/com/github/ptlux1517/leetcode">Scala repo<ExternalLinkIcon/></a></span>

      <hr/>
      <span className="text-icon-span"><h1>Private Works</h1><BSUIcon/></span>

      <div className="spacer"><span className="h2-bg"><h2>
         Large Class Projects
      </h2></span></div>
      <ul>
         <li><span className="course">[Distributed Systems]</span> Distributed UUID Service (<a href="https://drive.google.com/file/d/11BraIymZ1J05fdrn4NM6JouudOxm--yY/view?t=3m2s">demo video<ExternalLinkIcon/></a>) <JavaIcon/><PicoCLIIcon/><DockerIcon/><AWSEC2Icon></AWSEC2Icon></li>
         <li><span className="course">[Distributed Systems]</span> Chat Server (<a href="https://drive.google.com/file/d/1I2BlwTOQ5t-fSL1uic-K6A6eUhBS0agJ/view?usp=sharing">demo video<ExternalLinkIcon/></a>) <JavaIcon/></li>
         <li><span className="course">[Databases]</span> Treasure Valley Library Management System <JavaIcon/><MySQLIcon/><JavaFXIcon/></li>
         <li><span className="course">[Programming Languages]</span> Interpreter <JavaIcon/></li>
         <li><span className="course">[Data Structures]</span> B-Tree Implementation (for use on disk)</li>
         <li className="continuation"> and Human Genome Length-k DNA Subsequence Frequency Analyzer <JavaIcon/></li>
      </ul>

      <div className="spacer"><span className="h2-bg"><h2>
         Midsize Class Projects
      </h2></span></div>
      <ul>
         <li><span className="course">[Operating Systems]</span> Keyboard Device Driver <CIcon/></li>
         <li><span className="course">[Operating Systems]</span> User-Level Thread Library <CIcon/></li>
         <li><span className="course">[Operating Systems]</span> Multi-Threaded Web Server (bounded buffer problem) <CIcon/></li>
         <li><span className="course">[Operating Systems]</span> Page Fault Handler <CIcon/></li>
         <li><span className="course">[Operating Systems]</span> Buddy System Memory Allocator <CIcon/></li>
         <li><span className="course">[Operating Systems]</span> Lottery Scheduler <CIcon/></li>
         <li><span className="course">[Web Development]</span> Blogging Engine (<a href="https://drive.google.com/file/d/1BiPrF1FxNB2DEjuxYXh-nlAD04TJRm5K/view?usp=sharing">demo video<ExternalLinkIcon/></a>) <PHPIcon/><JSIcon/></li>
         <li><span className="course">[Theory of Computation]</span> Recursive Descent RegEx Parser <JavaIcon/></li>
         <li><span className="course">[Theory of Computation]</span> NFA to DFA Converter <JavaIcon/></li>
         <li><span className="course">[Algorithms]</span> Activity Node to Event Node Graph Converter with Critical Path Info <JavaIcon/></li>
         <li><span className="course">[Intro to Sys Programming]</span> Implementing the cat, grep, wc, sort, ps Commands <CIcon/></li>
         <li><span className="course">[Software Engineering]</span> GitHub Bot <JSIcon/></li>
         <li><span className="course">[Software Engineering]</span> Open source mod: added toggleable notebook lines to <a href="https://www.jedit.org/">jEdit<ExternalLinkIcon/></a> (<a href="https://drive.google.com/file/d/1IcczM9aLzmzkS_g4MNrW0IJp3jjvpiBH/view">demo video<ExternalLinkIcon/></a>) <JavaIcon/></li>
         <li className="continuation">(jEdit v5.6.0 consists of ~0.6K Java files and ~124 KLOC without comments)</li>
      </ul>

      <div className="spacer"><span className="h2-bg"><h2>
         Small Class Projects
      </h2></span></div>
      <ul>
         <li><span className="course">[Software Engineering]</span> Open source mod: added name to <a href="https://github.com/mucommander/mucommander">muCommander<ExternalLinkIcon/></a> splash screen (<a href="https://drive.google.com/file/d/1Xf05jkvP2iEcu3V4H0urLEi5VIqkcvwy/view">demo video<ExternalLinkIcon/></a>) <JavaIcon/></li>
         <li className="continuation">(muCommander v0.9.7-1 consists of ~1.7K Java files and ~166 KLOC without comments)</li>
         <li><span className="course">[Algorithms]</span> 0-1 Knapsack DP Problem <JavaIcon/></li>
         <li><span className="course">[Algorithms]</span> Knight's Tour Problem <JavaIcon/></li>
         <li><span className="course">[Operating Systems]</span> Character Replacement Device Driver <CIcon/></li>
         <li><span className="course">[Operating Systems]</span> Parallel Mergesort <CIcon/></li>
         <li><span className="course">[Theory of Computation]</span> DFA <JavaIcon/></li>
         <li><span className="course">[Programming Languages]</span> .xlsx to .html Converter <AWKIcon/></li>
         <li><span className="course">[Programming Languages]</span> Meeting Participant Availability Tool <PrologIcon/></li>
         <li><span className="course">[Programming Languages]</span> Tree Search and Replace <SchemeIcon/></li>
         <li><span className="course">[Programming Languages]</span> Simple Banking System <SmalltalkIcon/><GoIcon/></li>
         <li><span className="course">[Programming Languages]</span> Cache <RustIcon/></li>
         <li><span className="course">[Data Structures]</span> HashTable Implementation <JavaIcon/></li>
         <li><span className="course">[Data Structures]</span> Round Robin Scheduler with Max Heap <JavaIcon/></li>
      </ul>

      <div className="spacer"><span className="h2-bg"><h2>Hardware Class Projects</h2></span></div>
      <ul>
         <li><span className="course">[Microprocessors]</span> Robotic Arm Actuation using Pulse Width Modulation with 7-Segment Angle Display <CIcon/><ASMIcon/></li>
         <li><span className="course">[Digital Systems]</span> Simon Game <XilinxIcon/><VerilogIcon/></li>
      </ul>
   </div></div></main>;
}
