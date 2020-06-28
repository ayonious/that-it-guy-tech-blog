import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import PostDetails from "../components/PostDetails";
import React, { useContext } from "react";
import {
  TemplateDivWrapper,
  PostTagDivWrapper,
  TitleDivWrapper,
  DateDivWrapper,
  TagsDivWrapper,
} from "../css/postTemplate";
import { LinkDivWrapper } from "../css/commonstyles";

import { Context } from "../Context/ThemeContext";
import Layout from "../components/Layout";

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
  const { title, date, image, tags } = data.mdx.frontmatter;
  const { body } = data.mdx;
  const img = image.childImageSharp.fluid;
  const { theme } = useContext(Context);

  return (
    <Layout>
      <TemplateDivWrapper theme={theme}>
        <LinkDivWrapper theme={theme}>
          <Link to="/">{"< back to Home Page"}</Link>
        </LinkDivWrapper>
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
