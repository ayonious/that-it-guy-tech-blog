// this is to install code syntax highlighting
import { graphql } from "gatsby";
import Image from "gatsby-image";
import { MDXProvider } from "@mdx-js/react";
import React, { useContext } from "react";
import "../../../node_modules/highlight.js/styles/railscasts.css";
import { Context as ThemeContext } from "../../Context/Theme/ThemeContext";
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
      body: any;
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
    };
  };
  children: any;
}

const MyH1 = (props) => <h1 style={{ color: `tomato` }} {...props} />;
const MyParagraph = (props) => (
  <p style={{ fontSize: "18px", lineHeight: 1.6 }} {...props} />
);

const components = {
  h1: MyH1,
  p: MyParagraph,
};

const postTemplate = (props: TemplateData) => {
  const {
    frontmatter: {
      title,
      date,
      image: {
        childImageSharp: { fluid: img },
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

  console.log("children", props);

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
        <MDXProvider components={components}>
          <PostDetails>{props.data.mdx.body}</PostDetails>
        </MDXProvider>
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
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default postTemplate;
