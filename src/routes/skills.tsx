import React from 'react';

import {
   ASMIcon,
   AWKIcon,
   AWSIcon,
   AWSAPIGatewayIcon,
   AWSAuroraIcon,
   AWSCertificateManagerIcon,
   AWSCloudFrontIcon,
   AWSCloudWatchIcon,
   AWSEC2Icon,
   AWSIAMIcon,
   AWSLambdaIcon,
   AWSRoute53Icon,
   AWSS3Icon,
   AWSSecretsManagerIcon,
   BashIcon,
   BlenderIcon,
   CabalIcon,
   CargoIcon,
   CentOSIcon,
   CIcon,
   CLionIcon,
   DataGripIcon,
   DockerIcon,
   GitIcon,
   GitHubActionsIcon,
   GoIcon,
   GradleIcon,
   GuavaIcon,
   HaskellIcon,
   HTMLIcon,
   IntelliJIcon,
   JavaIcon,
   JavaFXIcon,
   JestIcon,
   JQueryIcon,
   JSIcon,
   JUnitIcon,
   KubuntuIcon,
   LinuxIcon,
   MakeIcon,
   MySQLIcon,
   NockIcon,
   NPMIcon,
   PHPIcon,
   PHPStormIcon,
   PicoCLIIcon,
   PopOSIcon,
   PrologIcon,
   PythonIcon,
   RIcon,
   ReactIcon,
   ReactRouterIcon,
   RedHatIcon,
   RustIcon,
   SassIcon,
   SBTIcon,
   ScalaIcon,
   SchemeIcon,
   SmalltalkIcon,
   TerraformIcon,
   ThreeJSIcon,
   TypeScriptIcon,
   UbuntuIcon,
   UnrealIcon,
   VagrantIcon,
   VerilogIcon,
   VirtualBoxIcon,
   VSCodeIcon,
   WebpackIcon,
   WiresharkIcon
} from '../icons';


export default function Skills() {
   return <main id="skills">
      <div>
         <span className="h2-bg"><h2>Languages</h2></span>
         <h3>Primary</h3>
         <ul>
            <li><JavaIcon/><span>Java</span></li>
            <li><div><JSIcon/><TypeScriptIcon/><SassIcon/><HTMLIcon/></div><span>JavaScript/TypeScript, CSS/Sass, HTML</span></li>
            <li><CIcon/><span>C</span></li>
            <li><MySQLIcon/><span>SQL</span></li>
         </ul>
         <h3>Secondary</h3>
         <ul>
            <li><ScalaIcon/><span>Scala (currently moving toward primary)</span></li>
            <li><HaskellIcon/><span>Haskell</span></li>
            <li><RustIcon/><span>Rust</span></li>
            <li><BashIcon/><span>Bash</span></li>
         </ul>
         <h3>Some Exposure & Use</h3>
         <ul>
            <li><PHPIcon/><span>PHP</span></li>
            <li><GoIcon/><span>Go</span></li>
            <li><PythonIcon/><span>Python</span></li>
            <li><ASMIcon/><span>ARM Assembly</span></li>
            <li><VerilogIcon/><span>Verilog</span></li>
            <li><SchemeIcon/><span>Scheme</span></li>
            <li><PrologIcon/><span>Prolog</span></li>
            <li><SmalltalkIcon/><span>GNU Smalltalk</span></li>
            <li><AWKIcon/><span>AWK</span></li>
            <li><RIcon/><span>R</span></li>
         </ul>
      </div>


      <div>
         <span className="h2-bg"><h2>{
            `Frameworks
            & Libraries`
            .replace(/ {12}/g,"")
         }</h2></span>
         <ul>
            <li><ReactIcon/><span>React.js</span></li>
            <li><ReactRouterIcon/><span>React Router</span></li>
            <li><ThreeJSIcon/><span>Three.js</span></li>
            <li><JavaFXIcon/><span>JavaFX</span></li>
            <li><GuavaIcon/><span>Guava</span></li>
            <li><PicoCLIIcon/><span>PicoCLI</span></li>
            <li><JQueryIcon/><span>JQuery</span></li>
         </ul>
      </div>

      <div>
         <span className="h2-bg"><h2>Cloud & DevOps</h2></span>
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
            <li className="indent"><AWSCloudWatchIcon/><span>Cloudwatch,</span></li>
            <li className="indent"><AWSIAMIcon/><span>IAM,</span></li>
            <li className="indent"><AWSSecretsManagerIcon/><span>Secrets Manager,</span></li>
            <li className="indent"><AWSCertificateManagerIcon/><span>Certificate Manager</span></li>
            <li><span></span><span>]</span></li>
            <li><DockerIcon /><span>Docker</span></li>
            <li><VagrantIcon/><span>Vagrant</span></li>
         </ul>
      </div>

      <div>
         <span className="h2-bg"><h2>Other</h2></span>
         <ul>
            <li><GitIcon/><span>Git</span></li>
            <li><VirtualBoxIcon/><span>VirtualBox</span></li>
            <li><WiresharkIcon/><span>WireShark</span></li>
         </ul>
      </div>

      <div>
         <span className="h2-bg"><h2>Build/Package</h2></span>
         <ul>
            <li><NPMIcon/><span>npm</span></li>
            <li><WebpackIcon/><span>Webpack</span></li>
            <li><GradleIcon/><span>Gradle</span></li>
            <li><MakeIcon/><span>Make</span></li>
            <li><SBTIcon/><span>SBT</span></li>
            <li><CabalIcon/><span>Cabal/Stack</span></li>
            <li><CargoIcon/><span>Cargo</span></li>
         </ul>
      </div>

      <div>
         <span className="h2-bg"><h2>Testing</h2></span>
         <ul>
            <li><JestIcon/><span>Jest</span></li>
            <li><JUnitIcon/><span>JUnit</span></li>
            <li><NockIcon/><span>Nock</span></li>
         </ul>
      </div>

      <div>
         <span className="h2-bg"><h2>Game Dev</h2></span>
         <ul>
            <li><UnrealIcon /><span>Unreal Engine</span></li>
            <li><BlenderIcon /><span>Blender</span></li>
         </ul>
      </div>

      <div>
         <span className="h2-bg"><h2>IDE</h2></span>
         <ul>
            <li><IntelliJIcon/><span>IntelliJ</span></li>
            <li><PHPStormIcon/><span>PHPStorm</span></li>
            <li><CLionIcon/><span>CLion</span></li>
            <li><DataGripIcon/><span>DataGrip</span></li>
            <li><span><img src="https://www.jetbrains.com/_assets/www/fleet/inc/overview-content/img/fleet-logo.65f4a04c59fc3ba93bb5e181050891c5.png" width={30}/></span><span>Fleet</span></li>
            <li><VSCodeIcon/><span>VSCode</span></li>
         </ul>
      </div>

      <div>
         <span className="h2-bg"><h2>Operating System</h2></span>
         <ul>
            <li><LinuxIcon/><span>Linux [</span></li>
            <li className="indent"><UbuntuIcon/><span>Ubuntu,</span></li>
            <li className="indent"><KubuntuIcon/><span>Kubuntu,</span></li>
            <li className="indent"><PopOSIcon/><span>Pop!_OS,</span></li>
            <li className="indent"><RedHatIcon/><span>Red Hat,</span></li>
            <li className="indent"><CentOSIcon/><span>CentOS</span></li>
            <li><span></span><span>]</span></li>
         </ul>
      </div>
   </main>;
}