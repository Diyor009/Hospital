window.addEventListener('DOMContentLoaded', function() {
// classesSlider----------------------------
class sliderClass {
    constructor (title, src, name, profession, text, parentSelector, 
        ...classes) {
        this.title = title;
        this.src = src;
        this.name = name;
        this.profession = profession;
        this.text = text;
        this.perent = document.querySelector(parentSelector);     
        this.classes = classes;   
    }
    render() {
        const element = document.createElement('div');
        this.classes.forEach(className => element.classList.add(className));
        element.innerHTML = `
            <h2 class="slider__title">${this.title}</h2>
            <div class="slider__items">
                <div class="slider__content">
                    <img src=${this.src} alt="image" class="slider__content-img">
                    <div class="slider__content-item">
                    <h4 class="slider__content-name">
                        ${this.name}
                    </h4>
                    <div class="slider__content-profession">
                        ${this.profession}
                    </div>
                    </div>
                </div>
                <p class="slider__text">
                    ${this.text}
                </p>
            </div>
        `;
        this.perent.append(element);
    };
}
new sliderClass(
    'What our customer are saying',
    './images/slider-1.jpg',
    'Edward Newgate',
    'Founder Circle',
    'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls',
    ".slider__inner",
    'slider__item'
).render();
new sliderClass(
    'What our customer are saying',
    './images/slider-1.jpg',
    'Edward Newgate',
    'Founder Circle',
    'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls',
    ".slider__inner",
    'slider__item'
).render();
new sliderClass(
    'What our customer are saying',
    './images/slider-1.jpg',
    'Edward Newgate',
    'Founder Circle',
    'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls',
    ".slider__inner",
    'slider__item'
).render();
// class Article------------------------
class articlesClass {
    constructor(src, title, text, parentSelector, ...classes) {
        this.src = src;
        this.title = title;
        this.text = text;
        this.parent = document.querySelector(parentSelector);
        this.classes = classes;
    }
    render() {
        const elem = document.createElement('div');
        this.classes.forEach(className => elem.classList.add(className));
        elem.innerHTML = `        
            <img src=${this.src} alt="article" class="article__item-img">
            <h4 class="article__item-title">
                ${this.title}
            </h4>
            <p class="article__item-text">
                ${this.text}
            </p>
            <a href="#" class="article__item-link">
            Read more
            </a>        
        `;
        this.parent.append(elem);
    };    
}
new articlesClass(
    './images/slider-1.jpg',
    'Disease detection, check up in the laboratory',
    'In this case, the role of the health laboratory is very important to do a disease detection...',
    '.article__inner',
    'article__item'    
).render();
new articlesClass(
    './images/slider-1.jpg',
    'Disease detection, check up in the laboratory',
    'In this case, the role of the health laboratory is very important to do a disease detection...',
    '.article__inner',
    'article__item'    
).render();
new articlesClass(
    './images/slider-1.jpg',
    'Disease detection, check up in the laboratory',
    'In this case, the role of the health laboratory is very important to do a disease detection...',
    '.article__inner',
    'article__item'    
).render();


// slicy---------------------------
    const header = document.querySelector('#header'),
      intro = document.querySelector('#intro');
    checkScrole();
    
function checkScrole(){
    window.addEventListener("scroll", ()=> {
        if(window.pageYOffset >= intro.scrollHeight){
            header.classList.add('slicy');
        } else {
            header.classList.remove('slicy');
        }
    });
}
// slider--------------------------------
const slides = document.querySelectorAll('.slider__item'),
      prev = document.querySelector('.slider__prev'),
      next = document.querySelector('.slider__next'),
      slidesWrapper = document.querySelector('.slider'),
      slidesField = document.querySelector('.slider__inner'),
      width = window.getComputedStyle(slidesWrapper).width;
let offset = 0;
let slideIndex = 1;

slidesField.style.width = 100 * slides.length + '%';
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';
slidesWrapper.style.overflow = 'hidden';

slides.forEach(slide => {
    slide.style.width = width;
});

// slider-dots--------------------------------------------------
const indicators = document.querySelector('.dots__list'), 
        dots = [];    
for (let i =0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('dot');
    if (i == 0) {
        dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
}
let autoplay = setInterval(() => {
    if(offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++
    }
    sliderOpacity()
}, 4000);
next.addEventListener('click', () => {
    if(offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++
    }
    sliderOpacity()
});
    
prev.addEventListener('click', () => {
    if(offset == 0) {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    if ( slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--
    }
    sliderOpacity();

});

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');
        slideIndex = slideTo;
        offset = +width.slice(0, width.length - 2) * (slideTo - 1);
        slidesField.style.transform = `translateX(-${offset}px)`;      
        sliderOpacity()
    });
});

function sliderOpacity(){
    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = '1';
} 

});