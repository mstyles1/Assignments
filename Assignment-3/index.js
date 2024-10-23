let products = [
    {
        name: "Laptop",
        price: 999.99,
        description: "A high-performance laptop.",
        image: "laptop.jpeg"},
    {
        name: "Smartphone",
        price: 599.99,
        description: "A powerful smartphone.",
        image: "smartphone.jpeg"},
    {
        name: "Headphones",
        price: 199.99,
        description: "Noise-cancelling headphones.",
        image: "headphones.jpeg", }
]; 

for (let i = 0 ; i<products.length; i++) {
    let productItem = products[i]

    let productName = document.createElement ("h2")
    productName.textContent = productItem.name
    let productDescription = document.createElement ("p")
    productDescription.textContent = productItem.description
    let productImage = document.createElement ("img")
    productImage.src = `images/${productItem.image}`

    let sectionProduct = document.getElementById("productList")
    sectionProduct.appendChild (productName)
    sectionProduct.appendChild (productDescription)
    sectionProduct.appendChild (productImage)
}