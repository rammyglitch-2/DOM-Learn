// Get Element by ID
let titleElement = document.getElementById('store-title');
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

