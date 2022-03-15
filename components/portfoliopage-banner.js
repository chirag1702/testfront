import React from "react";

const PortfolioPageBanner = ({ pageBanner }) => {
 
  return (

    <>
      {pageBanner?
       pageBanner.map((element) => {
        return (
          <section className="pageBanner" style={{
            backgroundImage: `url(${element.portfolio_image})` ,
            background:"gray",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
           }} >

            <div className="container" >
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner_content text-center">

                    <h2 >{element.portfolio_title}</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

        )
      }):""}



    </>
  );
};

export default PortfolioPageBanner;