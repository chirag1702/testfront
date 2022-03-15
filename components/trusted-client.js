import React from "react";
import Link from "next/link";
import { TrustClientData } from "@/data";

const TrustedClient = ({ extraClassName, trustclient }) => {
  const { image, title, text, url } = TrustClientData;
  return (
    <section className={`commonSection trustClient ${extraClassName}`}>
      {trustclient
        ? trustclient.map((element) => {
            return (
              <div key={element._id} className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="CL_content">
                      <img src={element.image_url} alt="" />
                      <div className="abc_inner">
                        <div className="row">
                          <div className="col-lg-5 col-sm-12 col-md-5"></div>
                          <div className="col-lg-7 col-sm-12 col-md-7">
                            <div className="abci_content">
                              <h2>{element.title}</h2>
                              <p>{element.subtitle}</p>
                              <Link href={element.button_url}>
                                <a className="common_btn red_bg">
                                  <span>{element.button_text}</span>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </section>
  );
};

export default TrustedClient;
