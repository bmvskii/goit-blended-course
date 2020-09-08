// prevButton -> activeSlideRef.previousElementSibling -> slider__item--active
// nextButton -> activeSlideRef.nextElementSibling -> slider__item--active

// previousElementSibling || nextElementSibling === null

document.addEventListener('DOMContentLoaded', () => {
    const prevSliderButtonRef = document.querySelector('.slider__button--prev');
    const nextSliderButtonRef = document.querySelector('.slider__button--next'); 
    
    let activeSlideRef = document.querySelector('.slider__item--active');

    const moveSlide = (direction) => {
        const isPrev = direction === 'prev';

        let nextActiveSlideRef = isPrev ? activeSlideRef.previousElementSibling : activeSlideRef.nextElementSibling; 

        if (!nextActiveSlideRef) {
            nextActiveSlideRef = isPrev ? 
                document.querySelector('.slider__item:last-child') : 
                document.querySelector('.slider__item:first-child');
        } 

        activeSlideRef.classList.remove('slider__item--active');
        nextActiveSlideRef.classList.add('slider__item--active');

        activeSlideRef = nextActiveSlideRef;
    }

    const onPrevButtonClickHandler = () => moveSlide('prev');

    const onNextButtonClickHandler = () => moveSlide('next');

    const onKeyDownHandler = (event) => {
        const { code } = event;

        switch (code) {
            case 'ArrowRight': {
                moveSlide('next');
                break;
            }
            case 'ArrowLeft': {
                moveSlide('prev');
                break;
            }
        }
    }

    window.addEventListener('keydown', onKeyDownHandler)

    prevSliderButtonRef.addEventListener('click', onPrevButtonClickHandler);
    nextSliderButtonRef.addEventListener('click', onNextButtonClickHandler);
});