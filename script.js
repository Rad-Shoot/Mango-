//Pre-loading Animation
const preloader= document.querySelector('.pre-text')
const preloaderTexts=document.querySelectorAll('.pre-text h1');
preloaderTexts.forEach((heading,index)=>{
    heading.style.animation=`move-up 1s ease-in-out ${index/2}s forwards`;
})

function initWebsite(){
    preloader.style.animation='slide-out 1s ease-in-out 2s forwards';
}

//Making Navbar Responsive
const hamburger=document.querySelector('.hamburger');
const navlinks=document.querySelector('.navlinks');
const navItems=document.querySelectorAll('.navlinks li');

hamburger.addEventListener('click',()=>{
    navItems.forEach((li,index)=>{
    li.style.transition=`all 0.5s ease ${(index+1)/5}s`;
    })
    navlinks.classList.toggle('open');
})

/*Adding the Intersection Observer to Change Navbar Styling*/
let navbar=document.querySelector('nav')
let darkSection=document.querySelector('.dark-section');

observerOptions={
    threshold:0.7,
}

let sectionObserver= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            navbar.classList.add('dark')
        }else{
            navbar.classList.remove('dark');
        }
    })
},observerOptions)

sectionObserver.observe(darkSection);

//Making the Carousel Functional
const carouselView=document.querySelector('.carousel-view');
const nextBtn= document.querySelector('.right-chevron');
const prevBtn= document.querySelector('.left-chevron');
let carouselSlide=document.querySelector('.carousel-slide')
let carouselDots= document.querySelectorAll('.dot');
let activeDot=document.querySelector('.active-dot');

let slideCounter=0;

function showSlide(slide){
    let width=carouselSlide.getBoundingClientRect().width;
    slideCounter=slide;
    carouselView.style.transform=`translateX(${-slideCounter*width}px)`;
    activeDot.classList.remove('active-dot');
    carouselDots[slideCounter].classList.add('active-dot')
    activeDot=carouselDots[slideCounter]
}

nextBtn.addEventListener('click',()=>{
    if(slideCounter!=carouselDots.length-1){
        slideCounter++;
        showSlide(slideCounter);
    }else{
        slideCounter=0;
        showSlide(slideCounter);
    }
})

prevBtn.addEventListener('click',()=>{
    if(slideCounter!=0){
        slideCounter--;
        showSlide(slideCounter);
    }else{
        slideCounter=carouselDots.length-1;
        showSlide(slideCounter);
    }
})

carouselDots.forEach((dot,index)=>{
    dot.addEventListener('click',()=>{
        showSlide(index);
    })
})

setInterval(()=>{
    if(slideCounter!=carouselDots.length-1){
        slideCounter++;
        showSlide(slideCounter);
    }else{
        slideCounter=0;
        showSlide(slideCounter);
    }
},10000)

//Adding card functionality for mobile
let cards=document.querySelectorAll('.card');
let cardContents=document.querySelectorAll('.card-content');

if(window.innerWidth<1024){
    cards.forEach((card,index)=>{
        card.addEventListener('click',()=>{
            cardContents[index].style.transform=`rotateY(180deg)`;
        })
    })
}

//Adding Intersection Observers for Sections

//Information Section
let infoBlocks=document.querySelectorAll('.info-block')
let infoSectionOptions={
    threshold:0.2,
}

let infoBlocksObserver=new IntersectionObserver((entries)=>{
    entries.forEach((entry,index)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('active-block');
        }
    })
},infoSectionOptions)

infoBlocks.forEach((block)=>{
    infoBlocksObserver.observe(block);
})

//Card Section
const cardSection=document.querySelector('#card-section');
let cardSectionOptions={
    threshold:0.2,
}

let cardSectionObserver=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            cards.forEach((card)=>{
                card.classList.add('open-card');
            })
        }
    })
},cardSectionOptions)

cardSectionObserver.observe(cardSection);

//Contact Information Section
const contactInfoSection= document.querySelector('#contact-information-section');
let contactInfoBlocks=document.querySelectorAll('.contact-info-block');

let contactSectionObserver= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            contactInfoBlocks.forEach((block)=>{
                block.classList.add('active-block');
            })
        }
    })
})

contactSectionObserver.observe(contactInfoSection);
