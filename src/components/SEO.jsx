import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url }) => {
  const siteTitle = title ? `${title} | EnVision Foundation` : 'EnVision Foundation | Learning Beyond Books';
  const defaultDesc = "EnVision is a youth-lead platform dedicated to educate and empower underprivileged children by creating opportunities for learning, creativity, and self-expression.";
  const siteDesc = description || defaultDesc;
  
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDesc} />
      <meta name="keywords" content={keywords || "NGO, youth leadership, empower children, education, EnVision Foundation, India NGO, volunteering"} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://envisionfoundation.org${url || '/'}`} />
      <meta property="og:image" content="https://envisionfoundation.org/favicon.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content="https://envisionfoundation.org/favicon.jpg" />
      <link rel="canonical" href={`https://envisionfoundation.org${url || '/'}`} />
    </Helmet>
  );
};

export default SEO;
