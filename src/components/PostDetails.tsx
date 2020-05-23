import { MDXRenderer } from "gatsby-plugin-mdx";
import $ from "jquery";
import React, { Component } from "react";

import { ContentDivWrapper } from "../css/postTemplate";

interface Props {
  body: any;
}

class PostDetails extends Component<Props, any> {
  componentDidMount() {
    // adding hashed urls
    $("h1").wrapInner(`<span class="temporary_magic"></span>`);

    $(".temporary_magic").each((ind, val) => {
      const hashUrlContent = val.textContent.toLowerCase().split(" ").join("-");
      val.insertAdjacentHTML(
        "beforebegin",
        `<a href="#${hashUrlContent}" id="${hashUrlContent}" class="header-anchor" >#</a`
      );
    });

    $("span").removeClass("temporary_magic");
  }

  render() {
    const { body } = this.props;

    return (
      <ContentDivWrapper>
        <MDXRenderer>{body}</MDXRenderer>
      </ContentDivWrapper>
    );
  }
}

export default PostDetails;
