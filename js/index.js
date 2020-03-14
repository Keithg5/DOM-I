// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");	let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])	logo.setAttribute('src', siteContent["nav"]["img-src"])

//  navbar

const navbar = document.querySelectorAll('nav a')

navbar.forEach((val, i) => 
    val.textContent = siteContent.nav [`nav-item-${i +1}`]
    )



// Navbar color
navbar[0].style.color = 'green';
navbar[1].style.color = 'green';
navbar[2].style.color = 'green';
navbar[3].style.color = 'green';
navbar[4].style.color = 'green';
navbar[5].style.color = 'green';
// navbar[0].textContent = siteContent.nav['nav-item-1']
// navbar[1].textContent = siteContent.nav['nav-item-2']
// navbar[2].textContent = siteContent.nav['nav-item-3'] 
// navbar[3].textContent = siteContent.nav['nav-item-4']
// navbar[4].textContent = siteContent.nav['nav-item-5']
// navbar[5].textContent = siteContent.nav['nav-item-6']




// title

const header = document.querySelector('.cta-text h1');

header.textContent = siteContent.cta['h1'];

// New Line Layout
const newLine = "\r \n";

header.textContent = "DOM" + newLine + "Is" + newLine + "Awesome";
header.style.whiteSpace = "pre";
header.style.color = '#233040';




//  Button

const button = document.querySelector('.cta-text button');

button.textContent = siteContent.cta['button'];


// header-img
let headImg = document.getElementById("cta-img");
headImg.setAttribute('src', siteContent["cta"]["img-src"]);


// H4s

const headertext = document.getElementsByTagName('h4');

headertext[0].textContent = siteContent['main-content']['features-h4'];
headertext[1].textContent = siteContent['main-content']['about-h4'];
headertext[2].textContent = siteContent['main-content']['services-h4'];
headertext[3].textContent = siteContent['main-content']['product-h4'];
headertext[4].textContent = siteContent['main-content']['vision-h4'];



// Center Img
const centerImg = document.getElementById('middle-img');
centerImg.setAttribute('src', ['img/mid-page-accent.jpg']);


// Paragraphs
const paras = document.querySelectorAll('.text-content p');

paras[0].textContent = siteContent['main-content']['features-content'];
paras[1].textContent = siteContent['main-content']['about-content'];
paras[2].textContent = siteContent['main-content']['services-content'];
paras[3].textContent = siteContent['main-content']['product-content'];
paras[4].textContent = siteContent['main-content']['vision-content'];


console.log(paras);


// contact header
const Contheader = document.querySelector('.contact h4');
Contheader.textContent = siteContent['contact']['contact-h4'];

// contact Text
let conText = document.querySelectorAll('.contact p');
conText[0].textContent = siteContent['contact']['address'];
conText[0].style.width = '9.3rem';
conText[1].textContent = siteContent['contact']['phone'];
conText[2].textContent = siteContent['contact']['email'];

// Footer

let foot = document.querySelector('footer');
foot.textContent = siteContent['footer']['copyright'];


// const featureText = document.querySelector('cta-text features-content')
// featureText.textContent = siteContent.cta[]

// append child hello
const navbarParent = document.querySelector('nav');
const hello = document.createElement('a');
hello.textContent="Hello"
hello.href = '#';
hello.style.color = 'green';
navbarParent.append(hello);

//  prepend child yeet

const navbarChild = document.querySelector('nav');
const yeet = document.createElement('a');
yeet.textContent = "YEET"
yeet.href = '#';
yeet.style.color = 'green';
navbarChild.prepend(yeet);