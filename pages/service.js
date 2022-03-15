import React,{useState,useEffect} from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import ServicePageBanner from "@/components/service-page-banner";
import ServiceOne from "@/components/service-one";
import ServiceTwo from "@/components/service-two";
import ServiceThree from "@/components/service-three";
import FunfactOne from "@/components/funfact-one";
import TrustedClient from "@/components/trusted-client";
import ClientCarouselOne from "@/components/client-carousel-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import api from "helper/Api";

const ServicePage = () => {

  const [servicePageBanner, setServicePageBanner] = useState([]);
  useEffect(() => {
    api.post("/getPageBanner").then(res => {
      console.log("getPageBanner",res.data.data);
      setServicePageBanner(res.data.data);
    });
  }, []) 


  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
  api.post("/getHomeServices").then(res => {
    // console.log("2",res.data.data);
    setServiceData(res.data.data);
  });
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

  const[clientcarousel , setClientcarousel] = useState([]);
  useEffect(()=>{
      api.post('/getHomeClient').then(res =>{
        // console.log("8",res.data.data);
        setClientcarousel(res.data.data);
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
        <Layout PageTitle="Services Page">
          <HeaderOne />
          <ServicePageBanner title={"Service"} pageBanner = {servicePageBanner} />
          <ServiceOne />
          <ServiceTwo service={serviceData}  />
          <ServiceThree />
          <FunfactOne Funfact={funfact}  />
          <TrustedClient trustclient={client}  extraClassName="pb_120" />
          <ClientCarouselOne clientcarousel={clientcarousel}  />
          <Footer footer={footer} />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServicePage;
