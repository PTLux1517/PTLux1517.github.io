import React,{useState} from 'react';


export default function Resume() {

   const [loading, setLoading] = useState(true);

   return <main id="resume">
      {loading && <div id="loading-text">Loading resume...</div>}
      <iframe id="resume-iframe" onLoad={() => setLoading(false)}
         src="https://docs.google.com/document/d/e/2PACX-1vQYrdf-oYrn4lFSC0UgRDvsz6BGnPxUm7ikPULbYhTGpuj0gFrlHERlviEXHyf5_WqBp947bOcvyUwv/pub?embedded=true"
      />
      <a id="download-link" href="https://docs.google.com/document/d/1UQYTMX99Q6WEKXumc7ZMm-dNJuSGAfTCiKJMFAR6Bg4/export?format=pdf">Download PDF</a>
   </main>;
}