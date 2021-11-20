import React from 'react';
import { Button } from 'react-bootstrap';

const Welcome = () => (
  <div class="p-3 jumbotron">
    <h1 class="display-4">Images Gallery</h1>
    <p class="lead">
      This is a simple application that retrieve photos from Unsplash API. In
      order to start enter any search term in the input field.
    </p>
    <hr class="my-4" />
    <p>
      Unsplash é um site que prove imagens para uso gratuito e sem restrições
      comerciais e direitos de imagem, livre para o uso geral.
    </p>
    <Button variant="primary" href="https://unsplash.com" target="_blank">
      Saiba mais
    </Button>
  </div>
);

export default Welcome;
