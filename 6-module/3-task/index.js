import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.position = 0;

    this.elem = document.createElement('div');
    this.elem.className = 'carousel';
    this.elem.innerHTML =
      `<div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
     </div>
     <div class="carousel__arrow carousel__arrow_left" style="display: none">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
     </div>
     <div class="carousel__inner">${this.createStringSliders()}</div>`;

    this.elem.addEventListener('click', event => {
      let elem = event.target;
      if (elem.matches('.carousel__button')) {
        let id = elem.closest('.carousel__slide').dataset.id;
        this.generateEvent(id);
        return;
      };
      let arrow = elem.closest('.carousel__arrow');
      if (arrow) this.moveSlide(arrow);
    })
  }

  createStringSliders() {
    return this.slides.reduce((prev, item) => {
      return prev += `<div class="carousel__slide" data-id="${item.id}">
                  <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
                  <div class="carousel__caption">
                    <span class="carousel__price">€${item.price.toFixed(2)}</span>
                    <div class="carousel__title">${item.name}</div>
                    <button type="button" class="carousel__button">
                      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                    </button>
                  </div>
                  </div>`;
    }, '');
  }

  generateEvent(id) {
    this.elem.dispatchEvent(new CustomEvent("product-add", {
      detail: id,
      bubbles: true,
    }));
  }

  moveSlide(carouselArrow) {
    this.slideWidth = this.elem.querySelector('.carousel__slide').offsetWidth;
    this.position = (carouselArrow.matches('.carousel__arrow_right')) ?
      Math.max(this.position - this.slideWidth, -this.slideWidth * (this.slides.length - 1)) :
      Math.min(this.position + this.slideWidth, 0);

    this.elem.querySelector('.carousel__inner').style.transform = `translateX(${this.position}px)`;
    this.hideArrow(carouselArrow);
  }
  
  hideArrow(arrow) {
    this.elem.querySelectorAll('.carousel__arrow').forEach(item => item.style.display = '');
    if (this.position >= 0 || this.position <= -this.slideWidth * (this.slides.length - 1)) arrow.style.display = 'none';
  }
}
