import React, { useEffect, useRef, PropsWithChildren, FC } from "react";

import { ContentDivWrapper } from "./styles";

const PostDetails: FC<PropsWithChildren> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anchors: HTMLAnchorElement[] = [];
    contentRef.current?.querySelectorAll("h1").forEach((heading) => {
      const hash = (heading.textContent || "").toLowerCase().split(" ").join("-");
      const anchor = document.createElement("a");
      anchor.href = `#${hash}`;
      anchor.id = hash;
      anchor.className = "header-anchor";
      anchor.textContent = "#";
      heading.prepend(anchor);
      anchors.push(anchor);
    });
    return () => anchors.forEach((anchor) => anchor.remove());
  }, []);

  return <ContentDivWrapper ref={contentRef}>{children}</ContentDivWrapper>;
};

export default PostDetails;
