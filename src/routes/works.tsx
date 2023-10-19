import React from 'react';
import Collapsible from "../components/collapsible";
import {
   AWKIcon,
   BlenderIcon,
   BSUIcon,
   CIcon,
   ClinkbaitIcon,
   GitHubPagesComboIcon,
   GoIcon,
   ItchIOIcon,
   JavaIcon,
   JSIcon,
   LeetcodeIcon,
   MySQLIcon,
   PHPIcon,
   PrologIcon,
   RustIcon,
   ScalaIcon,
   SchemeIcon,
   SmalltalkIcon,
   UnrealIcon,
   VerilogIcon,
   XilinxIcon
} from '../icons';

export default function Works() {

   return <main id="works"><div><div>
      <h1>Public Works</h1>

      <h2>Projects</h2>
      <Collapsible
         buttonContent={<>
            <ClinkbaitIcon/><a href="https://clinkbait.com">Clinkbait</a> : A cocktail recipe app/menu for the home bartender
         </>}
         innerContent={<>{
            `hidden
            1
            2
            3`
         }</>}
      />

      <span className="text-icon-span"><h2 className="no-underline">GitHub Pages</h2><GitHubPagesComboIcon/></span>
      <Collapsible
         buttonContent={<>
            <a href="https://ptlux1517.github.io/Movilo/">/Movilo</a> : A biomechanics motion capture visualization and analysis tool
         </>}
         innerContent={<>
            <a href="https://github.com/cs481-ekh/f22-viz-kids">repo</a> |
            <a href="https://cs481-ekh.github.io/f22-viz-kids/"> writeup</a>
         </>}
      />
      <Collapsible
         buttonContent={<>
            <a href="https://ptlux1517.github.io/code-128a-barcode-encoder/">/code-128a-barcode-encoder</a> : A barcode data encoder for the Code 128 A character set
         </>}
         innerContent={<>
            <a href="https://github.com/PTLux1517/code-128a-barcode-encoder">repo</a>
         </>}
      />

      <span className="text-icon-span"><h2 className="no-underline">Games</h2><ItchIOIcon/><UnrealIcon/><BlenderIcon/></span>
      <div><a href="https://ptlux1517.itch.io/">itch.io creator homepage</a></div><br/>
      <Collapsible
         buttonContent={<>
            <a href="https://ptlux1517.itch.io/project-horizon">Project Horizon</a> : third-person mech combat
         </>}
         innerContent={<>
            <img src="https://img.itch.zone/aW1nLzYyNzc2MTgucG5n/original/gWI0R6.png" alt="Project Horizon game theme"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0Mjk4LnBuZw==/347x500/wW4CnY.png" alt="Project Horizon gameplay 1"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0MzE2LnBuZw==/347x500/Sm%2B6gF.png" alt="Project Horizon gameplay 2"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NDI5LnBuZw==/347x500/SWHl7P.png" alt="Project Horizon gameplay 3"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NDEzLnBuZw==/347x500/xoz9Wk.png" alt="Project Horizon gameplay 4"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NTU4LnBuZw==/347x500/qVrwkY.png" alt="Project Horizon gameplay 5"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NTU0LnBuZw==/347x500/EBTXxt.png" alt="Project Horizon gameplay 6"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NTUwLnBuZw==/347x500/2R58Ff.png" alt="Project Horizon gameplay 7"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0MjkyLnBuZw==/347x500/DQUzRs.png" alt="Project Horizon gameplay 8"/>
         </>}
      />
      <Collapsible
         buttonContent={<>
            <a href="https://ptlux1517.itch.io/suns-out-guns-out">Sun's Out Guns Out!</a> : low-poly runner
         </>}
         innerContent={<>
            <img src="https://img.itch.zone/aW1nLzY0MDgzMzgucG5n/original/4oJUDF.png" alt="Sun's Out Guns Out game theme"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2MzM4LnBuZw==/347x500/hkHQuK.png" alt="Sun's Out Guns Out gameplay 1"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2MzYxLnBuZw==/347x500/uu3Z8u.png" alt="Sun's Out Guns Out gameplay 2"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2MzY2LnBuZw==/347x500/thVC7u.png" alt="Sun's Out Guns Out gameplay 3"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2Mzc0LnBuZw==/347x500/b5RTaj.png" alt="Sun's Out Guns Out gameplay 4"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2MzkxLnBuZw==/347x500/gvDxlD.png" alt="Sun's Out Guns Out gameplay 5"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2NDI3LnBuZw==/347x500/W053zD.png" alt="Sun's Out Guns Out gameplay 6"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2NDMzLnBuZw==/347x500/wb2t5L.png" alt="Sun's Out Guns Out gameplay 7"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2NDA1LnBuZw==/347x500/O5WTJL.png" alt="Sun's Out Guns Out gameplay 8"/>
         </>}
      />
      <Collapsible
         buttonContent={<>
            <a href="https://ptlux1517.itch.io/icarus">Icarus</a> : dungeon/maze crawler with flight
         </>}
         innerContent={<>
            <img src="https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3OTY0LnBuZw==/347x500/P5XHjc.png" alt="Icarus game theme"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NTI4LnBuZw==/347x500/wlfLDF.png" alt="Icarus gameplay 1"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NDQ5LnBuZw==/347x500/et5G3Z.png" alt="Icarus gameplay 2"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NDYwLnBuZw==/347x500/IhGOih.png" alt="Icarus gameplay 3"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NDgzLnBuZw==/347x500/lOY70b.png" alt="Icarus gameplay 4"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NDk1LnBuZw==/347x500/n7tz0f.png" alt="Icarus gameplay 5"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NTE1LnBuZw==/347x500/yx0Gm5.png" alt="Icarus gameplay 6"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NTIxLnBuZw==/347x500/2zJc5M.png" alt="Icarus gameplay 7"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NTc5LnBuZw==/347x500/lWSkOZ.png" alt="Icarus gameplay 8"/>
         </>}
      />
      <Collapsible
         buttonContent={<>
            <a href="https://ptlux1517.itch.io/portal-hunter">Portal Hunter</a> : dungeon crawler with puzzles
         </>}
         innerContent={<>
            <img src="https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5Njg5LnBuZw==/347x500/ElB0kp.png" alt="Portal Hunter game theme"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NjkwLnBuZw==/347x500/aYdIBi.png" alt="Portal Hunter gameplay 1"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzU3LnBuZw==/347x500/SXUt5m.png" alt="Portal Hunter gameplay 2"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzQ4LnBuZw==/347x500/lWUaeg.png" alt="Portal Hunter gameplay 3"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzYyLnBuZw==/347x500/X3sA%2F9.png" alt="Portal Hunter gameplay 4"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzA3LnBuZw==/347x500/fjXBNb.png" alt="Portal Hunter gameplay 5"/>
         </>}
      />
      <Collapsible
         buttonContent={<>
            <a href="https://ptlux1517.itch.io/asteroid-escape">Asteroid Escape</a> : space flight survival
         </>}
         innerContent={<>
            <img src="https://img.itch.zone/aW1hZ2UvMTA0NjQ5OC81OTgxMzY0LnBuZw==/347x500/syDsqC.png" alt="Asteroid Escape game theme"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA0NjQ5OC81OTgxNDE1LnBuZw==/347x500/4OXlAk.png" alt="Asteroid Escape gameplay 1"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA0NjQ5OC81OTgxNDQ3LnBuZw==/347x500/%2BB6Ko5.png" alt="Asteroid Escape gameplay 2"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA0NjQ5OC81OTgxNDUzLnBuZw==/347x500/XuQpAf.png" alt="Asteroid Escape gameplay 3"/>
            <img src="https://img.itch.zone/aW1hZ2UvMTA0NjQ5OC81OTgxNDU2LnBuZw==/347x500/XZPCz4.png" alt="Asteroid Escape gameplay 4"/>
         </>}
      />

      <span className="text-icon-span"><h2 className="no-underline">Leetcode</h2><LeetcodeIcon/></span>
      <span className="text-icon-span"><ScalaIcon/><a href="https://github.com/PTLux1517/leetcode/tree/main/src/main/scala/com/github/ptlux1517/leetcode">Scala repo</a></span>

      <hr/>
      <span className="text-icon-span"><h1>Private Works</h1><BSUIcon/></span>

      <h2>Large Class Projects</h2>
      <ul>
         <li><span className="course">[Distributed Systems]</span> Distributed UUID Service (<a href="https://drive.google.com/file/d/11BraIymZ1J05fdrn4NM6JouudOxm--yY/view?t=3m2s">demo video</a>) <JavaIcon/></li>
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
