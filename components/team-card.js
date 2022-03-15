import React from "react";
import api from "helper/Api";


const TeamCard = ({ data }) => {

  

  const { image, name, designation, url,  } = data;
  return (
    <div className="singleTM">
      <div className="tm_img">
        <img src={image} alt={name} />
        <div className="tm_overlay">
          <div className="team_social">
            {/* {socials.map(({ name, url }, index) => (
              <a >
                <span>{name}</span>
              </a>
            ))} */}
          </div>
        
        </div>
      </div>
      <div className="detail_TM">
        <h5>{name}</h5>
        <h6>{designation}</h6>
      </div>
    </div>
  );
};

export default TeamCard;
