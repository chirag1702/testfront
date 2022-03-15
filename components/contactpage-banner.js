import React from "react";

const ContactPageBanner = ({ pageBanner }) => {
 
  return (

    <>
      {pageBanner.map((element) => {
        return (
          <section className="pageBanner" style={{
            backgroundImage: `url(${element.contact_image})` ,
            background:"gray",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
           }} >

            <div className="container" >
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner_content text-center">

                    <h2 >{element.contact_title}</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

        )
      })}



    </>
  );
};

export default ContactPageBanner;