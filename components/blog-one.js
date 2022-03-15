import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Paginations from "@/components/paginations";
// import { BlogData } from "@/data";
import BlogCard from "@/components/blog-card";

const BlogOne = () => {
  return (
    <section className="commonSection blogPage">
      <Container>
        <Row>
            <Col lg={4} sm={12} md={6} >
              <BlogCard />
            </Col>
          
        </Row>
        {/* <Paginations /> */}
      </Container>
    </section>
  );
};

export default BlogOne;
