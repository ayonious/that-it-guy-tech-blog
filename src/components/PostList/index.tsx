import * as React from "react";

import HeaderTagsList from "../HeaderTagsList";
import PostCard from "../PostCard";
import { PostsSectionWrapper } from "./styles";

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
  allTags: string[];
}

const PostList = ({ posts, totalVisible, allTags }: Props) => {
  const visiblePosts = posts.slice(0, totalVisible);
  return (
    <PostsSectionWrapper>
      <HeaderTagsList allTags={allTags} />
      {visiblePosts.map(({ node }, index) => (
        <PostCard key={index} post={node} />
      ))}
    </PostsSectionWrapper>
  );
};

export default PostList;
