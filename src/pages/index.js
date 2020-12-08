import React from 'react';
import './index.scss';
import { Button } from 'semantic-ui-react';
import BlogLayout from '../layouts/BlogLayout';

export default function Home() {
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

