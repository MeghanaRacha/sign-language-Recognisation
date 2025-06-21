// script.js
const products = [
    {
        id: 1,
        name: "Steel Tumbler",
        price: 19.99,
        image: "tumbler.jpg"
    },
    {
        id: 2,
        name: "Steel Bowl",
        price: 29.99,
        image: "bowl.jpg"
    },
    {
        id: 3,
        name: "Electronic Appliance",
        price: 99.99,
        image: "appliance.jpg"
    }
];

const productContainer = document.querySelector(".products ul");

products.forEach(product => {
    const productHTML = `
        <li class="product">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button>Add to Cart</button>
        </li>
    `;
    productContainer.insertAdjacentHTML("beforeend", productHTML);
});