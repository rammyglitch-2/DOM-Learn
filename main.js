// Get Element byID
let title_Element = document.getelementbyid('store-title');
console.log(title_Element); // Return the h1 element
console.log(title_Element.textcontent);// TechZone Store

//query selector
let product_Element = document.querySelector('#products-section');
let first_productcard = document.querySelector('.product-name');
console.log(product_Element); // return the first div of the section
console.log(first_productcard); // return the first h3 of the div

// query selector all
let allproductprices = document.queryselectorall('prices'); 
let allproductnames = document.querySelectorAll('product-names'); 
let allproductcards = document.queryselectorall('product-card'); 
console.log('Number of products:', allProductCards.length);
console.log( 'Number of names:', allproductnames.length)
console.log('NUmber of prices:',allproductprices.length)

// Elements by class name

