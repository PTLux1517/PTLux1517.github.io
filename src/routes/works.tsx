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
   GroupProjectIcon,
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

   const interleaveArray = (x:any, arr:any[]) => arr.flatMap(e => [e,x]).slice(0,-1);

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
         pgWidth:number,
         w?: number,
         h?: number,
         url:{
            small?:string,
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
               <>{" : "}{projectInfo.blurb}</>
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
                           <>{" | "}</>,
                           projectInfo.otherLinks.map(({linkText,url}) => <a href={url}>{linkText}<ExternalLinkIcon/></a>)
                        )}
                     </div>
                  }
               </div>
            }
            {projectInfo.images &&
               projectInfo.images.map(({pgWidth,w,h,url:{small,large}}, idx) =>
                  <div className="blurred-img"
                       style={{
                          backgroundImage: small ? `url(${small})` : "radial-gradient(circle, gray, whitesmoke)",
                          flexBasis: pgWidth*collapsibleWidth - 10,
                          flexGrow: 2,
                          minHeight: (pgWidth*collapsibleWidth - 10)*((h || 1)/(w || 4))
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
               )
            }
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

   const clinkbaitInfo:ProjectInfo = {
      name: "Clinkbait",
      mainLink: "https://clinkbait.com",
      gitHubPage: false,
      favicon: <ClinkbaitIcon/>,
      blurb: <>A cocktail recipe app for the home bartender which doubles as a menu for guests</>,
      iconsDiv: <div><TypeScriptIcon/><ReactIcon/><JavaIcon/><MySQLIcon/><TerraformIcon/><AWSIcon/>(<AWSCloudFrontIcon/><AWSRoute53Icon/><AWSAPIGatewayIcon/><AWSLambdaIcon/><AWSS3Icon/><AWSAuroraIcon/>)</div>,
      images: [
         {pgWidth: 1/2, w: 2141, h: 3193, url: {small: "https://drive.google.com/uc?export=view&id=11k7y4ZLjou6D4s5vKYvWy2TpwHcF9JUT", large: "https://drive.google.com/uc?export=view&id=1gnK-z1AdkdI6srUh8mZolJpk7JXOLDOe"}},
         {pgWidth: 1/2, w: 2134, h: 3193, url: {small: "https://drive.google.com/uc?export=view&id=1GPuhAXzsIBef7jiOLhSBcY54c7xMQ5Nw", large: "https://drive.google.com/uc?export=view&id=1cxxBFs7wU2_W_jqrec60r3Enn_Qa7Opo"}},
         {pgWidth: 1/3, w: 640 , h: 604 , url: {small: "https://drive.google.com/uc?export=view&id=1E-SOdWAjDAhvQ9EbLNl5v-INRizqo9OR", large: "https://drive.google.com/uc?export=view&id=11zck80LwXeIbMTp0KjG9FXDCdxTthw7_"}},
         {pgWidth: 1/3, w: 2141, h: 2259, url: {small: "https://drive.google.com/uc?export=view&id=1Hfxk3ymr_IZBzFXMSNlj7qP7D5g0NyLV", large: "https://drive.google.com/uc?export=view&id=16ZV9XIUVh2r1kIWZa1f9umQpQaMs4Uo5"}},
         {pgWidth: 1/3, w: 2141, h: 1825, url: {small: "https://drive.google.com/uc?export=view&id=1A1p7TBOcLVpuU4PpZ9hP8KccsuALvutF", large: "https://drive.google.com/uc?export=view&id=1EUjgHQ-Q3PE03gaCRi7Iw_58H9pjcViI"}},
         {pgWidth: 1  , w: 2141, h: 554 , url: {small: "https://drive.google.com/uc?export=view&id=1ZQJxrzpk_iFVVMYrWPZIDeWNkQbFmkeN", large: "https://drive.google.com/uc?export=view&id=1sBrg1vEi3sPibxlh5eapbEFVJXgnipPo"}},
      ]
   };

   const moviloInfo:ProjectInfo = {
      name: "Movilo",
      mainLink: "https://ptlux1517.github.io/Movilo/",
      gitHubPage: true,
      blurb: <>A biomechanics motion capture visualization and analysis tool&emsp;(BSU senior design project <GroupProjectIcon otherMemberCount={4}/>)</>,
      iconsDiv: <div><TypeScriptIcon/><ReactIcon/><ThreeJSIcon/><JestIcon/><GitHubActionsIcon/></div>,
      otherLinks: [
         {linkText: "writeup", url: "https://cs481-ekh.github.io/f22-viz-kids/"},
         {linkText: "repo", url: "https://github.com/cs481-ekh/f22-viz-kids"}
      ],
      images: [
         {pgWidth: 1/2, w: 800, h: 599, url: {small: "https://drive.google.com/uc?export=view&id=1upqb9e9st-5GdRWyGvjT4lyuJy6YjXmJ", large: "https://drive.google.com/uc?export=view&id=19m_-A74W_B1zWyDcxXbmMVJJLT0x8sFD"}},
         {pgWidth: 1/2, w: 800, h: 599, url: {small: "https://drive.google.com/uc?export=view&id=1H95FnGXoO8a4t9pyF7t0eVMBgu830-QS", large: "https://drive.google.com/uc?export=view&id=1kjyfqBLoUxYX303JKAFAjzyq7a005GD0"}},
         {pgWidth: 1/2, w: 800, h: 599, url: {small: "https://drive.google.com/uc?export=view&id=1YGx300Y5AY6O24X7md25p3-FDW7WyUEH", large: "https://drive.google.com/uc?export=view&id=1jPBvFOVrIarbKkUwLiE6jshbl6JIe9n0"}},
         {pgWidth: 1/2, w: 800, h: 599, url: {small: "https://drive.google.com/uc?export=view&id=1a_tiaPhs6NuhD0QSJtAAYfiklluRmKLj", large: "https://drive.google.com/uc?export=view&id=1RSxZ0iQ2DjIVMu_cO2y1gbCkNLq3ANJw"}},
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
         {pgWidth: 1/2, w: 846, h: 1242, url: {small: "https://drive.google.com/uc?export=view&id=1OGQRK-nQiaYpxP3-1EWIIrWmD5zRN9-m", large: "https://drive.google.com/uc?export=view&id=1PtcxbyiL__HICoJHmExH07_cCWjkpfzp"}},
         {pgWidth: 1/2, w: 864, h: 1004, url: {small: "https://drive.google.com/uc?export=view&id=1_7Bws1aLZjN9mA2EpkESP9seWEvKjcvB", large: "https://drive.google.com/uc?export=view&id=1BLiDhfQIOJe1xFvyIoYm27519QIZNaoj"}},
      ]
   };

   const projectHorizonInfo:ProjectInfo = {
      name: "Project Horizon",
      mainLink: "https://ptlux1517.itch.io/project-horizon",
      gitHubPage: false,
      blurb: <>third-person mech combat</>,
      images: [
         {pgWidth: 1/2, w: 2088, h: 1137, url: {small: "https://drive.google.com/uc?export=view&id=17huKnbJUT0M7ad3Ex0bwituWRP3I8OHu", large: "https://img.itch.zone/aW1nLzYyNzc2MTgucG5n/original/gWI0R6.png"}},
         {pgWidth: 1/2, w: 2038, h: 1144, url: {small: "https://drive.google.com/uc?export=view&id=1elI3ZZm8JHMtEzPn0aqxR8KlCht04ogZ", large: "https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NDI5LnBuZw==/original/OtCIYm.png"}},
         {pgWidth: 1/3, w: 2040, h: 1144, url: {small: "https://drive.google.com/uc?export=view&id=1L8Rgst9e5gUBimbX_scYaHth4e-9WbNo", large: "https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NDEzLnBuZw==/original/KAquB5.png"}},
         {pgWidth: 1/3, w: 2038, h: 1141, url: {small: "https://drive.google.com/uc?export=view&id=1qwF9L-yOGMHFj13H2-jUY8GW3Ld_SWwi", large: "https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0MzE2LnBuZw==/original/%2BHTqV%2B.png"}},
         {pgWidth: 1/3, w: 2039, h: 1140, url: {small: "https://drive.google.com/uc?export=view&id=1rUMDJChiz1mXgNr51TeQyxFRnEKy3LEH", large: "https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NTU4LnBuZw==/original/o%2B43tF.png"}},
         {pgWidth: 1/3, w: 2037, h: 1138, url: {small: "https://drive.google.com/uc?export=view&id=1abc2ZQ7RE_WhZ9HGgzy9QNRZLnENtvQU", large: "https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NTU0LnBuZw==/original/wXxS60.png"}},
         {pgWidth: 1/3, w: 2036, h: 1139, url: {small: "https://drive.google.com/uc?export=view&id=1HicpP76DRly42Iwn8U8oUV_jxwf4k08D", large: "https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0NTUwLnBuZw==/original/XEf3ss.png"}},
         {pgWidth: 1/3, w: 2082, h: 1137, url: {small: "https://drive.google.com/uc?export=view&id=1yevWfCWwOmjWfICtlO-xvqZhcnNHofKS", large: "https://img.itch.zone/aW1hZ2UvMTA5MDQzNi82Mjg0MjkyLnBuZw==/original/PMHw0U.png"}}
      ],
      video: "https://www.youtube.com/embed/AdHmx18_ZNc"
   };

   const sunsOutGunsOutInfo:ProjectInfo = {
      name: "Sun's Out Guns Out!",
      mainLink: "https://ptlux1517.itch.io/suns-out-guns-out",
      gitHubPage: false,
      blurb: <>low-poly runner</>,
      images: [
         {pgWidth: 1/2, w: 1914, h: 889 , url: {small: "https://drive.google.com/uc?export=view&id=10xRq5Mvbqq_cB23s_MZjJBk-tBZ7Y2Zu", large: "https://img.itch.zone/aW1nLzY0MDgzMzgucG5n/original/4oJUDF.png"}},
         {pgWidth: 1/2, w: 1918, h: 1080, url: {small: "https://drive.google.com/uc?export=view&id=1VQ0LsL_5ooOZEu8zvLTuI9Ei50adhtxX", large: "https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2MzYxLnBuZw==/original/FaK%2BQX.png"}},
         {pgWidth: 1/3, w: 2045, h: 1151, url: {small: "https://drive.google.com/uc?export=view&id=18Yke5G4F7qw71Om1pSp-5pe-5VnWjWkC", large: "https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2MzM4LnBuZw==/original/AD%2FgnL.png"}},
         {pgWidth: 1/3, w: 1916, h: 1075, url: {small: "https://drive.google.com/uc?export=view&id=1_n3UHeKwLXORvtqdzKiKhR9eCsl7YkkN", large: "https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2MzY2LnBuZw==/original/B7IGpq.png"}},
         {pgWidth: 1/3, w: 1919, h: 1078, url: {small: "https://drive.google.com/uc?export=view&id=1HqBtUAA4osPtSjW0UfAX_z-V5imiqFc_", large: "https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2Mzc0LnBuZw==/original/rrUhAL.png"}},
         {pgWidth: 1/3, w: 1915, h: 1076, url: {small: "https://drive.google.com/uc?export=view&id=1jfGUuOb2W3lZmTxSlkov1uq4otR9DMHA", large: "https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2NDI3LnBuZw==/original/%2FT7kX8.png"}},
         {pgWidth: 1/3, w: 1919, h: 1079, url: {small: "https://drive.google.com/uc?export=view&id=1RUmpTIh_vFpOZhtDKnPmiRNIiWrVqTZ2", large: "https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2NDMzLnBuZw==/original/ly3ZG5.png"}},
         {pgWidth: 1/3, w: 1917, h: 1077, url: {small: "https://drive.google.com/uc?export=view&id=1LVjPUsc72TDH6bZkB3QRZr2qcupTVZz5", large: "https://img.itch.zone/aW1hZ2UvMTEwOTQwNC82NDA2NDA1LnBuZw==/original/bzU%2BLF.png"}},
      ],
      video: "https://www.youtube.com/embed/Z7R8HRskiFw"
   };

   const icarusInfo:ProjectInfo = {
      name: "Icarus",
      mainLink: "https://ptlux1517.itch.io/icarus",
      gitHubPage: false,
      blurb: <>dungeon/maze crawler with flight</>,
      images: [
         {pgWidth: 1/2, w: 1452, h: 817, url: {small: "https://drive.google.com/uc?export=view&id=1QYguAuYmIeJiCLaBG4Had4GEujKE4W2B", large: "https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3OTY0LnBuZw==/original/BG7%2Bm8.png"}},
         {pgWidth: 1/2, w: 1657, h: 934, url: {small: "https://drive.google.com/uc?export=view&id=1rr5INdtWPao4coO6WcS-aGdrPAKOCxRj", large: "https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NDk1LnBuZw==/original/KR%2FODw.png"}},
         {pgWidth: 1/3, w: 1656, h: 927, url: {small: "https://drive.google.com/uc?export=view&id=13Y1XVcHN9oNSzlvZ3XEWpzIqgRg9stgy", large: "https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NDYwLnBuZw==/original/t845d8.png"}},
         {pgWidth: 1/3, w: 1661, h: 932, url: {small: "https://drive.google.com/uc?export=view&id=1PviAhMThVft84Qgn3oNw0Ogg3FRv-UK0", large: "https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NTI4LnBuZw==/original/OXG%2BCD.png"}},
         {pgWidth: 1/3, w: 1662, h: 934, url: {small: "https://drive.google.com/uc?export=view&id=1PPBWuDZwP64gXhYZ7JUIX-QIoMMz_V46", large: "https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NDQ5LnBuZw==/original/BlAxW7.png"}},
         {pgWidth: 1/3, w: 1660, h: 931, url: {small: "https://drive.google.com/uc?export=view&id=1ebY9RfLPSO80wSvEYW1xbFg2ki4zm3_K", large: "https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NTE1LnBuZw==/original/GJAhjs.png"}},
         {pgWidth: 1/3, w: 1664, h: 934, url: {small: "https://drive.google.com/uc?export=view&id=1YKD6hruapLmXqJWszd4LrERuQM-2KzBO", large: "https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NTIxLnBuZw==/original/iFPRLd.png"}},
         {pgWidth: 1/3, w: 1662, h: 935, url: {small: "https://drive.google.com/uc?export=view&id=1fgArXv8C3AmCYcVmDPXt2pi0VPqd14su", large: "https://img.itch.zone/aW1hZ2UvMTA2NjU2My82MTA3NTc5LnBuZw==/original/a%2FC0Ow.png"}},
      ],
      video: "https://www.youtube.com/embed/dzEwrDTMOtI"
   };

   const portalHunterInfo:ProjectInfo = {
      name: "Portal Hunter",
      mainLink: "https://ptlux1517.itch.io/portal-hunter",
      gitHubPage: false,
      blurb: <>dungeon crawler with puzzles</>,
      images: [
         {pgWidth: 1/2, w: 873 , h: 491, url: {small: "https://drive.google.com/uc?export=view&id=1rbmK85AfLCrkJXf5F9rz6-mw9Ef525Gm", large: "https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5Njg5LnBuZw==/original/2o0OYt.png"}},
         {pgWidth: 1/2, w: 1526, h: 869, url: {small: "https://drive.google.com/uc?export=view&id=1rGiOumNAVer8dv6LUxhRPo6b6CLv2IFz", large: "https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NjkwLnBuZw==/original/xpCJnd.png"}},
         {pgWidth: 1/2, w: 1770, h: 993, url: {small: "https://drive.google.com/uc?export=view&id=14EJSTlaXZIj9WU3M8khTk8_2HFBhY52g", large: "https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzU3LnBuZw==/original/oYGR0x.png"}},
         {pgWidth: 1/2, w: 1770, h: 994, url: {small: "https://drive.google.com/uc?export=view&id=1NoeGBCwNjBF_DxM86WRZnO2-dgA9K_eM", large: "https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzQ4LnBuZw==/original/xVPl94.png"}},
         {pgWidth: 1/3, w: 1766, h: 995, url: {small: "https://drive.google.com/uc?export=view&id=1ZJowcUX4kqVoVNeaHxWRN06vnSXIdxag", large: "https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzYyLnBuZw==/original/yo7MZ%2F.png"}},
         {pgWidth: 1/3, w: 1771, h: 996, url: {small: "https://drive.google.com/uc?export=view&id=16wWlw_9gTyYhYXqDuBR8ZaECrqcbfC94", large: "https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzA3LnBuZw==/original/5IhAVH.png"}},
         {pgWidth: 1/3, w: 1769, h: 995, url: {small: "https://drive.google.com/uc?export=view&id=1rQ39cX__t6NNlyYto6TmjtY0mDu92dpn", large: "https://img.itch.zone/aW1hZ2UvMTA1NzEzNC82MDQ5NzE0LnBuZw==/original/PQgro8.png"}},
      ],
      video: "https://www.youtube.com/embed/qGv7wtGdXeM"
   };

   const asteroidEscapeInfo:ProjectInfo = {
      name: "Asteroid Escape",
      mainLink: "https://ptlux1517.itch.io/asteroid-escape",
      gitHubPage: false,
      blurb: <>space flight survival</>,
      images: [
         {pgWidth: 1/2, w: 1276, h: 719 , url: {small: "https://drive.google.com/uc?export=view&id=1LkZTmj-t6uoUHxOXR-yCFh1Bb8Nsz6oz", large: "https://img.itch.zone/aW1hZ2UvMTA0NjQ5OC81OTgxMzY0LnBuZw==/original/N8DyNS.png"}},
         {pgWidth: 1/2, w: 1578, h: 1019, url: {small: "https://drive.google.com/uc?export=view&id=1Bd4P3SAroIfZmGscGD9uVip-wuC2Twx-", large: "https://img.itch.zone/aW1hZ2UvMTA0NjQ5OC81OTgxNDE1LnBuZw==/original/ZRp4ZB.png"}},
         {pgWidth: 1/2, w: 2213, h: 1246, url: {small: "https://drive.google.com/uc?export=view&id=1HSbRlpX2Low5NqdeTDfs-r-AzYm0mw09", large: "https://img.itch.zone/aW1hZ2UvMTA0NjQ5OC81OTgxNDQ3LnBuZw==/original/LOVxb8.png"}},
         {pgWidth: 1/2, w: 2600, h: 1463, url: {small: "https://drive.google.com/uc?export=view&id=1T4ofTEhEMhdguJrxKThwfdRGv9vr224c", large: "https://img.itch.zone/aW1hZ2UvMTA0NjQ5OC81OTgxNDU2LnBuZw==/original/wApqIu.png"}},
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
         <li><span className="course">[Distributed Systems]</span> <GroupProjectIcon otherMemberCount={1}/> Distributed UUID Service (<a href="https://drive.google.com/file/d/11BraIymZ1J05fdrn4NM6JouudOxm--yY/view?t=3m2s">demo video<ExternalLinkIcon/></a>) <JavaIcon/><PicoCLIIcon/><DockerIcon/><AWSEC2Icon></AWSEC2Icon></li>
         <li><span className="course">[Distributed Systems]</span> <GroupProjectIcon otherMemberCount={1}/> Chat Server (<a href="https://drive.google.com/file/d/1I2BlwTOQ5t-fSL1uic-K6A6eUhBS0agJ/view?usp=sharing">demo video<ExternalLinkIcon/></a>) <JavaIcon/></li>
         <li><span className="course">[Databases]</span> Treasure Valley Library Management System <JavaIcon/><MySQLIcon/><JavaFXIcon/></li>
         <li><span className="course">[Programming Languages]</span> Interpreter <JavaIcon/></li>
         <li><span className="course">[Data Structures]</span> <GroupProjectIcon otherMemberCount={2}/> B-Tree Implementation <span className="faint">(for use on disk)</span> <JavaIcon/></li>
         <li className="continuation faint"> and Human Genome Length-k DNA Subsequence Frequency Analyzer</li>
      </ul>

      <div className="spacer"><span className="h2-bg"><h2>
         Midsize Class Projects
      </h2></span></div>
      <ul>
         <li><span className="course">[Operating Systems]</span> Keyboard Device Driver <CIcon/></li>
         <li><span className="course">[Operating Systems]</span> User-Level Thread Library <CIcon/></li>
         <li><span className="course">[Operating Systems]</span> Multi-Threaded Web Server <span className="faint">(bounded buffer problem)</span> <CIcon/></li>
         <li><span className="course">[Operating Systems]</span> Page Fault Handler <CIcon/></li>
         <li><span className="course">[Operating Systems]</span> Buddy System Memory Allocator <CIcon/></li>
         <li><span className="course">[Operating Systems]</span> Lottery Scheduler <CIcon/></li>
         <li><span className="course">[Intro to Systems Programming]</span> Implementation of the cat, grep, wc, sort, and ps Commands <CIcon/></li>
         <li><span className="course">[Theory of Computation]</span> Recursive Descent RegEx Parser <JavaIcon/></li>
         <li><span className="course">[Theory of Computation]</span> NFA to DFA Converter <JavaIcon/></li>
         <li><span className="course">[Algorithms]</span> Activity Node to Event Node Graph Converter with Critical Path Info <JavaIcon/></li>
         <li><span className="course">[Web Development]</span> Blogging Engine (<a href="https://drive.google.com/file/d/1BiPrF1FxNB2DEjuxYXh-nlAD04TJRm5K/view?usp=sharing">demo video<ExternalLinkIcon/></a>) <PHPIcon/><JSIcon/></li>
         <li><span className="course">[Software Engineering]</span> <GroupProjectIcon otherMemberCount={3}/> GitHub Bot <JSIcon/></li>
         <li><span className="course">[Software Engineering]</span> Open source mod: added toggleable notebook lines to <a href="https://www.jedit.org/">jEdit<ExternalLinkIcon/></a> text editor (<a href="https://drive.google.com/file/d/1IcczM9aLzmzkS_g4MNrW0IJp3jjvpiBH/view">demo video<ExternalLinkIcon/></a>) <JavaIcon/></li>
         <li className="continuation faint">(jEdit v5.6.0 consists of ~0.6K Java files and ~124 KLOC without comments)</li>
      </ul>

      <div className="spacer"><span className="h2-bg"><h2>
         Small Class Projects
      </h2></span></div>
      <ul>
         <li><span className="course">[Software Engineering]</span> Open source mod: added name to <a href="https://github.com/mucommander/mucommander">muCommander<ExternalLinkIcon/></a> splash screen (<a href="https://drive.google.com/file/d/1Xf05jkvP2iEcu3V4H0urLEi5VIqkcvwy/view">demo video<ExternalLinkIcon/></a>) <JavaIcon/></li>
         <li className="continuation faint">(muCommander v0.9.7-1 consists of ~1.7K Java files and ~166 KLOC without comments)</li>
         <li><span className="course">[Operating Systems]</span> Character Replacement Device Driver <CIcon/></li>
         <li><span className="course">[Operating Systems]</span> Parallel Merge Sort <CIcon/></li>
         <li><span className="course">[Algorithms]</span> 0-1 Knapsack DP Problem <JavaIcon/></li>
         <li><span className="course">[Algorithms]</span> Knight's Tour Problem <JavaIcon/></li>
         <li><span className="course">[Theory of Computation]</span> DFA <JavaIcon/></li>
         <li><span className="course">[Programming Languages]</span> .xlsx to .html Converter <AWKIcon/></li>
         <li><span className="course">[Programming Languages]</span> Meeting Participant Availability Tool <PrologIcon/></li>
         <li><span className="course">[Programming Languages]</span> Tree Search and Replace <SchemeIcon/></li>
         <li><span className="course">[Programming Languages]</span> Simple Banking System <SmalltalkIcon/><GoIcon/></li>
         <li><span className="course">[Programming Languages]</span> Cache <RustIcon/></li>
         <li><span className="course">[Data Structures]</span> Hash Table Implementation <JavaIcon/></li>
         <li><span className="course">[Data Structures]</span> Round Robin Scheduler with Max Heap <JavaIcon/></li>
      </ul>

      <div className="spacer"><span className="h2-bg"><h2>Hardware Class Projects</h2></span></div>
      <ul>
         <li><span className="course">[Microprocessors]</span> Robotic Arm Actuation Using Pulse Width Modulation with 7-Segment Angle Display <CIcon/><ASMIcon/></li>
         <li><span className="course">[Digital Systems]</span> Simon Game <XilinxIcon/><VerilogIcon/></li>
      </ul>
   </div></div></main>;
}
