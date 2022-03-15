import React from "react";

const GoogleMap = ({ extraClass,contactForm }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      { 
        contactForm?
         contactForm.map((element)=>{
           return(
            <iframe
            title="template google map"
            src={element.map_src}
            className={`map__${extraClass}`}
            allowFullScreen
            ></iframe>
           )
         }):""

      }
      
    </div>
  );
};

export default GoogleMap;
