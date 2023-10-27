import React from 'react';

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
   CIcon,
   DockerIcon,
   GitHubActionsIcon,
   GoIcon,
   JavaIcon,
   JestIcon,
   JSIcon,
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
   VerilogIcon
} from '../icons';


export default function Skills() {
   return <main id="skills">
      <div>
         <h2>Languages</h2>
         <h3>Primary</h3>
         <ul>
            <li><JavaIcon/><span>Java</span></li>
            <li><div><JSIcon/><TypeScriptIcon/></div><span>JavaScript/TypeScript, CSS/Sass, HTML</span></li>
            <li><CIcon/><span>C</span></li>
            <li><MySQLIcon/><span>SQL</span></li>
         </ul>
         <h3>Secondary</h3>
         <ul>
            <li><ScalaIcon/><span>Scala (currently moving toward primary)</span></li>
            <li><span></span><span>Haskell</span></li>
            <li><RustIcon/><span>Rust</span></li>
            <li><span></span><span>Bash</span></li>
         </ul>
         <h3>Some Exposure & Use</h3>
         <ul>
            <li><PHPIcon/><span>PHP</span></li>
            <li><GoIcon/><span>Go</span></li>
            <li><span></span><span>Python</span></li>
            <li><span></span><span>ARM Assembly</span></li>
            <li><VerilogIcon/><span>Verilog</span></li>
            <li><SchemeIcon/><span>Scheme</span></li>
            <li><PrologIcon/><span>Prolog</span></li>
            <li><SmalltalkIcon/><span>GNU Smalltalk</span></li>
            <li><AWKIcon/><span>AWK</span></li>
            <li><span></span><span>R</span></li>
         </ul>
      </div>


      <div>
         <h2>{
            `Frameworks
            & Libraries`
            .replace(/ {12}/g,"")
         }</h2>
         <ul>
            <li><ReactIcon /><span>React.js</span></li>
            <li><ThreeJSIcon /><span>Three.js</span></li>
            <li><span></span><span>JavaFX</span></li>
            <li><span></span><span>Guava</span></li>
            <li><PicoCLIIcon /><span>PicoCLI</span></li>
            <li><span></span><span>JQuery</span></li>
         </ul>
      </div>

      <div>
         <h2>Cloud & DevOps</h2>
         <ul>
            <li><GitHubActionsIcon /><span>GitHub Actions CI/CD</span></li>
            <li><TerraformIcon /><span>Terraform</span></li>
            <li><AWSIcon /><span>AWS [</span></li>
            <li className="indent"><AWSCloudFrontIcon /><span>Cloudfront,</span></li>
            <li className="indent"><AWSRoute53Icon /><span>Route 53,</span></li>
            <li className="indent"><AWSAPIGatewayIcon /><span>API Gateway,</span></li>
            <li className="indent"><AWSLambdaIcon /><span>Lambda,</span></li>
            <li className="indent"><AWSS3Icon /><span>S3,</span></li>
            <li className="indent"><AWSAuroraIcon /><span>RDS Aurora Serverless,</span></li>
            <li className="indent"><AWSEC2Icon /><span>EC2,</span></li>
            <li className="indent"><span></span><span>IAM,</span></li>
            <li className="indent"><span></span><span>Secrets Manager</span></li>
            <li><span></span><span>]</span></li>
            <li><DockerIcon /><span>Docker</span></li>
            <li><span></span><span>Vagrant</span></li>
         </ul>
      </div>

      <div>
         <h2>Other</h2>
         <ul>
            <li><span></span><span>Git</span></li>
            <li><span></span><span>VirtualBox</span></li>
            <li><span></span><span>WireShark</span></li>
         </ul>
      </div>

      <div>
         <h2>Build/Package</h2>
         <ul>
            <li><span></span><span>npm</span></li>
            <li><span></span><span>Webpack</span></li>
            <li><span></span><span>Gradle</span></li>
            <li><span></span><span>Make</span></li>
            <li><span></span><span>SBT</span></li>
            <li><span></span><span>Stack</span></li>
            <li><span></span><span>Cargo</span></li>
         </ul>
      </div>

      <div>
         <h2>Testing</h2>
         <ul>
            <li><JestIcon /><span>Jest</span></li>
            <li><span></span><span>JUnit</span></li>
            <li><span></span><span>Nock</span></li>
         </ul>
      </div>

      <div>
         <h2>Game Dev</h2>
         <ul>
            <li><UnrealIcon /><span>Unreal Engine</span></li>
            <li><BlenderIcon /><span>Blender</span></li>
         </ul>
      </div>

      <div>
         <h2>IDE</h2>
         <ul>
            <li><span></span><span>IntelliJ</span></li>
            <li><span></span><span>PHPStorm</span></li>
            <li><span></span><span>CLion</span></li>
            <li><span></span><span>DataGrip</span></li>
            <li><span></span><span>Fleet</span></li>
            <li><span></span><span>VSCode</span></li>
            <li><span></span><span>MySQL Workbench</span></li>
         </ul>
      </div>

      <div>
         <h2>Operating System</h2>
         <ul>
            <li><span></span><span>Linux (Ubuntu/Pop!_OS)</span></li>
         </ul>
      </div>
   </main>;
}