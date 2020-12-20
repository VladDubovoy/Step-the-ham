"use strict";

let count = 0;
function createId(){
    return count++;
}

let tabs = [
    {
        photo: "./img/webdesign.jpeg",
        text: "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing websites for desktop browsers; however, since the mid-2010s, design for mobile and tablet browsers has become ever-increasingly important. Two of the most common methods for designing websites that work well both on desktop and mobile are responsive and adaptive design. In responsive design, content moves dynamically depending on screen size; in adaptive design, the website content is fixed in layout sizes that match common screen sizes",
        id: createId(),
        alt: "web design",
    },
    {
        photo: "./img/graphicdesign.jpeg",
        text: "Overall, your mission—as far as graphic design goes in UX and UI design—is to display information harmoniously. You should ensure that beauty and usability go hand in hand, and therefore your design can discreetly carry your organization’s ideals to your users. When you establish a trustworthy visual presence, you hint to users that you know what they want to do – not just because you’ve arranged aesthetically pleasing elements that are where your users expect to find them, or help them intuit their way around, but because the values which your designs display mirror theirs, too. Your visual content will quickly decide your design’s fate, so be sure not to overlook the slightest trigger that may put users off.",
        id: createId(),
        alt: "graphic design",
    },
    {
        photo: "./img/onlinesupport.jpeg",
        text: "Customer service is the support you offer your customers — both before and after they buy and use your products or services — that helps them have an easy and enjoyable experience with you. Offering amazing customer service is important if you want to retain customers and grow your business. Today’s customer service goes far beyond the traditional telephone support agent. It’s available via email, web, text message, and social media. Many companies also provide self-service support, so customers can find their own answers at any time day or night. Customer support is more than just providing answers; it’s an important part of the promise your brand makes to its customers.",
        id: createId(),
        alt: "customer support",
    },
    {
        photo: "./img/appdesign.png",
        text: "To put it in very broad terms, app designers are in charge of making an app look good, while developers make it work correctly. Mobile app design encompasses both the user interface (UI) and user experience (UX). Designers are responsible for the overall style of the app, including things like the colour scheme, font selection, and the types of buttons and widgets the user will use. So, where do you start? At the beginning.",
        id: createId(),
        alt: "app design",
    },
    {
        photo: "./img/onlinemarketing.jpeg",
        text: "Online marketing is a set of tools and methodologies used for promoting products and services through the internet. Online marketing includes a wider range of marketing elements than traditional business marketing due to the extra channels and marketing mechanisms available on the internet. Online marketing is also known as internet marketing, web marketing, or digital marketing. It includes several branches such as social media marketing (SMM), search engine optimization (SEO), pay-per-click advertising (PPC), and search engine marketing (SEM).",
        id: createId(),
        alt: "digital marketing",
    },
    {
        photo: "./img/seo.jpeg",
        text: "SEO stands for Search Engine Optimization, which is the practice of increasing the quantity and quality of traffic to your website through organic search engine results. Search engines such as Google and Bing use bots to crawl pages on the web, going from site to site, collecting information about those pages and putting them in an index. Next, algorithms analyze pages in the index, taking into account hundreds of ranking factors or signals, to determine the order pages should appear in the search results for a given query.",
        id: createId(),
        alt: "seo service",
    },
];

// TABS Services

const servicesList = document.querySelector(".services__list");
const servicesTabs = document.querySelector(".services__tabs");

servicesList.addEventListener("click", e => {
        document.querySelector(".active__item").classList.remove("active__item");
        e.target.classList.add("active__item");
        servicesTabs.classList.remove("animation");
        function a(){
            servicesTabs.classList.add("animation");
        }
        setTimeout(a, 100);
        changeTab(e.target.value);
        
});

function changeTab(num = 0){
    servicesTabs.innerHTML = `<img src="${tabs[num].photo}" class="tab__photo" alt="${tabs[num].alt}" width="192" height="139"/>
                              <p class="tab__text">${tabs[num].text}</p>`;
}
changeTab();

// TABS Filter
let filter = [
    {
        photo: "./img/webdesign5.jpg",
        alt: "web design",
        id: createId(),
        text: "Web Design",
        value: 2,
    },
    {
        photo: "./img/landingpage2.jpg",
        alt: "landing page",
        id: createId(),
        text: "Landing Page",
        value: 3,
    },
    {
        photo: "./img/wordpress6.jpg",
        alt: "wordpress",
        id: createId(),
        text: "Wordpress",
        value: 4,
    }, 
    {
        photo: "./img/graphicdesign7.jpg",
        alt: "graphic design",
        id: createId(),
        text: "Graphic Design",
        value: 1,
    },
    {
        photo: "./img/wordpress3.jpg",
        alt: "wordpress",
        id: createId(),
        text: "Wordpress",
        value: 4,
    },
    {
        photo: "./img/landingpage1.jpg",
        alt: "landing page",
        id: createId(),
        text: "Landing page",
        value: 3,
    },
    {
        photo: "./img/graphicdesign5.jpg",
        alt: "graphic design",
        id: createId(),
        text: "Graphic Design",
        value: 1,
    },
    {
        photo: "./img/webdesign6.jpg",
        alt: "web design",
        id: createId(),
        text: "Web Design",
        value: 2,
    },
    {
        photo: "./img/landingpage4.jpg",
        alt: "landing page",
        id: createId(),
        text: "Landing Page",
        value: 3,
    },
    {
        photo: "./img/graphicdesign8.jpg",
        alt: "graphic design",
        id: createId(),
        text: "Graphic Design",
        value: 1,
    },
    {
        photo: "./img/graphicdesign9.jpg",
        alt: "graphic design",
        id: createId(),
        text: "Graphic Design",
        value: 1,
    },
    {
        photo: "./img/webdesign3.jpg",
        alt: "web design",
        id: createId(),
        text: "Web Design",
        value: 2,
    },
    {
        photo: "./img/graphicdesign3.jpg",
        alt: "graphic design",
        id: createId(),
        text: "Graphic Design",
        value: 1,
    },
    {
        photo: "./img/graphicdesign1.jpg",
        alt: "graphic design",
        id: createId(),
        text: "Graphic Design",
        value: 1,
    },
    {
        photo: "./img/graphicdesign4.jpg",
        alt: "graphic design",
        id: createId(),
        text: "Graphic Design",
        value: 1,
    },
    {
        photo: "./img/webdesign1.jpg",
        alt: "web design",
        id: createId(),
        text: "Web Design",
        value: 2,
    },
    {
        photo: "./img/graphicdesign11.jpg",
        alt: "graphic design",
        id: createId(),
        text: "Graphic Design",
        value: 1,
    },
    {
        photo: "./img/wordpress4.jpg",
        alt: "wordpress",
        id: createId(),
        text: "Wordpress",
        value: 4,
    },
    {
        photo: "./img/webdesign2.jpg",
        alt: "web design",
        id: createId(),
        text: "Web Design",
        value: 2,
    },
    {
        photo: "./img/graphicdesign6.jpg",
        alt: "graphic design",
        id: createId(),
        text: "Graphic Design",
        value: 1,
    },
    {
        photo: "./img/webdesign4.jpg",
        alt: "web design",
        id: createId(),
        text: "Web Design",
        value: 2,
    },
    {
        photo: "./img/graphicdesign2.jpg",
        alt: "graphic design",
        id: createId(),
        text: "Graphic Design",
        value: 1,
    },
    {
        photo: "./img/wordpress10.jpg",
        alt: "wordpress",
        id: createId(),
        text: "Wordpress",
        value: 4,
    },
    {
        photo: "./img/webdesign7.jpg",
        alt: "web design",
        id: createId(),
        text: "Web Design",
        value: 2,
    },
    {
        photo: "./img/wordpress8.jpg",
        alt: "wordpress",
        id: createId(),
        text: "Wordpress",
        value: 4,
    },
    {
        photo: "./img/graphicdesign12.jpg",
        alt: "graphic design",
        id: createId(),
        text: "Graphic Design",
        value: 1,
    },
    {
        photo: "./img/graphicdesign10.jpg",
        alt: "graphic design",
        id: createId(),
        text: "Graphic Design",
        value: 1,
    },
    {
        photo: "./img/landingpage3.jpg",
        alt: "landing page",
        id: createId(),
        text: "Landing Page",
        value: 3,
    },
    {
        photo: "./img/landingpage5.jpg",
        alt: "landing page",
        id: createId(),
        text: "Landing Page",
        value: 3,
    },
    {
        photo: "./img/wordpress7.jpg",
        alt: "wordpress",
        id: createId(),
        text: "Wordpress",
        value: 4,
    },
    {
        photo: "./img/wordpress5.jpg",
        alt: "wordpress",
        id: createId(),
        text: "Wordpress",
        value: 4,
    }, 
    {
        photo: "./img/landingpage7.jpg",
        alt: "landing page",
        id: createId(),
        text: "Landing Page",
        value: 3,
    },
    {
        photo: "./img/wordpress1.jpg",
        alt: "wordpress",
        id: createId(),
        text: "Wordpress",
        value: 4,
    },
    {
        photo: "./img/wordpress2.jpg",
        alt: "wordpress",
        id: createId(),
        text: "Wordpress",
        value: 4,
    },
    {
        photo: "./img/landingpage6.jpg",
        alt: "landing page",
        id: createId(),
        text: "Landing Page",
        value: 3,
    },
    {
        photo: "./img/wordpress9.jpg",
        alt: "wordpress",
        id: createId(),
        text: "Wordpress",
        value: 4,
    },
];

const filterList = document.querySelector(".amazing-work__list");
const filterTabs = document.querySelector(".amazing-work__tabs");
const loadMoreContainer = document.querySelector(".load-more__container");
let counter = 12;

function loadMore(){ 
    filterDrawAnimation();
    counter += 12;
    setTimeout(createFilter, 2000);
    setTimeout(removeAnimationFilter, 2000);
    
}

function addButton(){
    loadMoreContainer.innerHTML = `<button class="load-more__btn" onclick="loadMore()">Load more</button>`;
    if(counter >= filter.length - 1){
        removeButton()
    }
}
addButton();

function removeButton(){
    loadMoreContainer.innerHTML = ``;
}

function filterDrawAnimation(){
    loadMoreContainer.innerHTML = `<div class="load-more__animation">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>`;
}

function drawImages(e){
    return (`<div class="filter__photo animation__element">
                <img  class="filter__image" src=${e.photo} alt="${e.alt}" width="290" height="206"/>
                <div class="filter__backside">
                    <div class="filter__link__container">
                        <a href="#void" class="filter__link__circle">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="filter__link__chain" fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759142 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883685 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" fill="#1FDAB5"/>
                            </svg>
                        </a>
                        <a href="#void" class="filter__link__circle">
                            <span class="filter__link__square"></span>
                        </a>
                    </div>
                    <p class="filter__text">Create Design</p>
                    <h3 class="filter__subtitle">${e.text}</h3>
                </div>
            </div>`)
}

function createFilter(value = 0){
    switch(value){
        case 0: 
        addButton()
            filterTabs.innerHTML = filter
            .map((e, i)=> {
                if(i < counter){
                    return drawImages(e)
                        }})
            .join("");
            break;
        default: 
        counter = 12,
        removeButton(),
            filterTabs.innerHTML = filter
            .map(e => {
                if(value === e.value){
                    return drawImages(e)
                }
            })
            .join("");
    }
}
createFilter();

function addAnimationFilter(){
    let filterPhoto = document.querySelectorAll(".filter__photo");
    filterPhoto.forEach(e => e.classList.remove("animation"));
    function b(){
        filterPhoto.forEach(e => e.classList.add("animation"));
    }
    setTimeout(b, 100);
}

function removeAnimationFilter(){
    document.querySelectorAll(".filter__photo").forEach(e => e.classList.remove("animation__element"));
}

filterList.addEventListener("click", e => {
    if(e.target.value + 1){
        document.querySelector(".current__item").classList.remove("current__item");
        e.target.classList.add("current__item");
        createFilter(+e.target.value);
        addAnimationFilter();
    } 
});

// Gallery JS
let gallery = [
    {
        photo: "./img/gallery1.jpg",
        alt: "house",
        id: createId(),
        width: "373",
        height: "263",
    },
    {
        photo: "./img/gallery2.jpg",
        alt: "moscow city",
        id: createId(),
        width: "373",
        height: "263",
    },
    {
        photo: "./img/gallery3.jpg",
        alt: "office",
        id: createId(),
        width: "373",
        height: "290",
    },
    {
        photo: "./img/gallery4.jpg",
        alt: "new york city",
        id: createId(),
        width: "373",
        height: "380",
    },
    {
        photo: "./img/gallery5.jpg",
        alt: "interior",
        id: createId(),
        width: "373",
        height: "247",
    },
    {
        photo: "./img/gallery6.jpg",
        alt: "building",
        id: createId(),
        width: "373",
        height: "254",
    },
    {
        photo: "./img/gallery7.jpg",
        alt: "night city",
        id: createId(),
        width: "373",
        height: "210",
    },
    {
        photo: "./img/gallery8.jpg",
        alt: "house",
        id: createId(),
        width: "373",
        height: "231",
    },
    {
        photo: "./img/gallery9.jpg",
        alt: "building",
        id: createId(),
        width: "373",
        height: "388",
    },
    {
        photo: "./img/gallery10.jpg",
        id: createId(),
        alt: "office center",
        width: "373",
        height: "252",
    },
    {
        photo: "./img/gallery11.jpg",
        alt: "new york city",
        id: createId(),
        width: "373",
        height: "252",
    },
    {
        photo: "./img/gallery12.jpg",
        alt: "miami",
        id: createId(),
        width: "373",
        height: "213",
    },
    {
        photo: "./img/gallery13.jpg",
        alt: "burj al arab",
        id: createId(),
        width: "373",
        height: "236",
    },
    {
        photo: "./img/gallery14.jpg",
        alt: "dubai marina",
        id: createId(),
        width: "373",
        height: "213",
    },
    {
        photo: "./img/gallery15.jpg",
        alt: "scandinavia",
        id: createId(),
        width: "373",
        height: "213",
    },
    {
        photo: "./img/gallery16.jpg",
        alt: "Pragua",
        id: createId(),
        width: "373",
        height: "284",
    },
    {
        photo: "./img/gallery17.jpg",
        alt: "scandinavia",
        id: createId(),
        width: "373",
        height: "241",
    },
    {
        photo: "./img/gallery18.jpg",
        alt: "architecture",
        id: createId(),
        width: "373",
        height: "236",
    },
];

const galleryList = document.querySelector(".gallery__list");
const galleryLoadMore = document.querySelector(".gallery__load-more");
let galleryCounter = 9;

function loadMorePhotos(){
    drawAnimation();
    setTimeout(loadPhotos, 2000);
};

function loadPhotos(){
    galleryCounter += 9;
    drawPhoto();
    if(galleryCounter >= gallery.length - 1){
        removeBtn()
    };
    galleryList.classList.add("gallery__list-2"); 
}

function drawPhoto(){
    galleryList.innerHTML = gallery
    .map((e, i) => {
        if(i < galleryCounter){
            return `<li class="gallery__item">
                        <img src=${e.photo} class="gallery__photo" width=${e.width} height=${e.height} alt="${e.alt}"/>
                    </li>`
        }
    })
    .join("");
    
}      
drawPhoto();

function drawAnimation(){
    galleryLoadMore.innerHTML = `<div class="load-more__animation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>`;
}

function drawBtn(){
    galleryLoadMore.innerHTML = `<button class="load-more__btn" onclick="loadMorePhotos()">Load more</button>`;
}
drawBtn();

function removeBtn(){
    galleryLoadMore.innerHTML = "";
}

// SLIDER
let slider = [
    {
        photo: "./img/slider-mohamedalvari.jpg",
        alt: "Mohamed Alvari UX Designer",
        id: createId(),
        name: "Mohamed Alvari",
        job: "UX Designer",
    },
    {
        photo: "./img/slider-kimmadison.jpg",
        alt: "Kim Madison HR",
        id: createId(),
        name: "Kim Madison",
        job: "Human Resources",
    },
    {
        photo: "./img/slider-mikespencer.jpg",
        alt: "Mike Spencer Front-End",
        id: createId(),
        name: "Mike Spencer",
        job: "Front-End Developer",
    },
    {
        photo: "./img/slider-calvinjerrard.jpg",
        alt: "Calvin Jerrard PM",
        id: createId(),
        name: "Calvin Jerrard",
        job: "Project Manager",
    },
    {
        photo: "./img/slider-jackdorsey.jpg",
        alt: "Jack Dorsey QA",
        id: createId(),
        name: "Jack Dorsey",
        job: "Automated QA",
    },
    {
        photo: "./img/slider-tracyanderson.jpg",
        alt: "Tracy Anderson Wed Designer",
        id: createId(),
        name: "Tracy Anderson",
        job: "Web Designer",
    },
    {
        photo: "./img/slider-andytyler.jpg",
        alt: "Andy Tyler Front-End",
        id: createId(),
        name: "Andy Tyler",
        job: "Front-End Developer",
    },
];

const upperSliderTab = document.querySelector(".upper__slider__tab");
const lowerSliderContainer = document.querySelector(".lower__slider__container");
const lowerSliderTab = document.querySelector(".lower__slider__tab");
let sliderNum = 0;

function addPlus(){
    sliderNum++
    if(sliderNum > slider.length - 1){
        sliderNum = 0
    }
}

function addMinus(){
    sliderNum--
    if(sliderNum < 0){
       sliderNum = slider.length - 1
    }
}

function goPlus(){
    addPlus()
    addUpperPhoto()
    addLowerPhoto()
    document.querySelector(".lower__slider__container").classList.remove("lower__slider__left");
}

function goMinus(){
    addMinus()
    addUpperPhoto()
    addLowerPhoto()
    document.querySelector(".lower__slider__container").classList.remove("lower__slider__right");
}

function goAnimationPlus(){
    setTimeout(goPlus, 500);
    document.querySelector(".lower__slider__container").classList.add("lower__slider__left");
}

function goAnimationMinus(){
    setTimeout(goMinus, 500);
    document.querySelector(".lower__slider__container").classList.add("lower__slider__right");
}

function plusIndex(arg, num){
    let numCount = arg + num;
    if(numCount > slider.length - 1){
        switch(numCount){
            case (slider.length):
                numCount = 0;
                break;
            case (slider.length + 1):
                numCount = 1;
                break;
        }
    }
    return numCount;
}

function minusIndex(arg, num){
    let numCount = arg - num;
    if(numCount < 0){
        switch(numCount){
            case -1:
                numCount = slider.length - 1;
                break;
            case -2:
                numCount = slider.length - 2;
                break;
            case -3:
                numCount = slider.length - 3;
                break;
        }
    }
    return numCount;
}

function addUpperPhoto(i = sliderNum){
    upperSliderTab.innerHTML = `<p class="slider__name">${slider[i].name}</p>
                                <p class="slider__job">${slider[i].job}</p>
                                <img src=${slider[i].photo} class="upper__slider__img" alt="${slider[i].alt}" width="142" height="142" />`
}
addUpperPhoto()

function addLowerPhoto(i = sliderNum){
    lowerSliderContainer.innerHTML = `<img src=${slider[minusIndex(i,3)].photo} onclick='clickPhoto(${minusIndex(i,3)})' class="lower__slider__img" alt="${slider[minusIndex(i,3)].alt}" width="61" height="61" />
                                      <img src=${slider[minusIndex(i,2)].photo} onclick='clickPhoto(${minusIndex(i,2)})' class="lower__slider__img" alt="${slider[minusIndex(i,2)].alt}" width="61" height="61" />
                                      <img src=${slider[minusIndex(i,1)].photo} onclick='clickPhoto(${minusIndex(i,1)})' class="lower__slider__img" alt="${slider[minusIndex(i,1)].alt}" width="61" height="61" />
                                      <img src=${slider[i].photo} class="lower__slider__img lower__slider__img--active" alt="${slider[i].alt}" width="61" height="61" />
                                      <img src=${slider[plusIndex(i,1)].photo} onclick='clickPhoto(${plusIndex(i,1)})' class="lower__slider__img" alt="${slider[plusIndex(i,1)].alt}" width="61" height="61" />
                                      <img src=${slider[plusIndex(i,2)].photo} onclick='clickPhoto(${plusIndex(i,2)})' class="lower__slider__img" alt="${slider[plusIndex(i,2)].alt}" width="61" height="61" />`
}
addLowerPhoto()

lowerSliderTab.addEventListener("click", e => {
    switch(e.target.className){
        case "slider__left":
            case "arrow arrow-left":
                goAnimationPlus();
                break;

        case "slider__right":
            case "arrow arrow-right":
                goAnimationMinus();
                break;
        }  
    }
)

window.addEventListener("keydown", e => {
    switch(e.key){
        case "ArrowLeft":
            goAnimationPlus();
            break;
        case "ArrowRight":
            goAnimationMinus();  
            break;
        }   
});

function clickPhoto(arg){
    sliderNum = arg
    addLowerPhoto()
    addUpperPhoto()
}

// Window Scroll Animation
const animation = document.querySelectorAll(".animation__element");

function anim(){
  for(let i = 0; i < animation.length; i++){
    const link = animation[i];
    const linkHeight = link.offsetHeight;
    function offsetXandY(e){
      const rect = e.getBoundingClientRect();
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; 
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
      }
    }
    const ScrollHeight = offsetXandY(link).top;
    let heightMinusCurrentEl = window.innerHeight - linkHeight;
    if(pageYOffset > ScrollHeight - heightMinusCurrentEl && pageYOffset < ScrollHeight + linkHeight){
      link.classList.add("animation");
    } else if(link.classList.contains("subtitle")){
        link.classList.remove("animation")
    }
  }
}
anim();

window.addEventListener("scroll", anim);