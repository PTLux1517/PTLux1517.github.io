import React from 'react';
import Collapsible from "../components/collapsible";
import {
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
   GitHubActionsIcon,
   GitHubPagesComboIcon,
   GoIcon,
   ItchIOIcon,
   JavaIcon,
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

   return <main id="works"><div><div>
      <h1>Public Works</h1>

      <h2>Projects</h2>
      <Collapsible
         buttonContent={<>
            <ClinkbaitIcon/><a href="https://clinkbait.com">Clinkbait</a> : A cocktail recipe app for the home bartender which doubles as a menu for guests
         </>}
         innerContent={<>
            <div style={{minWidth: "100%"}}>
               <TypeScriptIcon/><ReactIcon/><JavaIcon/><MySQLIcon/><TerraformIcon/><AWSIcon/>(<AWSCloudFrontIcon/><AWSRoute53Icon/><AWSAPIGatewayIcon/><AWSLambdaIcon/><AWSS3Icon/><AWSAuroraIcon/>)
            </div>
            <img src="https://drive.google.com/uc?export=view&id=1gnK-z1AdkdI6srUh8mZolJpk7JXOLDOe" onClick={toggleActive} style={{minWidth: "50%"}}/>
            <img src="https://drive.google.com/uc?export=view&id=1cxxBFs7wU2_W_jqrec60r3Enn_Qa7Opo" onClick={toggleActive}/>
            <img src="https://drive.google.com/uc?export=view&id=11zck80LwXeIbMTp0KjG9FXDCdxTthw7_" onClick={toggleActive}/>
            <img src="https://drive.google.com/uc?export=view&id=16ZV9XIUVh2r1kIWZa1f9umQpQaMs4Uo5" onClick={toggleActive}/>
            <img src="https://drive.google.com/uc?export=view&id=1EUjgHQ-Q3PE03gaCRi7Iw_58H9pjcViI" onClick={toggleActive}/>
            <img src="https://drive.google.com/uc?export=view&id=1sBrg1vEi3sPibxlh5eapbEFVJXgnipPo" onClick={toggleActive}/>
         </>}
      />

      <span className="text-icon-span"><h2 className="no-underline">GitHub Pages</h2><GitHubPagesComboIcon/></span>
      <Collapsible
         buttonContent={<>
            <a href="https://ptlux1517.github.io/Movilo/">/Movilo</a> : A biomechanics motion capture visualization and analysis tool&emsp;(BSU senior design project)
         </>}
         innerContent={<>
            <div style={{minWidth: "50%"}}>
               <TypeScriptIcon/><ReactIcon/><ThreeJSIcon/><JestIcon/><GitHubActionsIcon/>
            </div>
            <div>
               <a href="https://cs481-ekh.github.io/f22-viz-kids/"> writeup</a>{" | "}
               <a href="https://github.com/cs481-ekh/f22-viz-kids">repo</a>
            </div>
            <img src="https://drive.google.com/uc?export=view&id=19m_-A74W_B1zWyDcxXbmMVJJLT0x8sFD" onClick={toggleActive} style={{minWidth: "50%"}}/>
            <img src="https://drive.google.com/uc?export=view&id=1kjyfqBLoUxYX303JKAFAjzyq7a005GD0" onClick={toggleActive}/>
            <img src="https://drive.google.com/uc?export=view&id=1jPBvFOVrIarbKkUwLiE6jshbl6JIe9n0" onClick={toggleActive} style={{minWidth: "50%"}}/>
            <img src="https://drive.google.com/uc?export=view&id=1RSxZ0iQ2DjIVMu_cO2y1gbCkNLq3ANJw" onClick={toggleActive}/>
         </>}
      />
      <Collapsible
         buttonContent={<>
            <a href="https://ptlux1517.github.io/code-128a-barcode-encoder/">/code-128a-barcode-encoder</a> : A barcode data encoder for the Code 128 A character set
         </>}
         innerContent={<>
            <div style={{minWidth: "80%"}}>
               <JSIcon/>
            </div>
            <div>
               <a href="https://github.com/PTLux1517/code-128a-barcode-encoder">repo</a>
            </div>
            <img src="https://drive.google.com/uc?export=view&id=1PtcxbyiL__HICoJHmExH07_cCWjkpfzp" onClick={toggleActive}/>
            <img src="https://drive.google.com/uc?export=view&id=1BLiDhfQIOJe1xFvyIoYm27519QIZNaoj" onClick={toggleActive} style={{minWidth: "54%"}}/>
         </>}
      />

      <span className="text-icon-span"><h2 className="no-underline">Games</h2><ItchIOIcon/><UnrealIcon/><BlenderIcon/></span>
      <div><a href="https://ptlux1517.itch.io/">itch.io creator homepage</a></div><br/>
      <Collapsible
         buttonContent={<>
            <a href="https://ptlux1517.itch.io/project-horizon">Project Horizon</a> : third-person mech combat
         </>}
         innerContent={<>
            <img src="https://img.itch.zone/aW1nLzYyNzc2MTgucG5n/original/gWI0R6.png" alt="Project Horizon game theme" onClick={toggleActive} style={{minWidth: "50%"}}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NDI5LnBuZw==/original/OtCIYm.png" alt="Project Horizon gameplay 1" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NDEzLnBuZw==/original/KAquB5.png" alt="Project Horizon gameplay 2" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0MzE2LnBuZw==/original/%2BHTqV%2B.png" alt="Project Horizon gameplay 3" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NTU4LnBuZw==/original/o%2B43tF.png" alt="Project Horizon gameplay 4" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NTU0LnBuZw==/original/wXxS60.png" alt="Project Horizon gameplay 5" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NTUwLnBuZw==/original/XEf3ss.png" alt="Project Horizon gameplay 6" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0MjkyLnBuZw==/original/PMHw0U.png" alt="Project Horizon gameplay 7" onClick={toggleActive}/>
            <iframe className="game-demo-video" src="https://www.youtube.com/embed/AdHmx18_ZNc" title="Project Horizon Gameplay Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
         </>}
      />
      <Collapsible
         buttonContent={<>
            <a href="https://ptlux1517.itch.io/suns-out-guns-out">Sun's Out Guns Out!</a> : low-poly runner
         </>}
         innerContent={<>
            <img src="https://img.itch.zone/aW1nLzY0MDgzMzgucG5n/original/4oJUDF.png" alt="Sun's Out Guns Out game theme" onClick={toggleActive} style={{minWidth: "50%"}}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2MzYxLnBuZw==/original/FaK%2BQX.png" alt="Sun's Out Guns Out gameplay 1" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2MzM4LnBuZw==/original/AD%2FgnL.png" alt="Sun's Out Guns Out gameplay 2" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2MzY2LnBuZw==/original/B7IGpq.png" alt="Sun's Out Guns Out gameplay 3" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2Mzc0LnBuZw==/original/rrUhAL.png" alt="Sun's Out Guns Out gameplay 4" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2NDI3LnBuZw==/original/%2FT7kX8.png" alt="Sun's Out Guns Out gameplay 5" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2NDMzLnBuZw==/original/ly3ZG5.png" alt="Sun's Out Guns Out gameplay 6" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2NDA1LnBuZw==/original/bzU%2BLF.png" alt="Sun's Out Guns Out gameplay 7" onClick={toggleActive}/>
            <iframe className="game-demo-video" src="https://www.youtube.com/embed/Z7R8HRskiFw" title="Sun&#39;s Out Guns Out Gameplay Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
         </>}
      />
      <Collapsible
         buttonContent={<>
            <a href="https://ptlux1517.itch.io/icarus">Icarus</a> : dungeon/maze crawler with flight
         </>}
         innerContent={<>
            <img src="https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3OTY0LnBuZw==/original/BG7%2Bm8.png" alt="Icarus game theme" onClick={toggleActive} style={{minWidth: "50%"}}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NDk1LnBuZw==/original/KR%2FODw.png" alt="Icarus gameplay 1" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NDYwLnBuZw==/original/t845d8.png" alt="Icarus gameplay 2" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NTI4LnBuZw==/original/OXG%2BCD.png" alt="Icarus gameplay 3" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NDQ5LnBuZw==/original/BlAxW7.png" alt="Icarus gameplay 4" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NTE1LnBuZw==/original/GJAhjs.png" alt="Icarus gameplay 5" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NTIxLnBuZw==/original/iFPRLd.png" alt="Icarus gameplay 6" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NTc5LnBuZw==/original/a%2FC0Ow.png" alt="Icarus gameplay 7" onClick={toggleActive}/>
            <iframe className="game-demo-video" src="https://www.youtube.com/embed/dzEwrDTMOtI" title="Icarus Gameplay Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
         </>}
      />
      <Collapsible
         buttonContent={<>
            <a href="https://ptlux1517.itch.io/portal-hunter">Portal Hunter</a> : dungeon crawler with puzzles
         </>}
         innerContent={<>
            <img src="https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5Njg5LnBuZw==/original/2o0OYt.png" alt="Portal Hunter game theme" onClick={toggleActive} style={{minWidth: "50%"}}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NjkwLnBuZw==/original/xpCJnd.png" alt="Portal Hunter gameplay 1" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzU3LnBuZw==/original/oYGR0x.png" alt="Portal Hunter gameplay 2" onClick={toggleActive} style={{minWidth: "50%"}}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzQ4LnBuZw==/original/xVPl94.png" alt="Portal Hunter gameplay 3" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzYyLnBuZw==/original/yo7MZ%2F.png" alt="Portal Hunter gameplay 4" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzA3LnBuZw==/original/5IhAVH.png" alt="Portal Hunter gameplay 5" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzE0LnBuZw==/original/PQgro8.png" alt="Portal Hunter gameplay 6" onClick={toggleActive}/>
            <iframe className="game-demo-video" src="https://www.youtube.com/embed/qGv7wtGdXeM" title="Portal Hunter Game Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
         </>}
      />
      <Collapsible
         buttonContent={<>
            <a href="https://ptlux1517.itch.io/asteroid-escape">Asteroid Escape</a> : space flight survival
         </>}
         innerContent={<>
            <img src="https://img.itch.zone/aW1hZ2UvMTA0NjQ5OC81OTgxMzY0LnBuZw==/original/N8DyNS.png" alt="Asteroid Escape game theme" onClick={toggleActive} style={{minWidth: "50%"}}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA0NjQ5OC81OTgxNDE1LnBuZw==/original/ZRp4ZB.png" alt="Asteroid Escape gameplay 1" onClick={toggleActive}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA0NjQ5OC81OTgxNDQ3LnBuZw==/original/LOVxb8.png" alt="Asteroid Escape gameplay 2" onClick={toggleActive} style={{minWidth: "50%"}}/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA0NjQ5OC81OTgxNDU2LnBuZw==/original/wApqIu.png" alt="Asteroid Escape gameplay 3" onClick={toggleActive}/>
            <iframe className="game-demo-video" src="https://www.youtube.com/embed/TtBE7kOhu-c" title="Asteroid Escape Game Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
         </>}
      />

      <span className="text-icon-span"><h2 className="no-underline">Leetcode</h2><LeetcodeIcon/></span>
      <span className="text-icon-span"><ScalaIcon/><a href="https://github.com/PTLux1517/leetcode/tree/main/src/main/scala/com/github/ptlux1517/leetcode">Scala repo</a></span>

      <hr/>
      <span className="text-icon-span"><h1>Private Works</h1><BSUIcon/></span>

      <h2>Large Class Projects</h2>
      <ul>
         <li><span className="course">[Distributed Systems]</span> Distributed UUID Service (<a href="https://drive.google.com/file/d/11BraIymZ1J05fdrn4NM6JouudOxm--yY/view?t=3m2s">demo video</a>) <JavaIcon/><PicoCLIIcon/><DockerIcon/><AWSEC2Icon></AWSEC2Icon></li>
         <li><span className="course">[Distributed Systems]</span> Chat Server (<a href="https://drive.google.com/file/d/1I2BlwTOQ5t-fSL1uic-K6A6eUhBS0agJ/view?usp=sharing">demo video</a>) <JavaIcon/></li>
         <li><span className="course">[Databases]</span> Treasure Valley Library Management System <JavaIcon/><MySQLIcon/></li>
         <li><span className="course">[Programming Languages]</span> Interpreter <JavaIcon/></li>
         <li><span className="course">[Data Structures]</span> B-Tree Implementation (for use on disk)</li>
         <li className="continuation"> and Human Genome Length-k DNA Subsequence Frequency Analyzer <JavaIcon/></li>
      </ul>

      <h2>Midsize Class Projects</h2>
      <ul>
         <li><span className="course">[Opeating Systems]</span> Keyboard Device Driver <CIcon/></li>
         <li><span className="course">[Operating Systems]</span> User-Level Thread Library <CIcon/></li>
         <li><span className="course">[Operating Systems]</span> Multi-Threaded Web Server (bounded buffer problem) <CIcon/></li>
         <li><span className="course">[Operating Systems]</span> Page Fault Handler <CIcon/></li>
         <li><span className="course">[Operating Systems]</span> Buddy System Memory Allocator <CIcon/></li>
         <li><span className="course">[Operating Systems]</span> Lottery Scheduler <CIcon/></li>
         <li><span className="course">[Software Engineering]</span> GitHub Bot <JSIcon/></li>
         <li><span className="course">[Web Development]</span> Blogging Engine (<a href="https://drive.google.com/file/d/1BiPrF1FxNB2DEjuxYXh-nlAD04TJRm5K/view?usp=sharing">demo video</a>) <PHPIcon/><JSIcon/></li>
         <li><span className="course">[Theory of Computation]</span> Recursive Descent RegEx Parser <JavaIcon/></li>
         <li><span className="course">[Theory of Computation]</span> NFA to DFA Converter <JavaIcon/></li>
         <li><span className="course">[Algorithms]</span> Activity Node to Event Node Graph Converter with Critical Path Info <JavaIcon/></li>
         <li><span className="course">[Intro to Sys Programming]</span> Implementing the cat, grep, wc, sort, ps Commands <CIcon/></li>
      </ul>

      <h2>Small Class Projects</h2>
      <ul>
         <li><span className="course">[Algorithms]</span> 0-1 Knapsack DP Problem <JavaIcon/></li>
         <li><span className="course">[Algorithms]</span> Knight's Tour Problem <JavaIcon/></li>
         <li><span className="course">[Opeating Systems]</span> Character Replacement Device Driver <CIcon/></li>
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

      <h2>Hardware Class Projects</h2>
      <ul>
         <li><span className="course">[Microprocessors]</span> Robotic Arm Actuation using Pulse Width Modulation</li>
         <li className="continuation"> with 7-Segment Angle Display <CIcon/></li>
         <li><span className="course">[Digital Systems]</span> Simon Game <XilinxIcon/><VerilogIcon/></li>
      </ul>
   </div></div></main>;
}
