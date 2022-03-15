import React from "react";

const AboutPageBanner = ({ pageBanner }) => {
  return (

    <>
      {
        pageBanner ?
        pageBanner.map((element) => {
        return (
          <section className="pageBanner" style={{
            backgroundImage: `url(${element.about_image})` ,
            // background:"#f5f5f5",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
           }} >

            <div className="container" >
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner_content text-center">

                    <h2 style={{color:"black"}} >{element.about_title}</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

        )
      }):""
      }



    </>
  );
};

export default AboutPageBanner;
