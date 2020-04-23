function initCarousel() {
  let position = 0;
  let slideWidth = document.querySelector('.carousel__slide').offsetWidth;
  let sliderTape = document.querySelector('.carousel__inner');
  let carouselArrow = document.querySelector('.carousel__arrow_left');
  let prevPushedArrow = carouselArrow;

  hideArrow();

  document.querySelector('.carousel').onclick = moveSlide;

  function moveSlide(event) {
    carouselArrow = event.target.closest('.carousel__arrow');
    if (!carouselArrow) return;

    position = calculatePosition();
    hideArrow();

    prevPushedArrow = carouselArrow;
    sliderTape.style.transform = `translateX(${position}px)`;
  }
  function calculatePosition() {
    return (carouselArrow.matches('.carousel__arrow_right')) ?
      Math.max(position - slideWidth, -slideWidth * 3) :
      Math.min(position + slideWidth, 0);
  }
  function hideArrow() {
    prevPushedArrow.style.display = '';
    if (position >= 0 || position <= -slideWidth * 3) carouselArrow.style.display = 'none';
  }
}
