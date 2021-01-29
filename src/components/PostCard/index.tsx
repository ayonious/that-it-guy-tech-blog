import Image from "gatsby-image";
import { throttle } from "lodash";
import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

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
  } = props;

  const {
    state: { theme },
  } = useContext(ThemeContext);

  const inputRef = useRef(null);
  const [visible, changeVisible] = useState(false);

  const scrollListener = throttle(() => {
    if (!inputRef.current) {
      return;
    }
    const { clientHeight } = document.documentElement;
    const top = inputRef.current.getBoundingClientRect().top;
    const scrollPxFromBottom = clientHeight - top;

    if (scrollPxFromBottom > 20) {
      changeVisible(true);
      document.removeEventListener("scroll", scrollListener, true);
    }
  }, 500);

  useEffect(() => {
    scrollListener(); // initially without scroll even make some articles visible
    document.addEventListener("scroll", scrollListener, true);
    return () => document.removeEventListener("scroll", scrollListener, true);
  });

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
            <StyledButton
              to={`blogs/${slug}`}
              theme={theme}
              title={"Read More..."}
            />
          </ButtonWrapper>
        </InfoDivWrapper>
      </CardArticleWrapper>
    </SlidingComponent>
  );
};

export default PostCard;
