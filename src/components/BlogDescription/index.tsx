// this is to install code syntax highlighting
import { graphql } from "gatsby";
import Image from "gatsby-image";
import React, { useContext } from "react";
import "../../../node_modules/highlight.js/styles/railscasts.css";
import { Context } from "../../Context/Theme/ThemeContext";
import Layout from "../Layout";
import PostDetails from "../PostDetails";
import {
  DateDivWrapper,
  PostTagDivWrapper,
  TagsDivWrapper,
  TemplateDivWrapper,
  TitleDivWrapper,
  ImageWrapper,
} from "./styles";

interface TemplateData {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
        slug: string;
        tags: string[];
        image: {
          childImageSharp: {
            fluid: any;
          };
        };
      };
      body: any;
    };
  };
}

const postTemplate = ({ data }: TemplateData) => {
  const {
    frontmatter: {
      title,
      date,
      image: {
        childImageSharp: { fluid: img },
      },
      tags,
    },
    body,
  } = data.mdx;

  const {
    state: { theme },
  } = useContext(Context);

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
          <Image fluid={img} />
        </ImageWrapper>
        <PostDetails body={body} />
      </TemplateDivWrapper>
    </Layout>
  );
};

export const query = graphql`
  query getPost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        tags
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`;

export default postTemplate;
