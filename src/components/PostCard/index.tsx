import Image from "gatsby-image";
import React, { useContext } from "react";

import { Context } from "../../Context/ThemeContext";
import StyledButton from "../StyledButton";
import TagsList from "../TagsList";
import { CardArticleWrapper, CardImageWrapper, InfoDivWrapper } from "./styles";

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
  addFilter: any;
}

const PostCard = (props: PostCardData) => {
  const {
    post: {
      frontmatter: {
        title,
        date,
        slug,
        tags,
        image: {
          childImageSharp: { fluid: img },
        },
      },
      excerpt,
    },
    addFilter,
  } = props;

  const {
    state: { theme },
  } = useContext(Context);

  return (
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
          <TagsList tags={tags} addFilter={addFilter} />
          <p>{excerpt}</p>
          <StyledButton
            to={`blogs/${slug}`}
            theme={theme}
            title={"Read More..."}
          />
        </div>
      </InfoDivWrapper>
    </CardArticleWrapper>
  );
};

export default PostCard;
