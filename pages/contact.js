import React,{useState,useEffect} from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import ContactPageBanner from "@/components/contactpage-banner";
import ContactInfos from "@/components/contact-infos";
import GoogleMap from "@/components/google-map";
import ContactForm from "@/components/contact-form";
import SearchContextProvider from "context/search-context";
import MenuContextProvider from "context/menu-context";
import HeaderOne from "@/components/header-one";
import api from "helper/Api";
const ContactPage = () => {
 
  const [contactpageBanner, setContactPageBanner] = useState([]);
  useEffect(() => {
    api.post("/getPageBanner").then(res => {
      console.log("getPageBanner",res.data.data);
      setContactPageBanner(res.data.data);
    });
  }, []) 

  const [contactForm, setContactForm] = useState([]);
  useEffect(()=>{
    api.post('/getContactUs').then(res =>{
      console.log('contactForm',res.data.data);
      setContactForm(res.data.data);
    })
  },[])

  const[footer,setfooter] = useState([]);
    useEffect(()=>{
      api.post('/getFooter').then(res =>{
        console.log("Footer",res.data.data);
        setfooter(res.data.data);
      })
    },[])



  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Contact Page">
          <HeaderOne />
          <ContactPageBanner title="Contact Us" pageBanner = {contactpageBanner}/>
          <ContactForm contactForm={contactForm} />
          <GoogleMap contactForm={contactForm} extraClass="contact-page" />
          {/* <ContactInfos /> */}
          <Footer footer={footer}  />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ContactPage;
