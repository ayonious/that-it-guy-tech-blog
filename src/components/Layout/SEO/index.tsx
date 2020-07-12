import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

interface Props {
  description?: string;
  title?: string;
}

function SEO({ description, title }: Props) {
  const {
    site: {
      siteMetadata: { title: siteTitle, description: siteDescription },
    },
  } = useStaticQuery(query);

  const helmetDescription = description || siteDescription;
  const lang = "en";

  const htmlAttributes = { lang };

  return (
    <Helmet
      htmlAttributes={htmlAttributes}
      title={title || siteTitle}
      titleTemplate={`%s - ${siteTitle}`}
      meta={[
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `description`,
          content: helmetDescription,
        },
      ]}
    />
  );
}

export default SEO;
