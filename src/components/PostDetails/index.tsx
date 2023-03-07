import $ from "jquery";
import React, { useEffect, PropsWithChildren, FC } from "react";

import { ContentDivWrapper } from "./styles";

const PostDetails: FC<PropsWithChildren> = ({ children }) => {
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

  return <ContentDivWrapper>{children}</ContentDivWrapper>;
};

export default PostDetails;
