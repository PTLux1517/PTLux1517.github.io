import React, {useEffect,useRef,useState} from 'react';

export default function Transcript() {

   const imgElem = useRef<HTMLImageElement>(null);
   const [loading, setLoading] = useState(true);
   const [zoom, setZoom] = useState(0.5);

   useEffect(() => {
      imgElem?.current?.style?.setProperty("width",`${9900*zoom}px`);
   }, [zoom, imgElem]);

   return <main id="transcript">
      <div id="slider-container">
         <label htmlFor="zoom">zoom: </label>
         <input id="zoom-slider"
                name="zoom"
                type="range"
                min="0.1"
                max="2.0"
                step="0.01"
                defaultValue={0.5}
                onChange={e => setZoom(Number(e.currentTarget.value))}
                tabIndex={0} />
      </div>
      {loading && <div id="loading-text">Loading transcript...</div>}
      <img ref={imgElem} id="transcript-image"
         src="https://drive.google.com/uc?export=view&id=1eGdaJYd9aIsgFdNsBALQpGiObwP--f7N"
         alt="college transcript"
         style={{width: "4950px"}}
         onLoad={() => setLoading(false)}
      />
   </main>;
}
