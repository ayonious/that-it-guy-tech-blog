import * as React from "react";
import {
  CenterWrapper,
  PostsSectionWrapper,
  PageTitleWrapper,
  PageSubTitleWrapper,
} from "./styles";
import PostCard from "../PostCard";
import HeaderTagsList from "../HeaderTagsList";

export interface Post {
  node: {
    frontmatter: {
      title: string;
      slug: string;
      date: string;
      tags: string[];
      image: {
        childImageSharp: {
          fluid: any;
        };
      };
    };
    excerpt: string;
  };
}

interface Props {
  posts: Post[];
  totalVisible: number;
  addFilter: any;
  removeFilter: any;
  filterTags: string[];
}

const PostList = ({
  posts,
  totalVisible,
  filterTags,
  addFilter,
  removeFilter,
}: Props) => {
  const visiblePosts = posts.slice(0, totalVisible);
  return (
    <PostsSectionWrapper>
      <HeaderTagsList tags={filterTags} removeFilter={removeFilter} />
      {visiblePosts.map(({ node }, index) => (
        <PostCard key={index} post={node} addFilter={addFilter} />
      ))}
    </PostsSectionWrapper>
  );
};

export default PostList;
