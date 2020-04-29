import * as React from "react";
import { CenterWrapper, PostsSectionWrapper } from "./styles";
import PostCard from "../PostCard/PostCard";

interface Post {
  node: any;
}

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => {
  return (
    <PostsSectionWrapper>
      <h1>That IT Guy</h1>
      <h4>personal Tech blog</h4>
      <CenterWrapper>
        {posts.map(({ node }, index) => {
          return <PostCard key={index} post={node} />;
        })}
      </CenterWrapper>
    </PostsSectionWrapper>
  );
};

export default PostList;
