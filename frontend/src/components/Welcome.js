import React from 'react';

const Welcome = () => (
  <div class="bg-light p-5 rounded-lg m-3">
    <h1 class="display-4">Images Gallery</h1>
    <p class="lead">
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <hr class="my-4" />
    <p>
      Unsplash é um site que prove imagens para uso gratuito e sem restrições
      comerciais e direitos de imagem, livre para o uso geral.
    </p>
    <a
      class="btn btn-primary"
      href="http://unsplash.com"
      target="_blank"
      role="button"
      rel="noreferrer"
    >
      Saiba mais
    </a>
  </div>
);

export default Welcome;
