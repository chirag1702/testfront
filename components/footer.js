import React from "react";
import { LogoImage } from "@/data";

const Footer = ({ footer }) => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        {
          footer.map((element) => {
            return (
              <>
                <div className="row">
                  <div className="col-lg-5 col-sm-6 col-md-5">
                    <aside className="widget aboutwidget">
                      <a href="/">
                        <img style={{width:"185px"}} src={element.image_url} alt="" />
                      </a>
                      <p>
                        {element.footer_description}
                      </p>
                    </aside>
                  </div>
                  <div className="col-lg-4 col-sm-4 col-md-4">
                    <aside className="widget contact_widgets">
                      <h3 className="widget_title">Contact</h3>
                      <p>
                      {element.contact}
                      </p>
                      <p>P: 666 888 000   </p>
                      <p>
                        E: <a href="#">needhelp@meipaly.com</a>
                      </p>
                    </aside>
                  </div>
                  <div className="col-lg-3 col-sm-2 col-md-3">
                    <aside className="widget social_widget">
                      <h3 className="widget_title">social</h3>
                      <ul>
                        <li>
                          <a href={element.instagram_link}>
                          <i class="fa fa-instagram"></i>Instagram
                          </a>
                        </li>
                        <li>
                          <a href={element.facebook_link}>
                            <i className="fa fa-facebook-square"></i>Facebook
                          </a>
                        </li>
                        <li>
                          <a href={element.linkdin_link}>
                          <i class="fa fa-linkedin"></i>Linkedin
                          </a>
                        </li>
                      </ul>
                    </aside>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-sm-12 text-center">
                    {/* <div className="copyright">
                      © copyright {new Date().getFullYear()} by{" "}
                      <a href="#">Layerdrops.com</a>
                    </div> */}
                    <div className="copyright">
                     {element.copyright_text}
                      {/* <a href="#">Layerdrops.com</a> */}
                    </div>
                  </div>
                </div>
              </>

            )
          })
        }

      </div>
    </footer>
  );
};

export default Footer;
