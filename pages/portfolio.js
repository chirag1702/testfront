import React,{useState,useEffect } from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PortfolioPageBanner from "@/components/portfoliopage-banner";
import PortfolioOne from "@/components/portfolio-one";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import HeaderOne from "@/components/header-one";
import api from "helper/Api";

const PortfolioPage = () => {

  const [portfolioPageBanner, setPortfolioPageBanner] = useState([]);
  useEffect(() => {
    api.post("/getPageBanner").then(res => {
      console.log("getPageBanner",res.data.data);
      setPortfolioPageBanner(res.data.data);
    });
  }, []) 

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
        <Layout PageTitle="Portfolio 01 Page">
          <HeaderOne />
          <PortfolioPageBanner title="Portfolio 01" name="Portfolio" pageBanner = {portfolioPageBanner} />
          <PortfolioOne />
          <Footer footer={footer} />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PortfolioPage;
