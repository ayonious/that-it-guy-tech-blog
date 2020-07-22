// this is to install code syntax highlighting
import "../../../node_modules/highlight.js/styles/railscasts.css";

import { graphql } from "gatsby";
import Image from "gatsby-image";
import React, { useContext } from "react";

import { Context } from "../../Context/ThemeContext";
import Layout from "../Layout";
import PostDetails from "../PostDetails";
import StyledButton from "../StyledButton";
import {
  DateDivWrapper,
  PostTagDivWrapper,
  TagsDivWrapper,
  TemplateDivWrapper,
  TitleDivWrapper,
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
        <StyledButton to={`/`} theme={theme} title={"< back to Home Page"} />
        <div>
          <TitleDivWrapper>{title}</TitleDivWrapper>
          <DateDivWrapper>
            <span>{date}</span>
          </DateDivWrapper>
          <TagsDivWrapper>
            {tags.map((tag, index) => (
              <PostTagDivWrapper key={index} theme={theme}>
                #{tag}
              </PostTagDivWrapper>
            ))}
          </TagsDivWrapper>
        </div>
        <Image fluid={img} />
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
