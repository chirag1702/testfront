import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import BlogCard from "@/components/blog-card";
import { BlogHomeSection, BlogData } from "@/data";

const BlogHome = ({bloghome}) => {
  return (
    <section className="commonSection blog">
      <Container>
        <Row>
          {
            bloghome ?
              bloghome.map((element)=>{
                return(
                  <Col key={element._id} lg={12} className="text-center">
                    <SectionTitle data={BlogHomeSection} />
                      <h4 className="sub_title">{}</h4>
                      <h2 className="sec_title black">{}</h2>
                      <p className="sec_desc color_aaa">{}</p>
                  </Col>
                )
              }):""
          }
          
        </Row>
        <Row>
           {

           }
            <Col lg={4} sm={12} md={6} >
              <BlogCard  />
            </Col>
        
        </Row>
      </Container>
    </section>
  );
};

export default BlogHome;
