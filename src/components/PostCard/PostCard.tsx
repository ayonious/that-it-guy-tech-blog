import React from "react";
import { Link } from "gatsby";
import { CardArticleWrapper, InfoDivWrapper, CardImageWrapper } from "./styles";
import { LinkDivWrapper } from "../../css/commonstyles";

import ThemeContext from "../../Context/ThemeContext";

import Image from "gatsby-image";
import TagsList from "../TagsList/TagsList";

interface PostCardData {
  post: {
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
    excerpt: string;
  };
  key: number;
}

const PostCard = ({ post }: PostCardData) => {
  const { title, date, slug, tags } = post.frontmatter;
  const img = post.frontmatter.image.childImageSharp.fluid;

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <CardArticleWrapper theme={theme}>
          <CardImageWrapper>
            <Image fluid={img} />
          </CardImageWrapper>
          <InfoDivWrapper theme={theme}>
            <div>
              <h2>{title}</h2>
              <h6>
                <span> {date} </span>
              </h6>
              <TagsList tags={tags} />
              <p>{post.excerpt}</p>
              <LinkDivWrapper theme={theme}>
                <Link to={`blogs/${slug}`}>Read...</Link>
              </LinkDivWrapper>
            </div>
          </InfoDivWrapper>
        </CardArticleWrapper>
      )}
    </ThemeContext.Consumer>
  );
};

export default PostCard;
