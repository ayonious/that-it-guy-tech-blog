import Image from "gatsby-image";
import React, { useContext } from "react";

import { Context as ThemeContext } from "../../Context/Theme/ThemeContext";
import SlidingComponent from "../SlidingComponent";
import StyledButton from "../StyledButton";
import TagsList from "../TagsList";
import {
  ButtonWrapper,
  CardArticleWrapper,
  CardImageWrapper,
  FlexRowWrapper,
  HeadlineAndDateWrapper,
  InfoDateWrapper,
  InfoDivWrapper,
  InfoExcerptWrapper,
  InfoHeadlineWrapper,
  MiniCardImageWrapper,
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
  blogUrl: string;
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
    blogUrl,
  } = props;

  const {
    state: { theme },
  } = useContext(ThemeContext);

  return (
    <SlidingComponent>
      <CardArticleWrapper theme={theme}>
        <CardImageWrapper>
          <Image fluid={img} />
        </CardImageWrapper>
        <InfoDivWrapper theme={theme}>
          <FlexRowWrapper>
            <MiniCardImageWrapper>
              <Image fluid={img} />
            </MiniCardImageWrapper>
            <HeadlineAndDateWrapper>
              <InfoHeadlineWrapper>{title}</InfoHeadlineWrapper>
              <InfoDateWrapper>{date}</InfoDateWrapper>
            </HeadlineAndDateWrapper>
          </FlexRowWrapper>
          <TagsList tags={tags} />
          <InfoExcerptWrapper>{excerpt}</InfoExcerptWrapper>
          <ButtonWrapper>
            <StyledButton to={blogUrl} theme={theme} title={"Read More..."} />
          </ButtonWrapper>
        </InfoDivWrapper>
      </CardArticleWrapper>
    </SlidingComponent>
  );
};

export default PostCard;
