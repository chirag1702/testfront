import React, {useState, useEffect} from "react";
import Layout from "@/components/layout";
import CallToActionOne from "@/components/call-to-action-one";
import Footer from "@/components/footer";
import BlogHome from "@/components/blog-home";
import ParallaxOne from "@/components/parallax-1";
import ClientCarouselOne from "@/components/client-carousel-one";
import TeamCarousel from "@/components/team-carousel";
import FunfactOne from "@/components/funfact-one";
import TrustedClient from "@/components/trusted-client";
import PortfolioHome from "@/components/portfolio-home";
import SubscribeForm from "@/components/subscribe-form";
import ServiceTwo from "@/components/service-two";
import AboutTwo from "@/components/about-two";
import VideoTwo from "@/components/video-two";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import SliderOne from "@/components/slider-one";
import api from "helper/Api";
import { SliderOneData } from "@/data";
import axios from "axios";
import {homeService} from "helper/HomeApi";

const HomeOne = () => {


  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    api.post("/getHeroSlider").then(res => {
      // console.log("1",res.data.data);
      setSliderData(res.data.data);
    });
  }, []) 


  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
  api.post("/getHomeServices").then(res => {
    // console.log("2",res.data.data);
    setServiceData(res.data.data);
  });
} , [])

  const[aboutData, setAboutData] = useState([]);
  useEffect(() => {
    api.post('/getHomeAbout').then(res => {
      // console.log("3",res.data.data);
      setAboutData(res.data.data);
    });
  } , [])

  const[videoData, setVideoData] = useState([]);
  useEffect(() => {
    api.post('/getHomeExp').then(res =>{
      // console.log("4",res.data.data);
      setVideoData(res.data.data);
    })
  } , [])

  const[portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    api.post('getHomePortfolio').then(res =>{
      // console.log("5",res.data.data);
      setPortfolio(res.data.data);
    })
  } , [])


  const[funfact, setFunfact] = useState([]);
  useEffect(() => {
    api.post('getFunfact').then(res =>{
      // console.log("5",res.data.data);
      setFunfact(res.data.data);
    })
  }, [])

  const[client, setClient] = useState([]);
  useEffect(()=>{
    api.post('/getHomeTrustedClient').then(res =>{
      // console.log("6",res.data.data);
      setClient(res.data.data);
    })

  },[])
  const[teamcarousel, setTeamcarousel] = useState([]);
  useEffect(()=>{
    api.post('/getHomeTeam').then(res =>{
      // console.log("teamcarousel",res.data.data);
      setTeamcarousel(res.data.data);
    })
  },[]);

  
 
  const[clientcarousel , setClientcarousel] = useState([]);
  useEffect(()=>{
      api.post('/getHomeClient').then(res =>{
        // console.log("getHomeClient",res.data.data);
        setClientcarousel(res.data.data);
      })
    },[]);
    const [carouselimg, setCarouselimg] = useState([]);
    useEffect(()=>{
      api.post("/getClientCrousal").then(res =>{
        console.log("getClientCarousel",res.data.data);
        setCarouselimg(res.data.data);
      })
    },[]);


    const[ parallaxOne , setParallxOne] = useState([]);
    useEffect(()=>{
      api.post('/getQuote').then(res =>{
        // console.log("9",res.data.data);
        setParallxOne(res.data.data);
      })
    },[]);
    
    const[footer,setfooter] = useState([]);

    useEffect(()=>{
      api.post('/getFooter').then(res =>{
        // console.log("Footer",res.data.data);
        setfooter(res.data.data);
      })
    },[])





  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Home One">
          <HeaderOne />
          <SliderOne slider={sliderData} />
          <ServiceTwo service={serviceData} />
          <AboutTwo about={aboutData} />
          <VideoTwo Video={videoData} />
          {/* <SubscribeForm /> */}
          <PortfolioHome portfolio={portfolio} />
          <FunfactOne Funfact={funfact} />
          <TrustedClient trustclient={client} />
          <TeamCarousel teamcarousel={teamcarousel}     />
          <ClientCarouselOne clientcarousel={clientcarousel} carouselimg={carouselimg}  />
          <ParallaxOne parallaxOne = {parallaxOne}  />
          <BlogHome  />
          {/* <CallToActionOne extraClassName="ready" /> */}
          <Footer footer={footer} />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;
