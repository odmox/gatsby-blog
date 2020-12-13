import React from 'react';
import { Button } from 'semantic-ui-react';
import { useStaticQuery, graphql } from 'gatsby';

import BlogLayout from '../layouts/BlogLayout';
import './index.scss';

export default function Home() {

  const result = useStaticQuery(graphql`
    query {
      allStrapiPost{
        nodes {
          id
          title
          url
          content
          createdAt
          miniature{
            publicURL
          }
        }
      }
    }`
  );

  console.log(result);
  return (
    <BlogLayout>
      <h1> Estamos en la home del blog </h1>
      <h2> Hola </h2>
      <p>Esto es un parro</p>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </BlogLayout>
  )
}

