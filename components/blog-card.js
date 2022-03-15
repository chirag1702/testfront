import React,{useState,useEffect} from "react";
import Link from "next/link";
import api from "helper/Api";
import moment from "moment";

const BlogCard = ({ data }) => {

  const[blogcard ,setBlogcard] = useState([]);
  useEffect(()=>{
    api.post("/getBlog").then(res =>{
      // console.log("getBlog",res.data.data);
      setBlogcard(res.data.data);
    })


  },[])
  // const { url } = data;
  return (

    <div className="latestBlogItem">
      {
        blogcard.map((element)=>{
          return(
            <>
              <div className="lbi_thumb">
                <img src={element.blog_image} alt="" />
              </div>
              <div className="lbi_details">
              {/* <Link href={url}>
                <a className="lbid_date">{date}</a>
              </Link> */}
              <p className="lbid_date">{moment(element.createdAt).format('DD MMMM')}</p>
              <h2 >
              {/* <Link href={url}>
              <a>{title}</a>
              </Link> */}
              {element.title}
              </h2>
              <Link href='/'>
              <a className="learnM">Learn More</a>
              </Link>
        </div>




            </>
          )
        })
      }
    
    
      
    </div>
  );
};

export default BlogCard;
