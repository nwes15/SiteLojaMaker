import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-slide">
        <img src="https://s3-sa-east-1.amazonaws.com/redesagradosul/public/images/cultura-maker.png" alt="Slide 1" />
      </div>
      <div className="carousel-slide">
        <img src="https://escoladainteligencia.com.br/wp-content/uploads/2019/08/Veja-como-levar-a-cultura-maker-para-a-sala-de-aula-da-sua-escola.jpg" alt="Slide 2" />
      </div>
      <div className="carousel-slide">
        <img src="https://th.bing.com/th/id/OIP.TKFN9f5kO9uhFkZJhMQc_wHaEH?w=313&h=180&c=7&r=0&o=5&pid=1.7" alt="Slide 3" />
      </div>
    </div>
  );
};

export default Carousel;
