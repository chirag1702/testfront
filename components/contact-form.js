import React from "react";
import { ContactFormTitle } from "@/data";
import api from "helper/Api";

const ContactForm = ({contactForm}) => {

  const { subTitle, title, description } = ContactFormTitle;
  
  const submitform = async (e) => {
    e.preventDefault();
    const fname =  document.getElementById('f_name').value;
    const lname =  document.getElementById('l_name').value
    const mobile =  document.getElementById('phone').value;
    const message =  document.getElementById('con_message').value;
    const email =  document.getElementById('email').value;
    const result= await  api.post('/addContactUsForm',{fname:fname,lname:lname,mobile:mobile,email:email,message:message});
    alert("Your message has been sent successfully");
    document.getElementById('f_name').value="";
    document.getElementById('l_name').value="";
    document.getElementById('phone').value="";
    document.getElementById('con_message').value="";
    document.getElementById('email').value="";
    
  

  }
  return (
    <section className="commonSection ContactPage">
      <div className="container">
        <div className="row">
          {
            contactForm?
              contactForm.map((element)=>{
                return(
                  <div key={element._id} className="col-lg-12 text-center">
                    <h4 className="sub_title">{element.form_subtitle}</h4>
                    <h2 className="sec_title">{element.form_title}</h2>
                    <p className="sec_desc">{element.form_text}</p>
                  </div>
                )
              }):""
          }
         
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
            <form
            onSubmit={submitform}
              action="#"
              method="post"
              className="contactFrom"
              id="contactForm"
            >
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="text"
                    name="f_name"
                    id="f_name"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="text"
                    name="l_name"
                    id="l_name"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="col-lg-12 col-sm-12">
                  <textarea
                    className="input-form required"
                    name="con_message"
                    id="con_message"
                    placeholder="Write Message"
                  ></textarea>
                </div>
              </div>
              <button
                className="common_btn red_bg"
                type="submit"
                id="con_submit"
            
              >
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
