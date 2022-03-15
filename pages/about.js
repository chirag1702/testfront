import React,{useState, useEffect} from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import AboutPageBanner from "@/components/aboutpage-banner";
import AboutOne from "@/components/about-one";
import CallToActionOne from "@/components/call-to-action-one";
import TeamCarousel from "@/components/team-carousel";
import VideoOne from "@/components/video-one";
import SubscribeForm from "@/components/subscribe-form";
import TestimonialsOneCarousel from "@/components/testimonials-carousel";
import FeatureTabOne from "@/components/feature-tab-1";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import api from "helper/Api";
const AboutPage = () => {


  const [pagebanner, setPageBanner] = useState([]);
  useEffect(() => {
    api.post("/getPageBanner").then(res => {
      console.log("getPageBanner",res.data.data);
      setPageBanner(res.data.data);
    });
  }, []) 

  const[aboutone,setAboutone] = useState([]);
  useEffect(()=>{
    api.post("/getGetToKnow").then(res =>{
      // console.log("aboutone",res.data.data);
      setAboutone(res.data.data);
    })
  },[])

  const[testimonial,setTestimonial] = useState([]);
  useEffect(()=>{
    api.post('/getTestimonialHead').then(res =>{
      // console.log('testimonial',res.data.data);
      setTestimonial(res.data.data);
    })
  },[])

  const[testimonialCrousal,setTestimonialCrousal] = useState([]);
  useEffect(()=>{
    api.post('/getTestimonialCrousal').then(res =>{
      // console.log('testimonialCrousal',res.data.data);
      setTestimonialCrousal(res.data.data);

    })
  },[])

  const[teamcarousel, setTeamcarousel] = useState([]);
  useEffect(()=>{
    api.post('/getHomeTeam').then(res =>{
      // console.log("teamcarousel",res.data.data);
      setTeamcarousel(res.data.data);
    })
  },[]);
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
        <Layout PageTitle="About Us Page">
          <HeaderOne />
          <AboutPageBanner pageBanner = {pagebanner} />
          <AboutOne aboutone ={aboutone}  />
          <TestimonialsOneCarousel testimonialHeader ={testimonial} testimonialCrousal={testimonialCrousal}/>
          {/* <SubscribeForm /> */}
          <TeamCarousel teamcarousel={teamcarousel}    />
          {/* <VideoOne /> */}
          <FeatureTabOne />
          {/* <CallToActionOne extraClassName="ready" /> */}
          <Footer footer={footer} />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default AboutPage;
