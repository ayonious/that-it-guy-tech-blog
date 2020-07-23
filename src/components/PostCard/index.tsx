import Image from "gatsby-image";
import React, { useContext, useEffect, useCallback } from "react";

import { Context } from "../../Context/ThemeContext";
import StyledButton from "../StyledButton";
import TagsList from "../TagsList";
import {
  CardArticleWrapper,
  CardImageWrapper,
  InfoDivWrapper,
  InfoDateWrapper,
  InfoHeadlineWrapper,
  InfoExccerptWrapper,
} from "./styles";

export interface PostCardData {
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

  const elementId = `postid-${slug}`;

  const {
    state: { theme },
  } = useContext(Context);

  const inView = () => {
    if (
      document.getElementById(elementId).getBoundingClientRect().bottom <=
      window.innerHeight
    ) {
      console.log(`in view ${elementId}`);
      document.removeEventListener("scroll", inView);
    }
  };

  useEffect(() => {
    // Throttle: each 1 second make sure only one event is fired
    document.addEventListener("scroll", inView);
  });

  return (
    <CardArticleWrapper theme={theme} id={elementId}>
      <CardImageWrapper>
        <Image fluid={img} />
      </CardImageWrapper>
      <InfoDivWrapper theme={theme}>
        <InfoHeadlineWrapper>{title}</InfoHeadlineWrapper>
        <InfoDateWrapper>
          <span> {date} </span>
        </InfoDateWrapper>
        <TagsList tags={tags} addFilter={addFilter} />
        <InfoExccerptWrapper>{excerpt}</InfoExccerptWrapper>
        <StyledButton
          to={`blogs/${slug}`}
          theme={theme}
          title={"Read More..."}
        />
      </InfoDivWrapper>
    </CardArticleWrapper>
  );
};

export default PostCard;
