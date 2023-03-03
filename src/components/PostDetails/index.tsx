import $ from "jquery";
import React, { useEffect } from "react";

import { ContentDivWrapper } from "./styles";

interface Props {
  children: any;
}

const PostDetails = ({ children }: Props) => {
  useEffect(() => {
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
  }, []);

  console.log("children", children);
  return <ContentDivWrapper>{children}</ContentDivWrapper>;
};

export default PostDetails;
