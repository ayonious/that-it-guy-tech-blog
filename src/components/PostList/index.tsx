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
          gatsbyImageData: any;
        };
      };
    };
    excerpt: string;
  };
}

interface Props {
  posts: Post[];
  totalVisible: number;
}

const PostList = ({ posts, totalVisible }: Props) => {
  const visiblePosts = posts.slice(0, totalVisible);

  return (
    <PostsSectionWrapper>
      <HeaderTagsList />
      {visiblePosts.map(({ node }, index) => (
        <PostCard
          key={index}
          post={node}
          blogUrl={`blogs/${node.frontmatter.slug}`}
        />
      ))}
    </PostsSectionWrapper>
  );
};

export default PostList;
