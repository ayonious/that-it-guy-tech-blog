// this is to install code syntax highlighting
import "../../../node_modules/highlight.js/styles/railscasts.css";

import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { useContext } from "react";

import { Context as ThemeContext } from "../../Context/Theme/ThemeContext";
import Layout from "../Layout";
import PostDetails from "../PostDetails";
import {
  DateDivWrapper,
  ImageWrapper,
  PostTagDivWrapper,
  TagsDivWrapper,
  TemplateDivWrapper,
  TitleDivWrapper,
} from "./styles";

interface TemplateData {
  data: {
    mdx: {
      body: any;
      frontmatter: {
        title: string;
        date: string;
        slug: string;
        tags: string[];
        image: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      };
    };
  };
  children: any;
}

const PostTemplate = (props: TemplateData) => {
  const {
    frontmatter: {
      title,
      date,
      image: {
        childImageSharp: { gatsbyImageData: img },
      },
      tags,
    },
  } = props.data.mdx;

  const {
    state: { theme },
  } = useContext(ThemeContext);

  const seoProps = {
    title,
  };

  return (
    <Layout seoProps={seoProps}>
      <TemplateDivWrapper theme={theme}>
        <div>
          <DateDivWrapper>{date}</DateDivWrapper>
          <TitleDivWrapper>{title}</TitleDivWrapper>
          <TagsDivWrapper>
            {tags.map((tag, index) => (
              <PostTagDivWrapper key={index} theme={theme}>
                #{tag}
              </PostTagDivWrapper>
            ))}
          </TagsDivWrapper>
        </div>
        <ImageWrapper>
          <GatsbyImage image={img} alt="img" />
        </ImageWrapper>
        <PostDetails>
          <MDXProvider>{props.children}</MDXProvider>
        </PostDetails>
      </TemplateDivWrapper>
    </Layout>
  );
};

export const query = graphql`
  query getPost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        tags
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export default PostTemplate;
