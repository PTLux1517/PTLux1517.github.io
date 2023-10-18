import React from 'react';
import {
   AWKIcon,
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
   VerilogIcon,
   XilinxIcon
} from '../icons';

export default function Works() {

   return <main id="works"><div><div>
      <h1>Public Works</h1>

      <h2>Projects</h2>
      <ul>
         <li><a href="https://clinkbait.com">Clinkbait</a> : A cocktail recipe app/menu for the home bartender</li>
      </ul>

      <span className="text-icon-span"><h2>GitHub Pages</h2><GitHubPagesComboIcon/></span>
      <ul>
         <li><div>
            <a href="https://ptlux1517.github.io/Movilo/">/Movilo</a> : A biomechanics motion capture visualization app
            (
            <a href="https://github.com/cs481-ekh/f22-viz-kids">repo</a> |
            <a href="https://cs481-ekh.github.io/f22-viz-kids/"> writeup</a>
            )
         </div></li>
         <li><div>
            <a href="https://ptlux1517.github.io/code-128a-barcode-encoder/">/code-128a-barcode-encoder</a> : A barcode data encoder for the Code 128 A character set
            (
            <a href="https://github.com/PTLux1517/code-128a-barcode-encoder">repo</a>
            )
         </div></li>
      </ul>

      <span className="text-icon-span"><h2>Games</h2><ItchIOIcon/></span>
      <a href="https://ptlux1517.itch.io/">itch.io</a>

      <span className="text-icon-span"><h2>Leetcode</h2><LeetcodeIcon/></span>
      <span className="text-icon-span"><ScalaIcon/><a href="https://github.com/PTLux1517/leetcode">Scala repo</a></span>

      <hr/>
      <h1>Private Works</h1>

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
