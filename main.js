if (typeof document === 'undefined') {
    console.log('This file uses the browser DOM. Open index.html to run it.');
} else {
    // Get Element by ID
    let titleElement = document.getElementById('page-title');
    console.log(titleElement); // Returns the h1 element
    console.log(titleElement.textContent); // TechZone Store

// Query selector
let productElement = document.querySelector('#products-section');
let firstProductCard = document.querySelector('.product-name');
console.log(productElement); // Returns the first div of the section
console.log(firstProductCard); // Returns the first h3 of the div

// Query selector all
let allProductPrices = document.querySelectorAll('.price');
let allProductNames = document.querySelectorAll('.product-name');
let allProductCards = document.querySelectorAll('.product-card');
console.log('Number of products:', allProductCards.length);
console.log('Number of names:', allProductNames.length);
console.log('Number of prices:', allProductPrices.length);

// Elements by class name
let productCards = document.getElementsByClassName('product-card');
console.log('product cards:', productCards.length);

// Element by tag name
let allParagraphs = document.getElementsByTagName('p');
console.log('All paragraphs:', allParagraphs.length);

// Loop with forEach()
let productCardsForEach = document.querySelectorAll('.product-card');
productCardsForEach.forEach((product, index) => {
    let name = product.querySelector('.product-name')?.textContent.trim();
    let price = product.querySelector('.price')?.textContent.trim();
    console.log(`Product ${index + 1}: ${name} - ${price}`);
});
}

//Inspect-element-properties 
let element = document.getElementById('products-heading');
console.log('---see elements properties---');
console.log('tag name:', element.tagName); // H2
console.log('id:', element.id);
console.log('class name:', element.className);
console.log('class list:', element.classList);

// Explore parent container
let container = document.querySelector('.container')
console.log('parent element:', container.parentElement);
console.log('parent node:', container.parentNode);
console.log('children:',container.children);
console.log('firstelementchild:', container.firstElementChild);
console.log('lastelementchild', container.lastElementChild);

// EXplore siblings element
console.log('child nodes:', container.childNodes);
console.log('first product card:', container.querySelector('.product-card'));
const nextElement = container.querySelector('.product-card').nextElementSibling;
const prevElement = container.querySelector('.product-card').previousElementSibling;