import React from "react";
import { AboutOneData } from "@/data";
const AboutOne = ({ aboutone }) => {
  // const { sectionContent, gallery, counter } = AboutOneData;
  return (
    <section className="commonSection">
      <div className="container">
        <div className="row">
          {
            aboutone ?
              aboutone.map((element) => {
                return (
                  <>
                    <div className="col-lg-6 col-sm-12 col-md-6">
                      <h4 className="sub_title">{element.subtitle}</h4>
                      <h2 className="sec_title">{element.title1}</h2>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6">
                      <div className="agency_img1">
                        <img src={element.upper_image} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                      <div className="agency_img2">
                        <img src={element.lower_image} alt="" />
                      </div>
                      <div className="compay_date">
                        <h5>{element.subtitle2}</h5>
                        <h2>{element.title2}</h2>
                      </div>
                    </div>
                  </>
                )

              }):""
          }

        </div>
      </div>
    </section>
  );
};

export default AboutOne;
