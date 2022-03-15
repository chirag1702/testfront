import React,{useState,useEffect} from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import BlogPageBanner from "@/components/blogpage-banner";
import BlogOne from "@/components/blog-one";
import SearchContextProvider from "context/search-context";
import MenuContextProvider from "context/menu-context";
import HeaderOne from "@/components/header-one";
import api from "helper/Api";



const BlogPage = () => {

  const [blogpageBanner, setBlogPageBanner] = useState([]);
  useEffect(() => {
    api.post("/getPageBanner").then(res => {
      console.log("getPageBanner",res.data.data);
      setBlogPageBanner(res.data.data);
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
        <Layout PageTitle="Blog 01 Page">
          <HeaderOne />
          <BlogPageBanner title="Blog 01" name="Blog" pageBanner = {blogpageBanner}/>
          <BlogOne />
          <Footer footer={footer} />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default BlogPage;
