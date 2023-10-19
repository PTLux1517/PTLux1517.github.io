import React from 'react';

interface Props {
   buttonContent: React.ReactElement;
   innerContent: React.ReactElement;
}

export default function Collapsible({buttonContent,innerContent}:Props) {
   return <>
      <button className="collapsible no-style-button" onClick={({currentTarget}) => {currentTarget.classList.toggle("active");}}>{
         buttonContent
      }</button>
      <div className="collapsible-content"><div>{
         innerContent
      }</div></div>
   </>;
}